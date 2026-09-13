import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Menu, ShoppingBag, X, Instagram, MessageCircle, Facebook, Minus, Plus, ChevronRight, ArrowLeft, Trash2 } from 'lucide-react';
import './styles.css';

const WA_NUMBER = '60165233840';
const INSTAGRAM = 'https://www.instagram.com/maybe_lovi_scent?stkn=dHptNHR2YjhlMDcz';
const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd9y-u0zpLgUMyGR3aY9SWMzYurL_BiHDPAnbPVDCy4Vkofca9I0Jlupn9GJYQ2CrWGJqM7nJe5v-A8jiAnHw_Vvqs3x-oK4Hh2e3-he2mEhlgfcwzElMugSyxUuLKfub1dDVRX5WIiS-iBjztJ5u6u0xRI1XBryVaKiiFIZl-uHbVIc_nrVdKskRPSZOilIAVGSuPMg_2oSutt8vUW1Ne1p3EkF9jFL2a3C9ux--N-ACl8MpJoyK5ORNNzp3TO3O8QA';

const SCENTS = [
  ['muguet','Morning Light Muguet','晨露铃兰','Fresh · Pure · Healing'],
  ['oolong','Jasmine Oolong Tea','茉莉乌龙茶','Elegant · Calm · Refined'],
  ['tulipe','La Tulipe (B Type)','郁金香花园','Fresh · Elegant · Sophisticated'],
  ['peony','Peony (L Type)','粉色牡丹','Romantic · Soft · Feminine'],
  ['tuberose','Do Son Tuberose (D Type)','晚香玉','Intense · Sensual · Luxurious']
];

const PRODUCTS = [
  {
    id:'bear-blossom', name:'Fairytale Bear & Blossom Soy Candle', zh:'童话小熊与繁花手作蜡烛', price:88,
    desc:'把柔软的小熊与花朵气息，做成一份安静又温柔的心意。',
    image:'https://lh3.googleusercontent.com/aida-public/AB6AXuBeyY_yapXKu9cIsHlNY1low85ktVYzgwzdMm9kfdg5nqDt1VD6TJIY6btZeOLYK1BbRGUB9661TOQuHLOVi01CwItu4q-7Sj8Toxqho1fkOIgYapzaoSDGTnnqvBQCvd_B1uHOZjXxOoNAiXevacuzlGP3AGDMDuWIbyeMlSyjtVIGdWhbzX6UA7BSNs37iCe5QqSAlD_e8jpytubKTnSoGgsx43hoA00xQj7SBizgem5QwLExfh-2',
    gallery:[
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeyY_yapXKu9cIsHlNY1low85ktVYzgwzdMm9kfdg5nqDt1VD6TJIY6btZeOLYK1BbRGUB9661TOQuHLOVi01CwItu4q-7Sj8Toxqho1fkOIgYapzaoSDGTnnqvBQCvd_B1uHOZjXxOoNAiXevacuzlGP3AGDMDuWIbyeMlSyjtVIGdWhbzX6UA7BSNs37iCe5QqSAlD_e8jpytubKTnSoGgsx43hoA00xQj7SBizgem5QwLExfh-2',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlm9UBg43WvD4DFaXuS-yQWWCiA_8ox1u3cJlacQVkJ2E_0oVLWPgRB-OIa1HWCagnk1apRcBDcLthyWTJ2NKEb-JqUIPYbyfRFCkMhLhX62KprRcRV0S4WYIhb3QTsrFJb_cIs-DIHuDHBMiTcsmC2d8qi-XPx1QkNimEoTq0cHbSdG234tI3tmuM30EyraQgoMhP3VtmPChIve4hEkEUupnxXQTaHyBVvYS8uh_8Pi-kS11QMVOz',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjOxhAzIljPnWfX9KJMYjbST--w8qmQJP33s_FY-844Uazkh9zbeUApyYm0L8DJAFEHFe8sTNNg-J4wjjSrUzFC2arvpXGOaadTfUF2jH3cxofJ1CgaYRLp4tDyyt0hQgZ8UWpuXGfl4whcNiImoEvO1q-ZQTKWhiHjgtTyKm4eqDTjBlyIqwo0WQOqUUi_OEol014h76dG1-hvzHdYIEEKoa5pVMyDA-Zk7TsZ-5Ez5ewL1Vfr9N_',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoEKG02MMa-J04J70B855nzV5OIhzfzbuq9aJgnQyy-2YRxRls8cq-bOV_QhQ0Kid5notHUU23RLulDobXFZveCjvJd25n8JRmb8Oq4b6jtf5g3HoRg8m9Y3mYtnvrUVIHyTUpwRhYculmHnLHvp9iH8dhHyUbRd_l6xM3GKH82yOz8bpZIincQ_MRGhKNKvTD4NiJYUzJkAEdOASTyQ71aptG2y0vV8a-pcx4eUQykzvLcEtpTsSq'
    ]
  },
  {id:'puppy',name:'Baby Girl Puppy Candle',zh:'Baby Girl 小狗蜡烛',price:58,desc:'以温柔小狗造型做成的可爱心意。',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDneSqr84OhgTu3Owei-BP2ITOMbYXHfw4nxbk5kOh7uBNGAF_VzvOzMov68wt1sTUhJagBL-pAJ0KyyMeLz42QEL7NaXPwrOp0Qsl-ogOoF8Inlt6B8Dyjwo1PGCW3i4AiUeBMJtFEdmr2fxAphBs1aSW5ZgP2Y84AQc9OhoGLeWcc8JQRSzFmeMnuJqR8VOxuZ4nTGU3vNNp67Q6Ibpo2cvr6kJi1vKfPbt4GWOjiX6k4ySOVyBXu'},
  {id:'bunny',name:'Sleepy Bunny Candle',zh:'安睡小兔蜡烛',price:62,desc:'安静、柔软，适合送给想被好好照顾的人。',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuBCQIsx1-Vewp3hhTrfkTbooDu_psyY5-4YdFz3d2LsiqR6SXNagJwIRs16di6iASH0mi3k923RrRggbiHa1izy1N9BosiaLWF0Ho2qjfXLB9pQfl0BefoZHoGmJF3GaDpgElI38HhCmBROnDJ1rCU3ekBQLeyjJIBUUsLu2GFk_r9-ZtpUccltJiikMb3qnDDWRti3RKf0cOR-yNdT1hfA9AcrpGKCVhobWpxnnSEgxw7728Yd8puq'},
  {id:'cake',name:'Strawberry Cake Candle',zh:'草莓蛋糕蜡烛',price:56,desc:'一点甜，一点庆祝感，适合轻松的送礼时刻。',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDQApilp32-yYAGM3FPwY7PTzgzZmXApc260lxokbMDu4tW9Vz9DrCT5pWCBWfXCfXNrlbFDCK58Z4klDIZ7fKwArnCvuoqnAIpdXucEpBCMKwRecyDaEhwuw2hLjZ8buFrnwaS9Zm_GwJHxWg9fApUjgKcBPJz1yhD3VrS-Nz_lMNrcfjpWmX4fNfDQrM_sIg6ZxQACZ6_NDyq9GqT3NRRfGTqkkicw767MeRzEDgD71ylAYcIXxXf'},
  {id:'sachet',name:'Botanic Floral Sachet',zh:'植物花香挂件',price:48,desc:'轻盈花材与香气组合，作为房间里的小小心意。',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuCmx3iQ5iW13YPcu9Z8jvK58clGtsOqKJ7ueNyHsYFlIUwfKzY2ZIQTezDz1EIMYvvQhSc3ZI-4cHCEBLhwV0CPpYJzKGohQdHkd2EaYlPOC_QBX9NbTc8sFYAPn3OTN_ISnbrhQUE1F8gsQm3alj3ZnQrXU_qM3cYMwYn2zAVBaxUZa5DGkv0ceOO2Xp30TSw3wXUVx1euXpSGL6llZewP91J2lpw9d6UtQG88nHp8ku7TExJ2v2g'}
];

const CartContext = React.createContext(null);

function useCartStore(){
  const [cart,setCart] = useState(()=>{
    try{return JSON.parse(localStorage.getItem('maybe-lovi-cart')||'[]')}catch{return []}
  });
  useEffect(()=>localStorage.setItem('maybe-lovi-cart',JSON.stringify(cart)),[cart]);
  const add=(product,scent,qty)=>setCart(prev=>{
    const key=`${product.id}:${scent[0]}`;
    const found=prev.find(i=>i.key===key);
    if(found) return prev.map(i=>i.key===key?{...i,qty:i.qty+qty}:i);
    return [...prev,{key,productId:product.id,name:product.name,image:product.image,price:product.price,scentId:scent[0],scentEn:scent[1],scentZh:scent[2],qty}];
  });
  const updateQty=(key,qty)=>setCart(prev=>prev.map(i=>i.key===key?{...i,qty:Math.max(1,qty)}:i));
  const remove=(key)=>setCart(prev=>prev.filter(i=>i.key!==key));
  const clear=()=>setCart([]);
  const count=cart.reduce((n,i)=>n+i.qty,0);
  const subtotal=cart.reduce((n,i)=>n+i.qty*i.price,0);
  return {cart,add,updateQty,remove,clear,count,subtotal};
}

function App(){
  const store=useCartStore();
  const [menuOpen,setMenuOpen]=useState(false);
  return <CartContext.Provider value={store}>
    <BrowserRouter>
      <SiteShell menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </BrowserRouter>
  </CartContext.Provider>
}

function SiteShell({menuOpen,setMenuOpen}){
  const {count}=React.useContext(CartContext);
  return <>
    <div className="announcement">♡ A LITTLE GIFT OF WARM LOVE · HANDCRAFTED IN STUDIO</div>
    <header className="site-header">
      <button className="icon-btn" aria-label="打开菜单" onClick={()=>setMenuOpen(true)}><Menu size={22}/></button>
      <Link to="/" className="brand-logo"><img src={LOGO} alt="MAYBE LOVI"/></Link>
      <div className="header-actions"><button className="lang-btn">EN</button><Link className="bag-link" to="/cart"><ShoppingBag size={21}/>{count>0&&<span className="bag-badge">{count}</span>}</Link></div>
    </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/studio" element={<Studio/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <MenuDrawer open={menuOpen} close={()=>setMenuOpen(false)}/>
  </>
}

function MenuDrawer({open,close}){
  const {count}=React.useContext(CartContext);
  const nav=[['01','首页','Home','/'],['02','产品','Shop','/shop'],['03','关于我们','About','/about'],['04','工坊与故事','Studio','/studio'],['05','联系我们','Contact','/contact']];
  return <div className={`drawer-root ${open?'open':''}`} aria-hidden={!open}>
    <button className="drawer-scrim" onClick={close} aria-label="关闭菜单"/>
    <aside className="menu-drawer">
      <div className="drawer-top"><img src={LOGO} alt="MAYBE LOVI"/><button className="icon-btn" onClick={close}><X size={20}/></button></div>
      <div className="drawer-label">NAVIGATION · 目录</div>
      <nav className="drawer-nav">{nav.map(([n,zh,en,to])=><Link key={to} to={to} onClick={close}><span>{n}</span><b>{zh}</b><em>{en}</em></Link>)}</nav>
      <div className="drawer-spacer"/>
      <Link className="drawer-cart" to="/cart" onClick={close}><ShoppingBag size={15}/><span>心意袋 · Cart</span><i>{count}</i></Link>
      <div className="drawer-section"><small>LANGUAGE · 语言</small><div className="pills"><button className="active">中文</button><button>EN</button><button>BM</button></div></div>
      <div className="drawer-section"><small>CONNECT WITH MAY</small><div className="social-mini"><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={15}/></a><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={15}/></a><button disabled><Facebook size={15}/></button><button disabled>RED</button></div></div>
      <div className="drawer-brand">MAYBE LOVI STUDIO<small>GOOD SCENT · HAPPY MOMENTS ♡</small></div>
    </aside>
  </div>
}

function Footer(){
  return <footer className="footer">
    <h3>CONTACT US</h3>
    <div className="footer-socials"><button disabled><Facebook size={18}/></button><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/></a><button disabled className="red-icon">RED</button></div>
    <div className="footer-contact">Instagram: @maybe_lovi_scent<br/>WhatsApp: +60 16-523 3840</div>
    <div className="pink-rule"/>
    <div className="footer-brand">MAYBE LOVI STUDIO<span>GOOD SCENT · HAPPY MOMENTS ♡</span><small>Handcrafted with warm love in Studio.</small><small>© 2026 MAYBE LOVI. All rights reserved.</small></div>
  </footer>
}

function Trust(){return <div className="trust-line"><span>SDCA 韩国认证香薰蜡烛</span><i>·</i><span>香水拥有 IFRA 国际标准认证</span></div>}

function Home(){
  return <main>
    <section className="home-hero wrap">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAondSrJPhXwvYqFhxBNCYInGWPApH0dxKi63olMZvaedCGkRks6ap4lW0yNygn8NfZKQiyz7UHo_e2tuk25pUkhbQrNNJ9OUSVcSXAF06uK2iu1e7uXVlU-IoiJq4jdIeAFLjnlHjErQxhf9BAW-hjOs6DqFg-OrLtT_LTVrtShyaQFgtq4bcfoLFQ5B1J-PTx3mFCvjCdOIYo9rfzV3kBJq3F9XR9gVllnwNeGs4CupLTuudEd3MY" alt="MAYBE LOVI candle"/>
      <h1>把想说的温柔，<br/>做成一份礼物</h1><p>香气、手作，和一点被惦记的感觉。</p>
      <Link className="primary-btn" to="/shop">挑选一份心意 ♡</Link><Link className="text-link" to="/about">了解 MAYBE LOVI →</Link>
    </section>
    <section className="wrap section"><div className="section-head"><small>CURATED FOR SWEET MOMENTS</small><h2>心意香气精选</h2></div>
      <ProductCard product={PRODUCTS[0]} featured/>
      <div className="product-grid">{PRODUCTS.slice(1,3).map(p=><ProductCard key={p.id} product={p}/>)}</div>
      <div className="center"><Link className="text-link" to="/shop">查看全部产品 →</Link></div>
    </section>
    <section className="wrap split-story section"><div className="story-card"><img src={LOGO} alt="MAYBE LOVI"/><h2>MAYBE LOVI</h2><p>MAYBE LOVI 想把爱、关心与惦记，做成一份可以送出去的心意。</p><Link className="text-link" to="/about">我们的故事 →</Link></div>
      <div className="story-card studio-card"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzFcJJZ2eYSBOnLSg5n1y4ia5yrfRJh5BK92Bvh_l6vtVQmvNAps8z9fHg2pHsre5O2tCluS-k4NI7aGamkhyW70tamzCBCiKCPr3wMsoyj9REZf0qFCQHWA5-mqsN2A7sr_Mk4Eg-6K5s31F0OfONu0FTeHzDjMDxRtOySEweKF85qeQ91Bi3Jo8jLbZzYRMO50uw4cMAGRaNh5DqhYcamgt0IwT62rR54_5JkQ2qH4HRZKtQiSya" alt="Studio"/><p>每一份香气，都从 May 的小小工作室开始。</p><Link className="text-link" to="/studio">走进 Studio →</Link></div></section>
    <div className="wrap"><Trust/></div><Footer/>
  </main>
}

function ProductCard({product,featured=false}){
  return <article className={`product-card ${featured?'featured':''}`}><Link to={`/product/${product.id}`}><img src={product.image} alt={product.name}/></Link><div className="product-copy"><div className="product-title-row"><h3>{product.name}</h3><b>RM {product.price}</b></div><p>5 种香气可选</p><Link className={featured?'primary-btn small':'outline-btn'} to={`/product/${product.id}`}>查看详情 {featured?'& 选配香型':'→'}</Link></div></article>
}

function Shop(){return <main><section className="wrap section shop"><div className="section-head"><small>首页 / 产品</small><h1>礼物与香氛系列</h1><p>每一个造型都是一件手作心意 · 5 款固定香型自由搭配</p></div><ProductCard product={PRODUCTS[0]} featured/><div className="product-grid">{PRODUCTS.slice(1).map(p=><ProductCard key={p.id} product={p}/>)}</div><Trust/></section><Footer/></main>}

function ProductDetail(){
  const {id}=useParams(); const nav=useNavigate(); const product=PRODUCTS.find(p=>p.id===id)||PRODUCTS[0]; const {add}=React.useContext(CartContext);
  const gallery=product.gallery||[product.image,product.image,product.image,product.image];
  const [index,setIndex]=useState(0),[sheet,setSheet]=useState(false),[scent,setScent]=useState(null),[qty,setQty]=useState(1),[added,setAdded]=useState(false);
  const confirm=()=>{if(!scent){setSheet(true);return;}add(product,scent,qty);setAdded(true);setTimeout(()=>setAdded(false),1500)};
  return <main><section className="wrap product-detail"><button className="back-link" onClick={()=>nav('/shop')}><ArrowLeft size={14}/>返回产品</button>
    <div className="gallery"><div className="gallery-main"><img src={gallery[index]} alt={product.name}/><span>{index+1} / {gallery.length}</span></div><div className="thumbs">{gallery.map((g,i)=><button key={i} className={i===index?'active':''} onClick={()=>setIndex(i)}><img src={g}/></button>)}</div></div>
    <div className="detail-copy"><h1>{product.name}</h1><p className="muted">{product.zh}</p><div className="price">RM {product.price}</div><p>{product.desc}</p></div>
    <button className="selector-card" onClick={()=>setSheet(true)}><span><small>香气与数量 · SCENT & QUANTITY</small><b>{scent?`${scent[2]} · 数量 ${qty}`:`请选择香气 · 数量 ${qty}`}</b></span><ChevronRight size={17}/></button>
    <button className="primary-btn full" onClick={confirm}>{added?'已存入心意袋 ♡':`加入心意袋 ♡${scent?` · RM ${product.price*qty}`:''}`}</button>
    <Trust/><section className="product-story"><h3>手作温度 · 细节与呵护</h3><p>以小批量、慢节奏的方式完成每一份作品，让产品保留手作的温度与心意。</p></section>
    <a className="wa-row" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">在 WhatsApp 与 May 聊聊手作心意 ↗</a>
  </section><Footer/>{sheet&&<ScentSheet current={scent} qty={qty} setQty={setQty} close={()=>setSheet(false)} confirm={(s)=>{setScent(s);setSheet(false)}}/>}</main>
}

function ScentSheet({current,qty,setQty,close,confirm}){
  const [selected,setSelected]=useState(current);
  return <div className="sheet-root"><button className="sheet-scrim" onClick={close}/><section className="sheet"><div className="sheet-handle"/><div className="sheet-head"><div><h2>选择香气与数量</h2><small>CHOOSE SCENT & QUANTITY</small></div><button className="icon-btn soft" onClick={close}><X size={19}/></button></div><div className="scent-list">{SCENTS.map(s=><button key={s[0]} className={`scent-option ${selected?.[0]===s[0]?'selected':''}`} onClick={()=>setSelected(s)}><i/><span><b>{s[1]} · {s[2]}</b><small>{s[3]}</small></span></button>)}</div><div className="quantity-row"><b>数量 · Quantity</b><div className="stepper"><button onClick={()=>setQty(Math.max(1,qty-1))}><Minus size={14}/></button><span>{qty}</span><button onClick={()=>setQty(qty+1)}><Plus size={14}/></button></div></div><button className="primary-btn full" disabled={!selected} onClick={()=>selected&&confirm(selected)}>{selected?'确认选择':'请选择一款香型'}</button></section></div>
}

function About(){return <main><section className="wrap content-page"><div className="editorial-hero"><small>ABOUT MAYBE LOVI</small><h1>把爱与惦记，做成可以送出去的心意。</h1><p>MAYBE LOVI 是一个关于温柔、关心与祝福的小小手作品牌。</p></div><div className="content-block"><h2>名字里的心意</h2><p>May，是主理人的名字；M 也带着 Mom 的温暖；be 连着 Baby Girl 的陪伴；Lovi，则是 Love 的延伸。</p></div><div className="values"><div>Warmth</div><div>Care</div><div>Sincerity</div><div>Thoughtfulness</div></div><div className="center"><Link className="primary-btn" to="/shop">去挑选一份心意 ♡</Link></div></section><Footer/></main>}
function Studio(){return <main><section className="wrap content-page"><div className="editorial-hero"><small>STUDIO</small><h1>每一份香气，都从一个安静的小工作室开始。</h1></div><img className="content-hero-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzFcJJZ2eYSBOnLSg5n1y4ia5yrfRJh5BK92Bvh_l6vtVQmvNAps8z9fHg2pHsre5O2tCluS-k4NI7aGamkhyW70tamzCBCiKCPr3wMsoyj9REZf0qFCQHWA5-mqsN2A7sr_Mk4Eg-6K5s31F0OfONu0FTeHzDjMDxRtOySEweKF85qeQ91Bi3Jo8jLbZzYRMO50uw4cMAGRaNh5DqhYcamgt0IwT62rR54_5JkQ2qH4HRZKtQiSya"/><div className="content-block"><h2>慢一点，认真一点</h2><p>这里会逐步换成 May 的真实工作室照片。当前版本先用概念图承载空间氛围，等工作室完成后再替换。</p></div><div className="center"><Link className="primary-btn" to="/shop">看看作品 →</Link></div></section><Footer/></main>}
function Contact(){return <main><section className="wrap content-page contact-page"><div className="editorial-hero"><small>CONTACT</small><h1>Let's Talk ♡</h1><p>想问产品、挑香气，或者只是想聊聊，也可以直接找到 MAYBE LOVI。</p></div><a className="contact-card" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle/><span><b>WhatsApp</b><small>+60 16-523 3840</small></span><ChevronRight/></a><a className="contact-card" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram/><span><b>Instagram</b><small>@maybe_lovi_scent</small></span><ChevronRight/></a><div className="contact-card disabled"><Facebook/><span><b>Facebook</b><small>Coming Soon</small></span></div><div className="contact-card disabled"><b className="red-icon">RED</b><span><b>小红书</b><small>Coming Soon</small></span></div></section><Footer/></main>}

function Cart(){
  const {cart,updateQty,remove,subtotal}=React.useContext(CartContext);
  const orderText=useMemo(()=>{
    if(!cart.length)return '';
    const lines=['MAYBE LOVI Order','']; cart.forEach((i,idx)=>{lines.push(`${idx+1}. ${i.name}`,`${i.scentZh} / ${i.scentEn}`,`Qty ${i.qty} · RM ${i.price*i.qty}`,'')}); lines.push(`Subtotal: RM ${subtotal}`,'','库存、运费与付款方式请帮我确认，谢谢 ♡'); return lines.join('\n');
  },[cart,subtotal]);
  if(!cart.length)return <main><section className="wrap empty-cart"><ShoppingBag size={42}/><h1>你的心意袋还是空的</h1><p>先去看看 MAYBE LOVI 的作品吧。</p><Link className="primary-btn" to="/shop">去看看产品 →</Link></section><Footer/></main>;
  return <main><section className="wrap content-page cart-page"><div className="editorial-hero"><small>CART</small><h1>心意袋</h1></div><div className="cart-list">{cart.map(i=><div className="cart-item" key={i.key}><img src={i.image}/><div className="cart-info"><b>{i.name}</b><small>{i.scentZh} · {i.scentEn}</small><span>RM {i.price}</span><div className="cart-controls"><div className="stepper"><button onClick={()=>updateQty(i.key,i.qty-1)}><Minus size={13}/></button><span>{i.qty}</span><button onClick={()=>updateQty(i.key,i.qty+1)}><Plus size={13}/></button></div><button className="trash" onClick={()=>remove(i.key)}><Trash2 size={15}/></button></div></div><strong>RM {i.price*i.qty}</strong></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><b>RM {subtotal}</b></div><p>运费、库存与付款方式将在 WhatsApp 中确认。</p><a className="primary-btn full" href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(orderText)}`} target="_blank" rel="noreferrer">通过 WhatsApp 发送订单 ♡</a><Link className="text-link center" to="/shop">继续挑选产品 →</Link></div></section><Footer/></main>
}

createRoot(document.getElementById('root')).render(<App/>);
