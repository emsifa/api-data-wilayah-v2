import{r as e,t}from"./react.OrosJ8bI.js";import{n,t as r}from"./jsx-runtime.CkeOAYRz.js";import{n as i,t as a}from"./copy.DpzmsnDH.js";import{t as o}from"./download.DEH-Es79.js";import{t as s}from"./external-link.DqiAwwGw.js";var c=n(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),l=e(t(),1),u=r();function d({title:e,subtitle:t,badge:n,defaultOpen:r=!1,children:i}){let[a,o]=(0,l.useState)(r);return(0,u.jsxs)(`div`,{className:`overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-slate-300`,children:[(0,u.jsxs)(`button`,{onClick:()=>o(!a),"aria-expanded":a,className:`flex w-full items-center gap-4 px-5 py-4 text-left cursor-pointer`,children:[(0,u.jsxs)(`div`,{className:`flex min-w-0 flex-1 items-center gap-3`,children:[n,(0,u.jsxs)(`div`,{className:`min-w-0`,children:[(0,u.jsx)(`div`,{className:`truncate font-mono text-sm font-semibold text-slate-900`,children:e}),t&&(0,u.jsx)(`div`,{className:`truncate text-xs text-slate-500`,children:t})]})]}),(0,u.jsx)(c,{size:18,className:`shrink-0 text-slate-400 transition-transform ${a?`rotate-180`:``}`})]}),a&&(0,u.jsx)(`div`,{className:`border-t border-slate-100 bg-slate-50/60 px-5 py-5`,children:i})]})}function f(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function p(e,t=`light`){let n=f(e),r=t===`dark`?{key:`text-sky-300`,string:`text-emerald-300`,number:`text-amber-300`,boolean:`text-purple-300`,null:`text-slate-400`,punct:`text-slate-300`,comment:`text-slate-500 italic`}:{key:`text-sky-700`,string:`text-emerald-700`,number:`text-amber-700`,boolean:`text-purple-700`,null:`text-slate-500`,punct:`text-slate-600`,comment:`text-slate-400 italic`},i=n.replace(/\/\/.*$/gm,e=>`<span class="${r.comment}">${e}</span>`).split(/(<span class="[^"]*">\/\/.*?<\/span>)/g),a=/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;return i.map(e=>e.startsWith(`<span class="`)?e:e.replace(a,e=>{let t=r.punct;return/^"/.test(e)?t=/:$/.test(e)?r.key:r.string:/true|false/.test(e)?t=r.boolean:/null/.test(e)?t=r.null:/-?\d/.test(e)&&(t=r.number),`<span class="${t}">${e}</span>`})).join(``)}function m({code:e,theme:t=`light`}){let n=(0,l.useMemo)(()=>p(e,t),[e,t]);return(0,u.jsx)(`pre`,{className:`overflow-x-auto rounded-xl border p-4 text-xs leading-relaxed ${t===`dark`?`bg-slate-950 border-white/5`:`bg-white border-slate-200`}`,children:(0,u.jsx)(`code`,{style:{fontFamily:`'JetBrains Mono', monospace`},dangerouslySetInnerHTML:{__html:n}})})}function h({code:e}){let t=f(e).replace(/(curl)|(https?:\/\/[^\s]+)|(--?\w[\w-]*)/g,(e,t,n,r)=>t?`<span class="text-emerald-300">${t}</span>`:n?`<span class="text-sky-300">${n}</span>`:r?`<span class="text-amber-300">${r}</span>`:e);return(0,u.jsx)(`pre`,{className:`overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs leading-relaxed`,children:(0,u.jsx)(`code`,{style:{fontFamily:`'JetBrains Mono', monospace`},className:`text-slate-200`,dangerouslySetInnerHTML:{__html:t}})})}var g=`https://www.emsifa.com/api-data-wilayah-v2/v2`,_=[{method:`GET`,path:`/stats.json`,description:`Intip ringkasannya dulu — total provinsi, kab/kota, kecamatan, kelurahan, kode pos, luas & populasi`,curl:`curl ${g}/stats.json`,response:`{
  "data": {
    "total_area": 1889518.2539999997,
    "total_districts": 7285,
    "total_paths": 551,
    "total_population": 284973643,
    "total_postal_codes": 10632,
    "total_provinces": 38,
    "total_regencies": 514,
    "total_villages": 83762
  },
  "meta": {
    "generated_at": "2026-09-02T03:35:49Z",
    "level": 0
  }
}`},{method:`GET`,path:`/provinces.json`,description:`Ambil semua provinsi — lengkap sama kapital, koordinat, populasi & luasnya (level 1)`,curl:`curl ${g}/provinces.json`,response:`{
  "data": [
    {
      "id": "11",
      "name": "Aceh",
      "capital": "Banda Aceh",
      "lat": 5.570546962920454,
      "lng": 95.34080851187178,
      "elv": 11,
      "tz": 7,
      "population": 5623479,
      "total_area": 56835.019
    },
    {
      "id": "12",
      "name": "Sumatera Utara",
      "capital": "Medan",
      "lat": 3.5806304901245087,
      "lng": 98.67199998443536,
      "elv": 32,
      "tz": 7,
      "population": 15640905,
      "total_area": 72437.755
    }
    // ... 36 more
  ],
  "meta": {
    "generated_at": "2026-09-02T03:35:49Z",
    "level": 1
  }
}`},{method:`GET`,path:`/provinces/{code}.json`,description:`Kepoin satu provinsi aja by kode — misal 32 = Jawa Barat (level 1)`,curl:`curl ${g}/provinces/32.json`,response:`{
  "data": {
    "id": "32",
    "name": "Jawa Barat",
    "capital": "Bandung",
    "lat": -6.902224715926122,
    "lng": 107.61875975420881,
    "elv": 739,
    "tz": 7,
    "population": 51316378,
    "total_area": 37053.331
  },
  "meta": {
    "generated_at": "2026-09-02T03:35:49Z",
    "level": 1
  }
}`},{method:`GET`,path:`/regencies/{province_code}.json`,description:`Daftar kab/kota di provinsi tertentu — misal semua kota di Jawa Barat (level 2)`,curl:`curl ${g}/regencies/32.json`,response:`{
  "data": [
    {
      "id": "32.01",
      "name": "Kabupaten Bogor",
      "capital": "Cibinong",
      "lat": -6.479478948089524,
      "lng": 106.82471731002641,
      "elv": 134,
      "tz": 7,
      "population": 5809790,
      "total_area": 2991.778
    },
    {
      "id": "32.02",
      "name": "Kabupaten Sukabumi",
      "capital": "Palabuhanratu",
      "lat": -6.989164614549726,
      "lng": 106.55022261003006,
      "elv": 16,
      "tz": 7,
      "population": 2868943,
      "total_area": 4163.824
    }
    // ... 25 more (total 27 regencies in Jawa Barat)
  ],
  "meta": {
    "generated_at": "2026-09-02T03:35:49Z",
    "level": 2
  }
}`},{method:`GET`,path:`/regencies/{regency_code}.json`,description:`Detail satu kab/kota by kode — bonus info provinsinya juga (level 2)`,curl:`curl ${g}/regencies/32.73.json`,response:`{
  "data": {
    "id": "32.73",
    "name": "Kota Bandung",
    "capital": "Bandung",
    "lat": -6.910655826355507,
    "lng": 107.60986952537303,
    "elv": 726,
    "tz": 7,
    "population": 2591763,
    "total_area": 166.593,
    "province": {
      "id": "32",
      "name": "Jawa Barat"
    }
  },
  "meta": {
    "generated_at": "2026-09-02T03:35:49Z",
    "level": 2
  }
}`},{method:`GET`,path:`/districts/{regency_code}.json`,description:`Daftar kecamatan di kab/kota tertentu — ringkas id + nama aja (level 3)`,curl:`curl ${g}/districts/32.73.json`,response:`{
  "data": [
    { "id": "32.73.01", "name": "Sukasari" },
    { "id": "32.73.02", "name": "Coblong" },
    { "id": "32.73.03", "name": "Babakan Ciparay" },
    { "id": "32.73.04", "name": "Bojongloa Kaler" },
    { "id": "32.73.05", "name": "Andir" }
    // ... 25 more
  ],
  "meta": {
    "generated_at": "2026-09-02T03:35:45Z",
    "level": 3
  }
}`},{method:`GET`,path:`/districts/{district_code}.json`,description:`Detail satu kecamatan — plus tau dia dari provinsi & kab/kota mana (level 3)`,curl:`curl ${g}/districts/32.73.01.json`,response:`{
  "data": {
    "id": "32.73.01",
    "name": "Sukasari",
    "province": {
      "id": "32",
      "name": "Jawa Barat"
    },
    "regency": {
      "id": "32.73",
      "name": "Kota Bandung"
    }
  },
  "meta": {
    "generated_at": "2026-09-02T03:35:45Z",
    "level": 3
  }
}`},{method:`GET`,path:`/villages/{district_code}.json`,description:`Daftar kelurahan/desa di kecamatan itu — udah include kode pos (level 4)`,curl:`curl ${g}/villages/32.73.01.json`,response:`{
  "data": [
    { "id": "32.73.01.1001", "name": "Sukarasa", "postal_code": "40152" },
    { "id": "32.73.01.1002", "name": "Gegerkalong", "postal_code": "40153" },
    { "id": "32.73.01.1003", "name": "Isola", "postal_code": "40154" },
    { "id": "32.73.01.1004", "name": "Sarijadi", "postal_code": "40151" }
  ],
  "meta": {
    "generated_at": "2026-09-02T03:35:45Z",
    "level": 4
  }
}`},{method:`GET`,path:`/villages/{village_code}.json`,description:`Detail satu kelurahan/desa — lengkap kode pos + provinsi, kab/kota, kecamatan (level 4)`,curl:`curl ${g}/villages/32.73.01.1001.json`,response:`{
  "data": {
    "id": "32.73.01.1001",
    "name": "Sukarasa",
    "postal_code": "40152",
    "province": {
      "id": "32",
      "name": "Jawa Barat"
    },
    "regency": {
      "id": "32.73",
      "name": "Kota Bandung"
    },
    "district": {
      "id": "32.73.01",
      "name": "Sukasari"
    }
  },
  "meta": {
    "generated_at": "2026-09-02T03:35:46Z",
    "level": 4
  }
}`},{method:`GET`,path:`/postal-codes/{postal_code}.json`,description:`Cari kelurahan by kode pos — misal 40152 tuh daerah mana aja (level 4)`,curl:`curl ${g}/postal-codes/40152.json`,response:`{
  "data": [
    {
      "id": "32.73.01.1001",
      "name": "Sukarasa",
      "postal_code": "40152",
      "province": {
        "id": "32",
        "name": "Jawa Barat"
      },
      "regency": {
        "id": "32.73",
        "name": "Kota Bandung"
      },
      "district": {
        "id": "32.73.01",
        "name": "Sukasari"
      }
    }
  ],
  "meta": {
    "generated_at": "2026-09-02T03:35:48Z",
    "level": 4
  }
}`},{method:`GET`,path:`/paths/{province_or_regency_code}.json`,description:`Butuh polygon buat peta? Ambil garis batas provinsi/kab-kota di sini (compact JSON)`,curl:`curl ${g}/paths/32.json`,response:`{
  "data": {
    "id": "32",
    "name": "Jawa Barat",
    "path": [
      [-6.980237, 106.395627],
      [-6.934294, 106.390694],
      [-6.921623, 106.399689]
      // ... ~240 more points (compact, no indent)
    ]
  },
  "meta": {
    "generated_at": "2026-09-02T03:35:49Z",
    "level": 1
  }
}`}];function v(){let[e,t]=(0,l.useState)(null),n=async(e,n)=>{await navigator.clipboard.writeText(e),t(n),setTimeout(()=>t(null),2e3)},r=`https://www.emsifa.com/api-data-wilayah-v2/v2`;return(0,u.jsx)(`section`,{id:`api`,className:`relative z-10 overflow-hidden rounded-t-[32px] border-t border-slate-200 bg-white shadow-[0_-12px_40px_rgba(0,0,0,0.12)]`,children:(0,u.jsxs)(`div`,{className:`mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-14`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-6 md:flex-row md:items-end md:justify-between`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-widest text-slate-600 uppercase`,children:[(0,u.jsx)(`span`,{className:`h-1.5 w-1.5 rounded-full bg-emerald-500`}),`API Statis`]}),(0,u.jsx)(`h2`,{className:`mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl`,children:`Tinggal fetch, beres`}),(0,u.jsxs)(`p`,{className:`mt-2 max-w-xl text-sm leading-relaxed text-slate-600`,children:[`Nggak perlu bikin backend. Datanya cuma file JSON di GitHub Pages — tinggal `,(0,u.jsx)(`code`,{className:`rounded bg-slate-100 px-1 py-0.5 font-mono text-xs`,children:`fetch`}),` aja. Tanpa API key, tanpa rate limit. Gas langsung pakai.`]})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(`code`,{className:`rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700 md:text-sm`,children:r}),(0,u.jsx)(`button`,{onClick:()=>n(r,`base`),className:`inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 cursor-pointer`,"aria-label":`Copy base URL`,children:e===`base`?(0,u.jsx)(i,{size:16,className:`text-emerald-600`}):(0,u.jsx)(a,{size:16})})]}),(0,u.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,u.jsxs)(`a`,{href:`/api-data-wilayah-v2/wilayah-postman.json`,download:!0,className:`inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50`,children:[(0,u.jsx)(o,{size:14}),` Postman`]}),(0,u.jsxs)(`a`,{href:`/api-data-wilayah-v2/openapi.yml`,download:!0,className:`inline-flex items-center gap-1.5 rounded-xl border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800`,children:[(0,u.jsx)(o,{size:14}),` openapi.yml`]})]})]})]}),(0,u.jsx)(`div`,{className:`mt-8 grid gap-3`,children:_.map(t=>(0,u.jsx)(d,{title:t.path,subtitle:t.description,badge:(0,u.jsx)(`span`,{className:`shrink-0 rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-bold tracking-widest text-white uppercase`,children:`GET`}),children:(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`mb-2 flex items-center justify-between`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold tracking-widest text-slate-500 uppercase`,children:`Request`}),(0,u.jsxs)(`button`,{onClick:()=>n(t.curl,t.path+`-curl`),className:`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer`,children:[e===t.path+`-curl`?(0,u.jsx)(i,{size:12,className:`text-emerald-600`}):(0,u.jsx)(a,{size:12}),`Copy curl`]})]}),(0,u.jsx)(h,{code:t.curl})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`mb-2 flex items-center justify-between`,children:[(0,u.jsxs)(`span`,{className:`text-xs font-semibold tracking-widest text-slate-500 uppercase`,children:[`Response — genResponse `,`{ data, meta }`]}),(0,u.jsxs)(`a`,{href:t.curl.replace(`curl `,``),target:`_blank`,rel:`noreferrer`,className:`inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900`,children:[`Try `,(0,u.jsx)(s,{size:12})]})]}),(0,u.jsx)(m,{code:t.response,theme:`light`})]})]})},t.path))}),(0,u.jsxs)(`p`,{className:`mt-6 text-center text-xs text-slate-400`,children:[`Ada `,_.length,` endpoint total • Semuanya balik`,` `,(0,u.jsx)(`code`,{className:`rounded bg-slate-100 px-1 py-0.5 font-mono`,children:`{ data, meta }`}),` `,`• Udah ke-cache CDN GitHub Pages, ngebut`]})]})})}export{v as ApiSection};