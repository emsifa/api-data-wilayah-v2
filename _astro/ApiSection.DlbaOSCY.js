import{r as e,t}from"./react.OrosJ8bI.js";import{n,t as r}from"./jsx-runtime.attkegX-.js";import{n as i,t as a}from"./copy.BsHH99kS.js";import{t as o}from"./download.DuwVocmM.js";import{t as s}from"./external-link.CfPYKs9L.js";var c=n(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),l=e(t(),1),u=r();function d({title:e,subtitle:t,badge:n,defaultOpen:r=!1,children:i}){let[a,o]=(0,l.useState)(r);return(0,u.jsxs)(`div`,{className:`overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-slate-300`,children:[(0,u.jsxs)(`button`,{onClick:()=>o(!a),"aria-expanded":a,className:`flex w-full items-center gap-4 px-5 py-4 text-left cursor-pointer`,children:[(0,u.jsxs)(`div`,{className:`flex min-w-0 flex-1 items-center gap-3`,children:[n,(0,u.jsxs)(`div`,{className:`min-w-0`,children:[(0,u.jsx)(`div`,{className:`truncate font-mono text-sm font-semibold text-slate-900`,children:e}),t&&(0,u.jsx)(`div`,{className:`truncate text-xs text-slate-500`,children:t})]})]}),(0,u.jsx)(c,{size:18,className:`shrink-0 text-slate-400 transition-transform ${a?`rotate-180`:``}`})]}),a&&(0,u.jsx)(`div`,{className:`border-t border-slate-100 bg-slate-50/60 px-5 py-5`,children:i})]})}function f(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function p(e,t=`light`){let n=f(e),r=t===`dark`?{key:`text-sky-300`,string:`text-emerald-300`,number:`text-amber-300`,boolean:`text-purple-300`,null:`text-slate-400`,punct:`text-slate-300`,comment:`text-slate-500 italic`}:{key:`text-sky-700`,string:`text-emerald-700`,number:`text-amber-700`,boolean:`text-purple-700`,null:`text-slate-500`,punct:`text-slate-600`,comment:`text-slate-400 italic`},i=n.replace(/\/\/.*$/gm,e=>`<span class="${r.comment}">${e}</span>`).split(/(<span class="[^"]*">\/\/.*?<\/span>)/g),a=/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;return i.map(e=>e.startsWith(`<span class="`)?e:e.replace(a,e=>{let t=r.punct;return/^"/.test(e)?t=/:$/.test(e)?r.key:r.string:/true|false/.test(e)?t=r.boolean:/null/.test(e)?t=r.null:/-?\d/.test(e)&&(t=r.number),`<span class="${t}">${e}</span>`})).join(``)}function m({code:e,theme:t=`light`}){let n=(0,l.useMemo)(()=>p(e,t),[e,t]);return(0,u.jsx)(`pre`,{className:`overflow-x-auto rounded-xl border p-4 text-xs leading-relaxed ${t===`dark`?`bg-slate-950 border-white/5`:`bg-white border-slate-200`}`,children:(0,u.jsx)(`code`,{style:{fontFamily:`'JetBrains Mono', monospace`},dangerouslySetInnerHTML:{__html:n}})})}var h=`https://www.emsifa.com/api-data-wilayah-v2/v2`,g=[{method:`GET`,path:`/stats.json`,description:`Intip ringkasannya dulu — total provinsi, kab/kota, kecamatan, kelurahan, kode pos, luas & populasi`,curl:`curl ${h}/stats.json`,snippets:{curl:`curl ${h}/stats.json`,fetch:`const res = await fetch("${h}/stats.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/stats.json"
);`,laravel:`$response = Http::get("${h}/stats.json");
$data = $response->json("data");`,go:`resp, err := http.Get("${h}/stats.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/stats.json")
data = r.json()["data"]`,php:`$ch = curl_init("${h}/stats.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$data = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/stats.json"));
final data = jsonDecode(res.body)["data"];`},response:`{
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
}`},{method:`GET`,path:`/provinces.json`,description:`Ambil semua provinsi — lengkap sama kapital, koordinat, populasi & luasnya (level 1)`,curl:`curl ${h}/provinces.json`,snippets:{curl:`curl ${h}/provinces.json`,fetch:`const res = await fetch("${h}/provinces.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/provinces.json"
);`,laravel:`$response = Http::get("${h}/provinces.json");
$provinces = $response->json("data");`,go:`resp, err := http.Get("${h}/provinces.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/provinces.json")
provinces = r.json()["data"]`,php:`$ch = curl_init("${h}/provinces.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$provinces = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/provinces.json"));
final provinces = jsonDecode(res.body)["data"] as List;`},response:`{
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
}`},{method:`GET`,path:`/provinces/{code}.json`,description:`Kepoin satu provinsi aja by kode — misal 32 = Jawa Barat (level 1)`,curl:`curl ${h}/provinces/32.json`,snippets:{curl:`curl ${h}/provinces/32.json`,fetch:`const res = await fetch("${h}/provinces/32.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/provinces/32.json"
);`,laravel:`$response = Http::get("${h}/provinces/32.json");
$province = $response->json("data");`,go:`resp, err := http.Get("${h}/provinces/32.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/provinces/32.json")
province = r.json()["data"]`,php:`$ch = curl_init("${h}/provinces/32.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$province = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/provinces/32.json"));
final province = jsonDecode(res.body)["data"] as Map;`},response:`{
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
}`},{method:`GET`,path:`/regencies/{province_id}.json`,description:`Daftar kab/kota di provinsi tertentu — misal semua kota di Jawa Barat (level 2)`,curl:`curl ${h}/regencies/32.json`,snippets:{curl:`curl ${h}/regencies/32.json`,fetch:`const res = await fetch("${h}/regencies/32.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/regencies/32.json"
);`,laravel:`$response = Http::get("${h}/regencies/32.json");
$regencies = $response->json("data");`,go:`resp, err := http.Get("${h}/regencies/32.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/regencies/32.json")
regencies = r.json()["data"]`,php:`$ch = curl_init("${h}/regencies/32.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$regencies = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/regencies/32.json"));
final regencies = jsonDecode(res.body)["data"] as List;`},response:`{
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
}`},{method:`GET`,path:`/regencies/{regency_id}.json`,description:`Detail satu kab/kota by kode — bonus info provinsinya juga (level 2)`,curl:`curl ${h}/regencies/32.73.json`,snippets:{curl:`curl ${h}/regencies/32.73.json`,fetch:`const res = await fetch("${h}/regencies/32.73.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/regencies/32.73.json"
);`,laravel:`$response = Http::get("${h}/regencies/32.73.json");
$regency = $response->json("data");`,go:`resp, err := http.Get("${h}/regencies/32.73.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/regencies/32.73.json")
regency = r.json()["data"]`,php:`$ch = curl_init("${h}/regencies/32.73.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$regency = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/regencies/32.73.json"));
final regency = jsonDecode(res.body)["data"] as Map;`},response:`{
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
}`},{method:`GET`,path:`/districts/{regency_id}.json`,description:`Daftar kecamatan di kab/kota tertentu — lengkap dengan koordinat lat/lng (level 3)`,curl:`curl ${h}/districts/32.73.json`,snippets:{curl:`curl ${h}/districts/32.73.json`,fetch:`const res = await fetch("${h}/districts/32.73.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/districts/32.73.json"
);`,laravel:`$response = Http::get("${h}/districts/32.73.json");
$districts = $response->json("data");`,go:`resp, err := http.Get("${h}/districts/32.73.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/districts/32.73.json")
districts = r.json()["data"]`,php:`$ch = curl_init("${h}/districts/32.73.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$districts = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/districts/32.73.json"));
final districts = jsonDecode(res.body)["data"] as List;`},response:`{
  "data": [
    { "id": "32.73.01", "name": "Sukasari", "lat": -6.873456, "lng": 107.591234 },
    { "id": "32.73.02", "name": "Coblong", "lat": -6.882345, "lng": 107.603456 },
    { "id": "32.73.03", "name": "Babakan Ciparay", "lat": -6.891234, "lng": 107.585678 },
    { "id": "32.73.04", "name": "Bojongloa Kaler", "lat": -6.901234, "lng": 107.578901 },
    { "id": "32.73.05", "name": "Andir", "lat": -6.912345, "lng": 107.592345 }
    // ... 25 more
  ],
  "meta": {
    "updated_at": "2026-09-03",
    "level": 3
  }
}`},{method:`GET`,path:`/districts/{district_id}.json`,description:`Detail satu kecamatan — plus tau dia dari provinsi & kab/kota mana, lengkap dengan koordinat (level 3)`,curl:`curl ${h}/districts/32.73.01.json`,snippets:{curl:`curl ${h}/districts/32.73.01.json`,fetch:`const res = await fetch("${h}/districts/32.73.01.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/districts/32.73.01.json"
);`,laravel:`$response = Http::get("${h}/districts/32.73.01.json");
$district = $response->json("data");`,go:`resp, err := http.Get("${h}/districts/32.73.01.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/districts/32.73.01.json")
district = r.json()["data"]`,php:`$ch = curl_init("${h}/districts/32.73.01.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$district = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/districts/32.73.01.json"));
final district = jsonDecode(res.body)["data"] as Map;`},response:`{
  "data": {
    "id": "32.73.01",
    "name": "Sukasari",
    "lat": -6.873456,
    "lng": 107.591234,
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
    "updated_at": "2026-09-03",
    "level": 3
  }
}`},{method:`GET`,path:`/villages/{district_id}.json`,description:`Daftar kelurahan/desa di kecamatan itu — udah include kode pos dan koordinat (level 4)`,curl:`curl ${h}/villages/32.73.01.json`,snippets:{curl:`curl ${h}/villages/32.73.01.json`,fetch:`const res = await fetch("${h}/villages/32.73.01.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/villages/32.73.01.json"
);`,laravel:`$response = Http::get("${h}/villages/32.73.01.json");
$villages = $response->json("data");`,go:`resp, err := http.Get("${h}/villages/32.73.01.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/villages/32.73.01.json")
villages = r.json()["data"]`,php:`$ch = curl_init("${h}/villages/32.73.01.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$villages = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/villages/32.73.01.json"));
final villages = jsonDecode(res.body)["data"] as List;`},response:`{
  "data": [
    { "id": "32.73.01.1001", "name": "Sukarasa", "postal_code": "40152", "lat": -6.873456, "lng": 107.591234 },
    { "id": "32.73.01.1002", "name": "Gegerkalong", "postal_code": "40153", "lat": -6.882345, "lng": 107.603456 },
    { "id": "32.73.01.1003", "name": "Isola", "postal_code": "40154", "lat": -6.891234, "lng": 107.585678 },
    { "id": "32.73.01.1004", "name": "Sarijadi", "postal_code": "40151", "lat": -6.901234, "lng": 107.578901 }
  ],
  "meta": {
    "updated_at": "2026-09-03",
    "level": 4
  }
}`},{method:`GET`,path:`/villages/{village_id}.json`,description:`Detail satu kelurahan/desa — lengkap kode pos, koordinat + provinsi, kab/kota, kecamatan (level 4)`,curl:`curl ${h}/villages/32.73.01.1001.json`,snippets:{curl:`curl ${h}/villages/32.73.01.1001.json`,fetch:`const res = await fetch("${h}/villages/32.73.01.1001.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/villages/32.73.01.1001.json"
);`,laravel:`$response = Http::get("${h}/villages/32.73.01.1001.json");
$village = $response->json("data");`,go:`resp, err := http.Get("${h}/villages/32.73.01.1001.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/villages/32.73.01.1001.json")
village = r.json()["data"]`,php:`$ch = curl_init("${h}/villages/32.73.01.1001.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$village = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/villages/32.73.01.1001.json"));
final village = jsonDecode(res.body)["data"] as Map;`},response:`{
  "data": {
    "id": "32.73.01.1001",
    "name": "Sukarasa",
    "postal_code": "40152",
    "lat": -6.873456,
    "lng": 107.591234,
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
    "updated_at": "2026-09-03",
    "level": 4
  }
}`},{method:`GET`,path:`/postal-codes/{postal_code}.json`,description:`Cari kelurahan by kode pos — misal 40152 tuh daerah mana aja (level 4)`,curl:`curl ${h}/postal-codes/40152.json`,snippets:{curl:`curl ${h}/postal-codes/40152.json`,fetch:`const res = await fetch("${h}/postal-codes/40152.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/postal-codes/40152.json"
);`,laravel:`$response = Http::get("${h}/postal-codes/40152.json");
$villages = $response->json("data");`,go:`resp, err := http.Get("${h}/postal-codes/40152.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/postal-codes/40152.json")
villages = r.json()["data"]`,php:`$ch = curl_init("${h}/postal-codes/40152.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$villages = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/postal-codes/40152.json"));
final villages = jsonDecode(res.body)["data"] as List;`},response:`{
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
}`},{method:`GET`,path:`/paths/{region_id}.json`,description:`Butuh polygon buat peta? Ambil garis batas wilayah di sini — support semua level: provinsi, kab/kota, kecamatan, kelurahan (compact JSON)`,curl:`curl ${h}/paths/32.json`,snippets:{curl:`curl ${h}/paths/32.json`,fetch:`const res = await fetch("${h}/paths/32.json");
const { data, meta } = await res.json();`,axios:`const { data: { data, meta } } = await axios.get(
  "${h}/paths/32.json"
);`,laravel:`$response = Http::get("${h}/paths/32.json");
$path = $response->json("data");`,go:`resp, err := http.Get("${h}/paths/32.json")
if err != nil { /* handle */ }
defer resp.Body.Close()
var result map[string]any
json.NewDecoder(resp.Body).Decode(&result)`,python:`import requests

r = requests.get("${h}/paths/32.json")
path = r.json()["data"]`,php:`$ch = curl_init("${h}/paths/32.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);
$path = $body["data"];`,dart:`final res = await http.get(Uri.parse("${h}/paths/32.json"));
final path = jsonDecode(res.body)["data"] as Map;`},response:`{
  "data": {
    "id": "32",
    "path": [
      [-6.980237, 106.395627],
      [-6.934294, 106.390694],
      [-6.921623, 106.399689]
      // ... ~240 more points (compact, no indent)
    ]
  },
  "meta": {
    "updated_at": "2026-09-03",
    "level": 1
  }
}`}],_=[{key:`curl`,label:`curl`},{key:`fetch`,label:`Fetch`},{key:`axios`,label:`Axios`},{key:`laravel`,label:`Laravel`},{key:`go`,label:`Go`},{key:`python`,label:`Python`},{key:`php`,label:`PHP`},{key:`dart`,label:`Dart`}];function v(){let[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(`curl`),c=async(e,n)=>{await navigator.clipboard.writeText(e),t(n),setTimeout(()=>t(null),2e3)},f=`https://www.emsifa.com/api-data-wilayah-v2/v2`;return(0,u.jsx)(`section`,{id:`api`,className:`relative z-10 overflow-hidden rounded-t-[32px] border-t border-slate-200 bg-white shadow-[0_-12px_40px_rgba(0,0,0,0.12)]`,children:(0,u.jsxs)(`div`,{className:`mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-14`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-6 md:flex-row md:items-end md:justify-between`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-widest text-slate-600 uppercase`,children:[(0,u.jsx)(`span`,{className:`h-1.5 w-1.5 rounded-full bg-emerald-500`}),`API Statis`]}),(0,u.jsx)(`h2`,{className:`mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl`,children:`Tinggal fetch, beres`}),(0,u.jsxs)(`p`,{className:`mt-2 max-w-xl text-sm leading-relaxed text-slate-600`,children:[`Nggak perlu bikin backend. Datanya cuma file JSON di GitHub Pages — tinggal `,(0,u.jsx)(`code`,{className:`rounded bg-slate-100 px-1 py-0.5 font-mono text-xs`,children:`fetch`}),` aja. Tanpa API key, tanpa rate limit. Gas langsung pakai.`]})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(`code`,{className:`rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700 md:text-sm`,children:f}),(0,u.jsx)(`button`,{onClick:()=>c(f,`base`),className:`inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 cursor-pointer`,"aria-label":`Copy base URL`,children:e===`base`?(0,u.jsx)(i,{size:16,className:`text-emerald-600`}):(0,u.jsx)(a,{size:16})})]}),(0,u.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,u.jsxs)(`a`,{href:`/api-data-wilayah-v2/wilayah-postman.json`,download:!0,className:`inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50`,children:[(0,u.jsx)(o,{size:14}),` Postman`]}),(0,u.jsxs)(`a`,{href:`/api-data-wilayah-v2/openapi.yml`,download:!0,className:`inline-flex items-center gap-1.5 rounded-xl border border-slate-900 bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800`,children:[(0,u.jsx)(o,{size:14}),` openapi.yml`]})]})]})]}),(0,u.jsx)(`div`,{className:`mt-8 grid gap-3`,children:g.map(t=>(0,u.jsx)(d,{title:t.path,subtitle:t.description,badge:(0,u.jsx)(`span`,{className:`shrink-0 rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-bold tracking-widest text-white uppercase`,children:`GET`}),children:(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center gap-2`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold tracking-widest text-slate-500 uppercase`,children:`Request`}),(0,u.jsx)(`div`,{className:`hidden md:flex items-center gap-0.5 rounded-xl bg-slate-100 p-1`,children:_.map(e=>(0,u.jsx)(`button`,{onClick:()=>r(e.key),className:`rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${n===e.key?`bg-white text-slate-900 shadow-sm`:`text-slate-500 hover:text-slate-700`}`,children:e.label},e.key))}),(0,u.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),className:`md:hidden rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 cursor-pointer`,children:_.map(e=>(0,u.jsx)(`option`,{value:e.key,children:e.label},e.key))}),(0,u.jsxs)(`button`,{onClick:()=>c(t.snippets[n],t.path+`-code`),className:`ml-auto inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer`,children:[e===t.path+`-code`?(0,u.jsx)(i,{size:12,className:`text-emerald-600`}):(0,u.jsx)(a,{size:12}),`Copy `,_.find(e=>e.key===n)?.label]})]}),(0,u.jsx)(`pre`,{className:`overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs leading-relaxed`,children:(0,u.jsx)(`code`,{style:{fontFamily:`'JetBrains Mono', monospace`},className:`text-slate-200 whitespace-pre`,children:t.snippets[n]})})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`mb-2 flex items-center justify-between`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold tracking-widest text-slate-500 uppercase`,children:`Response`}),(0,u.jsxs)(`a`,{href:t.curl.replace(`curl `,``),target:`_blank`,rel:`noreferrer`,className:`inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900`,children:[`Try `,(0,u.jsx)(s,{size:12})]})]}),(0,u.jsx)(m,{code:t.response,theme:`light`})]})]})},t.path))}),(0,u.jsxs)(`p`,{className:`mt-6 text-center text-xs text-slate-400`,children:[`Ada `,g.length,` endpoint total • Semuanya balik`,` `,(0,u.jsx)(`code`,{className:`rounded bg-slate-100 px-1 py-0.5 font-mono`,children:`{ data, meta }`}),` `,`• Udah ke-cache CDN GitHub Pages, ngebut`]})]})})}export{v as ApiSection};