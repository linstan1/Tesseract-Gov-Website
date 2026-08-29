import React from 'react';
import { Link } from 'react-router-dom';
import { CHART, HBars } from '../../components/ChartKit';
import { ArrowLeft } from 'lucide-react';

const REPO = "https://github.com/fabio-rovai/cargo-semantics";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://gov.tesseract.academy/research/one-record-domain-axioms-taiwan#article",
  "mainEntityOfPage": "https://gov.tesseract.academy/research/one-record-domain-axioms-taiwan",
  "headline": "An overview of ontology quality issues in air and ocean freight data standards, tested against IATA ONE Record and DCSA | Tesseract Academy",
  "description": "An independent, dual-engine audit of the IATA ONE Record data model ontology across six releases, written for Taiwan's air and ocean freight sector. Every one of the 496 properties in the 2022-12 release declares an rdfs:domain. None of the 522 properties in 2023-12 do, and none of the 534 in 2024-12 do. Classes with no rdfs:label rose from 1 to 58 and lint issues from 2 to 650. Includes a contrast with the DCSA ocean container OpenAPI specifications, 174 files under Apache 2.0. Verified two independent ways with rdflib and the Open Ontologies engine. In English and Traditional Chinese.",
  "author": {
    "@id": "https://gov.tesseract.academy/#organization"
  },
  "publisher": {
    "@id": "https://gov.tesseract.academy/#organization"
  },
  "datePublished": "2026-08-17",
  "dateModified": "2026-08-17",
  "inLanguage": [
    "en",
    "zh-Hant"
  ],
  "about": {
    "@type": "Dataset",
    "name": "OneRecordTaiwan",
    "url": "https://github.com/fabio-rovai/cargo-semantics"
  }
};

export const OneRecordTaiwan: React.FC = () => (
  <div className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to research
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-gov-blue mb-6">{"An overview of ontology quality issues in air and ocean freight data standards, tested against IATA ONE Record and DCSA"}</h1>
      <p className="text-sm text-gov-dark/70 mb-2">Published 17 August 2026. Available in English and Traditional Chinese.</p>
      <p className="text-sm mb-8"><a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Repository on GitHub<span className="sr-only"> (opens in new tab)</span></a></p>
      <nav className="mb-10 text-sm"><a href="#english" className="text-gov-blue hover:underline">English</a><span className="mx-2 text-gov-dark/40">|</span><a href="#native" className="text-gov-blue hover:underline">{"空運與海運貨載資料標準的本體品質問題概觀：以 IATA "}</a></nav>

      <section id="english" lang="en">
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Taiwan sits at the centre of two global freight networks. China Airlines and EVA Air are among the world's largest air cargo operators, and Evergreen, Yang Ming and Wan Hai make Taiwan a top-tier container shipping nation. Both networks are converging on open data standards. We audited them, and the air cargo side has a problem worth knowing about before you build on it."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The finding"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"IATA ONE Record publishes its data model as an OWL ontology under an MIT licence. We validated every released version with two independent engines, our own open-source Open Ontologies engine and rdflib. They agree exactly."}</p>
            <div className="overflow-x-auto my-6"><table className="w-full text-sm border border-gov-blue/20 rounded"><thead className="bg-gov-blue/5"><tr><th className="text-left py-2 px-3 font-semibold">{"Release"}</th><th className="text-left py-2 px-3 font-semibold">{"Properties"}</th><th className="text-left py-2 px-3 font-semibold">{"Missing rdfs:domain"}</th><th className="text-left py-2 px-3 font-semibold">{"Classes missing a label"}</th><th className="text-left py-2 px-3 font-semibold">{"Total lint issues"}</th></tr></thead><tbody><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2022-12"}</td><td className="py-2 px-3">{"496"}</td><td className="py-2 px-3">{"0"}</td><td className="py-2 px-3">{"1"}</td><td className="py-2 px-3">{"2"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2023-12"}</td><td className="py-2 px-3">{"522"}</td><td className="py-2 px-3">{"522 (100 per cent)"}</td><td className="py-2 px-3">{"57"}</td><td className="py-2 px-3">{"636"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2024-12"}</td><td className="py-2 px-3">{"534"}</td><td className="py-2 px-3">{"534 (100 per cent)"}</td><td className="py-2 px-3">{"58"}</td><td className="py-2 px-3">{"650"}</td></tr></tbody></table></div>
            <HBars
              title="Total lint issues by release, dual-engine audit"
              note="rdflib and the Open Ontologies engine agree exactly. The step change is the disappearance of every rdfs:domain axiom between 2022-12 and 2023-12."
              rows={[
                { label: '2021-06', value: 20, display: '20' },
                { label: '2022-05', value: 23, display: '23' },
                { label: '2022-12', value: 2, display: '2' },
                { label: '2023-12', value: 636, display: '636', color: CHART.amber },
                { label: '2024-12', value: 650, display: '650', color: CHART.amber },
              ]}
            />
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Every property in the December 2022 ontology declared an rdfs:domain. In December 2023, none of the 522 properties did. In December 2024 the model grew to 534 properties and still none do. This happened in one release and has persisted through two."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What it costs an implementer"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"An rdfs:domain axiom lets a reasoner infer a subject's type from the property attached to it. Remove it and inference silently returns less. Queries that worked against the 2022-12 ontology return fewer results against 2024-12, and no release note explains the change."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Teams generating SHACL shapes or JSON Schema from the ontology will produce weaker constraints, so records that ought to fail validation will pass. Ontology-driven editors and mapping tools use domain declarations to decide which properties belong to which class, so with none declared every property appears to apply to everything. The 57 classes carrying no rdfs:label make this worse, because human-facing tooling falls back to raw IRIs."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The ocean side, for contrast"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"DCSA publishes its ocean container standards as OpenAPI specifications under Apache 2.0, currently 174 specification files spanning booking, electronic bills of lading, track and trace, and operational vessel schedules, with beta and final versions retained side by side. That versioning discipline is genuinely good practice. The lesson from the air cargo side is what happens when a semantic layer changes underneath implementers without a migration note, and the same risk applies to any organisation consuming multiple beta revisions of an evolving API specification."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The claim, precisely"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The claim is precise and verifiable: the axioms were present in 2022-12, they are absent in 2023-12 and 2024-12, no migration note accompanies the change, and any implementer who upgraded across that boundary inherited the difference without being told. There are legitimate modelling reasons to omit rdfs:domain, most commonly to avoid unintended inference in an open world, and whether this change was intended is for IATA to say. We raised it through the repository's own public channel before publishing, because a reproducible defect report is worth more than commentary."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Reproduce it yourself"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Clone IATA-Cargo/ONE-Record. Take the data model ontology from the 2022-12 and 2024-12 folders. Count the properties typed owl:ObjectProperty or owl:DatatypeProperty, then count how many appear as the subject of an rdfs:domain triple. The difference is the finding. The repository is MIT licensed, so the check costs nothing but a minute."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"This is our general method. Identity and conformance are dated claims made by a named source rather than properties of a thing, so we record who asserted what and when, and we compute every published number two independent ways before we publish it."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Working with us"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We offer bounded first engagements. For a carrier or forwarder, that is a fixed-scope conformance audit of your ONE Record or DCSA implementation against the published specifications, delivered as a reproducible script you keep, together with a written assessment of what breaks when you move between releases."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd, trading as The Tesseract Academy. fabio@thetesseractacademy.com"}</p>
      </section>

      <hr className="my-14 border-gov-blue/20" />

      <section id="native" lang="zh-Hant">
        <h2 className="text-2xl font-bold text-gov-blue mb-6">{"空運與海運貨載資料標準的本體品質問題概觀：以 IATA ONE Record 與 DCSA 檢驗"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"臺灣位居兩大全球貨運網絡的核心。中華航空與長榮航空名列全球最大的空運貨載業者，長榮海運、陽明海運與萬海航運則使臺灣成為頂尖的貨櫃航運國家。這兩個網絡都正在向開放資料標準收斂。我們對其進行了稽核，而空運這一側存在一個值得在建置之前先行了解的問題。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"稽核發現"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"IATA ONE Record 以 MIT 授權公開其資料模型的 OWL 本體。我們以兩個獨立引擎驗證了每一個已發布版本，分別是我們自行開發的開源引擎 Open Ontologies 與 rdflib。兩者結果完全一致。"}</p>
            <div className="overflow-x-auto my-6"><table className="w-full text-sm border border-gov-blue/20 rounded"><thead className="bg-gov-blue/5"><tr><th className="text-left py-2 px-3 font-semibold">{"版本"}</th><th className="text-left py-2 px-3 font-semibold">{"屬性數"}</th><th className="text-left py-2 px-3 font-semibold">{"缺少 rdfs:domain"}</th><th className="text-left py-2 px-3 font-semibold">{"無標籤的類別"}</th><th className="text-left py-2 px-3 font-semibold">{"檢查問題總數"}</th></tr></thead><tbody><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2022-12"}</td><td className="py-2 px-3">{"496"}</td><td className="py-2 px-3">{"0"}</td><td className="py-2 px-3">{"1"}</td><td className="py-2 px-3">{"2"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2023-12"}</td><td className="py-2 px-3">{"522"}</td><td className="py-2 px-3">{"522（100 %）"}</td><td className="py-2 px-3">{"57"}</td><td className="py-2 px-3">{"636"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2024-12"}</td><td className="py-2 px-3">{"534"}</td><td className="py-2 px-3">{"534（100 %）"}</td><td className="py-2 px-3">{"58"}</td><td className="py-2 px-3">{"650"}</td></tr></tbody></table></div>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"2022 年 12 月版本中，每一個屬性都宣告了 rdfs:domain。2023 年 12 月版本的 522 個屬性中，沒有任何一個宣告。2024 年 12 月版本將模型擴充至 534 個屬性，情況依舊。這件事發生於單一版本之中，並且已延續兩個版本。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"這對實作者的代價"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"rdfs:domain 公理讓推理引擎能夠從所使用的屬性推斷主體的型別。移除之後，推理會靜默地產生更少結果。原本在 2022-12 本體上可運作的查詢，在 2024-12 上會回傳較少結果，而版本說明並未解釋此項變更。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"從本體產生 SHACL 形狀或 JSON Schema 的團隊，將產生較弱的約束條件，因此原本應當驗證失敗的紀錄會通過驗證。以本體驅動的編輯器與對應工具，依賴領域宣告判斷哪些屬性屬於哪些類別；當沒有任何宣告時，每個屬性看起來都適用於所有事物。另有 57 個類別未帶 rdfs:label，使情況更為嚴重，因為面向使用者的工具會退而顯示原始 IRI。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"海運側的對照"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"DCSA 以 Apache 2.0 授權發布其海運貨櫃標準的 OpenAPI 規格，目前共 174 個規格檔案，涵蓋訂艙、電子提單、追蹤查詢與船舶營運排程，並且將 beta 版與正式版並列保留。這樣的版本治理紀律確實是良好實務。空運側的教訓在於，當語意層在實作者腳下改變而未附帶遷移說明時會發生什麼事，而這個風險同樣適用於任何消費演進中 API 規格多個 beta 修訂版的組織。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"我們不主張的部分"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"我們沒有證據顯示這是意外，也不主張它是意外。省略 rdfs:domain 是一種正當的建模選擇，通常是為了在開放世界假設下避免非預期的推論。我們的主張範圍狹窄且可查核：這些公理存在於 2022-12，在 2023-12 與 2024-12 中不存在，此項變更未附帶任何遷移指引，而跨越該分界升級的任何人都在未被告知的情況下承接了這項差異。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"我們已在發表之前，透過該儲存庫本身的公開管道向 IATA 提出此事。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"自行重現"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"複製 IATA-Cargo/ONE-Record。取出 2022-12 與 2024-12 資料夾中的資料模型本體。計算型別為 owl:ObjectProperty 或 owl:DatatypeProperty 的屬性數量，再計算其中有多少個出現在 rdfs:domain 三元組的主體位置。兩者的差額即為本項發現。該儲存庫採用 MIT 授權，因此這項檢查除了一分鐘之外不需要任何成本。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"這是我們的一般方法。身分與符合性是由具名來源在特定日期提出的主張，而非事物本身的屬性，因此我們記錄誰在何時主張了什麼，並且在發表之前以兩種獨立方式計算每一個公開數字。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"與我們合作"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"我們提供範圍明確的初期合作。對航空公司或承攬業者而言，那是一項針對貴公司 ONE Record 或 DCSA 實作、對照已發布規格的固定範圍符合性稽核，交付內容包含貴公司可持續保有的可重現腳本，以及一份關於跨版本移轉時會出現哪些問題的書面評估。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd（營業名稱 The Tesseract Academy）。fabio@thetesseractacademy.com"}</p>
      </section>
    </div>
  </div>
);
