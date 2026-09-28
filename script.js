const D=[
{t:'Causas',c:'#f4b942',d:'Motivos econômicos, políticos e ideológicos que empurraram as potências para fora da Europa.',k:[
['Revolução Industrial','Fábricas precisavam de matéria-prima barata (algodão, borracha, minérios) e de novos mercados consumidores.'],
['Capital monopolista','Bancos e grandes empresas acumularam capital e passaram a investir nas colônias em busca de lucro maior.'],
['Nacionalismo','Ter colônias virou símbolo de prestígio e poder entre os Estados europeus.'],
['Pressão demográfica','O crescimento da população europeia estimulou a migração para territórios controlados.'],
['Estratégia militar','Bases navais e rotas como o Canal de Suez garantiam o controle do comércio mundial.']]},
{t:'Partilha',c:'#4fd1c5',d:'A divisão do mundo entre as potências, feita sem ouvir os povos dominados.',k:[
['Conf. de Berlim','1884-85: as potências europeias definiram regras para repartir a África.'],
['Fronteiras artificiais','Linhas traçadas em mapas ignoraram etnias, línguas e culturas locais.'],
['Índia britânica','Após a Rebelião dos Cipaios (1857), a Coroa assumiu o governo direto da Índia.'],
['China','A Guerra do Ópio (1839-42) abriu o país ao comércio forçado e cedeu Hong Kong aos britânicos.'],
['Sudeste Asiático','A França dominou a Indochina; britânicos e holandeses controlaram Birmânia, Malásia e Indonésia.']]},
{t:'Potências',c:'#f56b8a',d:'Os principais países imperialistas e seus impérios.',k:[
['Reino Unido','O maior império: da Índia ao Egito, do Cabo ao Cairo.'],
['França','Domínio no norte e oeste da África, em Madagascar e no Sudeste Asiático.'],
['Alemanha e Itália','Unificadas tardiamente, chegaram atrasadas à partilha e buscaram recuperar terreno.'],
['Bélgica','O rei Leopoldo II controlou o Congo como propriedade pessoal, com violência brutal contra os nativos.'],
['EUA e Japão','Potências emergentes fora da Europa: EUA nas Filipinas e Caribe; Japão na Coreia e Taiwan.']]},
{t:'Justificativas',c:'#9b7bff',d:'Ideias usadas para legitimar a dominação.',k:[
['Darwinismo social','Teoria pseudocientífica que classificava povos como “superiores” e “inferiores”.'],
['Fardo do homem branco','Discurso de que caberia ao europeu “civilizar” o resto do mundo.'],
['Missão civilizadora','Justificativa religiosa e cultural para impor costumes, línguas e crenças.'],
['Racismo científico','Teorias sobre raças usadas para legitimar hierarquias e a exploração de povos.']]},
{t:'Consequências',c:'#ff9a56',d:'Efeitos duradouros para colonizadores e colonizados.',k:[
['Exploração econômica','Monoculturas, trabalho forçado e riquezas enviadas à metrópole; ferrovias serviam para escoar produtos.'],
['Impacto cultural','Perda de línguas, religiões e formas de organização locais.'],
['Conflitos étnicos','Herança das fronteiras artificiais e da política de “dividir para dominar”, como em Ruanda.'],
['Rumo à 1ª Guerra','Crises como Fashoda (1898) e as disputas pelo Marrocos aumentaram as tensões entre as potências.']]},
{t:'Resistências',c:'#7bd88f',d:'Povos dominados reagiram de muitas formas, armadas e políticas.',k:[
['Zulus','Em 1879, guerreiros zulus venceram tropas britânicas em Isandlwana.'],
['Etiópia em Adwa','1896: a Etiópia derrotou a Itália e preservou a independência.'],
['Revolta dos Boxers','Levante chinês (1899-1901) contra a influência estrangeira.'],
['Cipaios','Soldados indianos se rebelaram em 1857 contra a Companhia das Índias Orientais.'],
['Gandhi','Resistência não violenta que ajudou a levar à independência da Índia em 1947.']]},
{t:'Cronologia',c:'#5aa9ff',d:'Marcos do avanço imperialista entre o início do século XIX e a Primeira Guerra.',k:[
['1839-42','Guerra do Ópio: a China é forçada a abrir seus portos.'],
['1869','Inauguração do Canal de Suez, eixo do comércio entre Europa e Ásia.'],
['1884-85','Conferência de Berlim e partilha da África.'],
['1898','Crise de Fashoda e Guerra Hispano-Americana.'],
['1914','Início da Primeira Guerra, em parte fruto das rivalidades imperiais.']]},
{t:'Legado',c:'#e879f9',d:'Como o imperialismo ainda influencia o mundo atual.',k:[
['Descolonização','Após 1945, Ásia e África conquistaram independência; a Conferência de Bandung (1955) uniu os novos países.'],
['Neocolonialismo','Dependência econômica e política mesmo após a independência formal.'],
['Fronteiras herdadas','Muitos limites traçados na era colonial permanecem e alimentam tensões.'],
['Memória e reparações','Debates atuais sobre pedidos de desculpas, devolução de obras e reparação histórica.']]}
];
const st=document.getElementById('stage'),svg=document.getElementById('svg'),panel=document.getElementById('panel');
const NS='http://www.w3.org/2000/svg';
function mk(cls,txt,c,fn){const e=document.createElement('div');e.className='n '+cls;e.textContent=txt;if(c)e.style.setProperty('--c',c);e.onclick=fn;st.appendChild(e);return e}
function show(t,d,c){panel.classList.add('swap');setTimeout(()=>{panel.style.setProperty('--c',c);panel.innerHTML='<b></b><span></span>';panel.firstChild.textContent=t;panel.lastChild.textContent=d;panel.classList.remove('swap')},180)}
function line(c){const p=document.createElementNS(NS,'path');p.setAttribute('stroke',c);svg.appendChild(p);return p}
const core=mk('core','Imperialismo',null,()=>{const all=D.every(b=>b.open);D.forEach(b=>toggle(b,!all));show('Imperialismo','Expansão e dominação de potências industriais sobre territórios da África, Ásia e Oceania, principalmente entre 1870 e 1914.','#f4b942')});
D.forEach((b,i)=>{
 b.el=mk('br',b.t,b.c,()=>{toggle(b,!b.open);show(b.t,b.d,b.c)});
 b.ln=line(b.c);b.ln.style.opacity=.7;
 b.kids=b.k.map(([t,d])=>{const o={el:mk('lf',t,b.c,()=>show(t,d,b.c)),ln:line(b.c)};o.ln.style.opacity=0;return o});
});
function toggle(b,v){b.open=v;b.el.classList.toggle('on',v);b.kids.forEach((k,j)=>{setTimeout(()=>{k.el.classList.toggle('show',v);k.ln.style.opacity=v?.45:0},v?j*90:0)})}
function pos(e,x,y){e.style.left=x+'px';e.style.top=y+'px'}
function curve(p,x1,y1,x2,y2){const mx=(x1+x2)/2,my=(y1+y2)/2,dx=x2-x1,dy=y2-y1;p.setAttribute('d',`M${x1},${y1} Q${mx-dy*.15},${my+dx*.15} ${x2},${y2}`);const L=p.getTotalLength?p.getTotalLength():0;}
function layout(){
 const w=innerWidth,h=innerHeight,cx=w/2,cy=h/2-20,n=D.length;
 const r1x=w*.2,r1y=h*.2,r2x=w*.4,r2y=h*.4;
 pos(core,cx,cy);
 D.forEach((b,i)=>{
  const a=-Math.PI/2+i*2*Math.PI/n;
  const bx=cx+Math.cos(a)*Math.max(r1x,80),by=cy+Math.sin(a)*Math.max(r1y,80);
  pos(b.el,bx,by);curve(b.ln,cx,cy,bx,by);
  const m=b.kids.length;
  b.kids.forEach((k,j)=>{
   const aa=a+(j-(m-1)/2)*(w<600?.5:.36);
   let kx=cx+Math.cos(aa)*r2x,ky=cy+Math.sin(aa)*r2y;
   kx=Math.min(Math.max(kx,68),w-68);ky=Math.min(Math.max(ky,60),h-60);
   pos(k.el,kx,ky);curve(k.ln,bx,by,kx,ky);
  });
 });
}
addEventListener('resize',layout);layout();
setTimeout(()=>{toggle(D[0],true);show(D[0].t,D[0].d,D[0].c)},700);
/* fundo: partículas com parallax */
const cv=document.getElementById('cv'),g=cv.getContext('2d');let P=[],mx=0,my=0;
function rs(){cv.width=innerWidth;cv.height=innerHeight;P=Array.from({length:Math.min(90,innerWidth/10)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,z:Math.random()*.8+.2,v:Math.random()*.3+.05}))}
rs();addEventListener('resize',rs);
addEventListener('pointermove',e=>{mx=(e.clientX/innerWidth-.5);my=(e.clientY/innerHeight-.5)});
(function f(){g.clearRect(0,0,cv.width,cv.height);
 P.forEach(p=>{p.y-=p.v;if(p.y<0){p.y=cv.height;p.x=Math.random()*cv.width}
  const x=p.x-mx*40*p.z,y=p.y-my*40*p.z;g.fillStyle=`rgba(255,226,154,${.15+p.z*.5})`;g.beginPath();g.arc(x,y,p.z*1.8,0,7);g.fill()});
 P.forEach((a,i)=>{for(let j=i+1;j<P.length;j++){const b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<90){g.strokeStyle=`rgba(154,163,189,${.12*(1-d/90)})`;g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.stroke()}}});
 requestAnimationFrame(f)})();