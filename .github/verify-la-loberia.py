from pathlib import Path
from playwright.sync_api import sync_playwright
import json
base='https://www.lachocolateraecuador.com'
out=Path('visual-evidence');out.mkdir(exist_ok=True)
data=[]
with sync_playwright() as pw:
    browser=pw.chromium.launch(channel='chrome')
    for screen,w,h in [('desktop',1260,900),('mobile',390,844)]:
        ctx=browser.new_context(viewport={'width':w,'height':h},is_mobile=screen=='mobile',has_touch=screen=='mobile',device_scale_factor=1,reduced_motion='reduce')
        page=ctx.new_page()
        for lang in ['zh','es','en']:
            prefix='/'+lang
            page.goto(base+prefix,wait_until='domcontentloaded')
            homefooter=page.locator('footer').inner_text()
            for kind in ['home','guide']:
                if kind=='guide':
                    link=page.locator('a[href="'+prefix+'/nearby/la-loberia"]').first
                    link.click(timeout=20000);page.wait_for_url('**/nearby/la-loberia*')
                page.evaluate('document.fonts.ready')
                page.evaluate('window.scrollTo({top:0,behavior:"instant"})')
                bg=page.locator('.hero-bg').first
                img=bg.evaluate("""async e=>{
                   let source=getComputedStyle(e).backgroundImage.match(/url\\(["']?([^"')]+)["']?\\)/)?.[1] || e.querySelector('img')?.currentSrc;
                   if(!source)return null;
                   const im=new Image();im.src=source;await im.decode();
                   const r=e.getBoundingClientRect();return {source:imageUrl(source),pixels:im.naturalWidth,width:r.width,height:r.height,visible:getComputedStyle(e).visibility==='visible'&&Number(getComputedStyle(e).opacity)>0};
                   function imageUrl(u){return new URL(u,location.href).href}
                }""")
                dims=page.evaluate('()=>[document.documentElement.clientWidth,document.documentElement.scrollWidth]')
                footer=page.locator('footer')
                rec={'screen':screen,'lang':lang,'page':kind,'url':page.url,'widths':dims,'image':img,'footerEqualsHome':footer.inner_text()==homefooter,'links':footer.locator('a').count(),'legal':[a.get_attribute('href') for a in footer.locator('a').all() if (a.get_attribute('href') or '').endswith(('/terms','/cookies','/privacy'))]}
                if dims[1]>dims[0]+1: rec['overflowElements']=page.evaluate("""()=>Array.from(document.querySelectorAll('*')).filter(x=>x.getBoundingClientRect().right>innerWidth+1).slice(0,8).map(e=>e.tagName+'.'+e.className)""")
                data.append(rec)
                name=screen+'-'+lang+'-'+kind
                page.screenshot(path=out/(name+'-hero.png'),animations='disabled')
                footer.screenshot(path=out/(name+'-footer.png'),animations='disabled')
        ctx.close()
    browser.close()
(out/'results.json').write_text(json.dumps(data,indent=2,ensure_ascii=False))
bad=[x for x in data if x['widths'][1]>x['widths'][0]+1 or not x['footerEqualsHome'] or not x['links'] or not x['image'] or x['image']['pixels']<200 or not x['image']['visible'] or x['image']['height']<100]
print(json.dumps({'checked':len(data),'issues':bad},ensure_ascii=False))
assert not bad
