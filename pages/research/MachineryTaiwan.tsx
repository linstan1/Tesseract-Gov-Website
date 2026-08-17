import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = "https://github.com/fabio-rovai/machinery-semantics";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://gov.tesseract.academy/research/machinery-regulation-readiness-taiwan#article",
  "mainEntityOfPage": "https://gov.tesseract.academy/research/machinery-regulation-readiness-taiwan",
  "headline": "An overview of ontology and schema quality issues in machine tool data standards, tested against MTConnect and the Asset Administration Shell | Tesseract Academy",
  "description": "A readiness assessment for Taiwan's machine tool cluster against EU Machinery Regulation 2023/1230, which applies from 14 January 2027, verified against the EUR-Lex primary text at Article 54. Audits MTConnect and the Asset Administration Shell. The MTConnect JSON Schema AlarmStateEnum admits INSTANT while the XSD AlarmStateType does not, identically across 2.0, 2.1 and 2.2. Includes a retracted finding, an initial 111 divergences reduced to one verified defect. Counts 1,529 IDTA IRI references against 18 ECLASS and 9 IEC CDD, refuting the claim that compliance requires a paid dictionary subscription. In English and Traditional Chinese.",
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
    "name": "MachineryTaiwan",
    "url": "https://github.com/fabio-rovai/machinery-semantics"
  }
};

export const MachineryTaiwan: React.FC = () => (
  <div className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to research
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-gov-blue mb-6">{"An overview of ontology and schema quality issues in machine tool data standards, tested against MTConnect and the Asset Administration Shell"}</h1>
      <p className="text-sm text-gov-dark/70 mb-2">Published 17 August 2026. Available in English and Traditional Chinese.</p>
      <p className="text-sm mb-8"><a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Repository on GitHub<span className="sr-only"> (opens in new tab)</span></a></p>
      <nav className="mb-10 text-sm"><a href="#english" className="text-gov-blue hover:underline">English</a><span className="mx-2 text-gov-dark/40">|</span><a href="#native" className="text-gov-blue hover:underline">{"工具機資料標準的本體與綱要品質問題概觀：以 MTConn"}</a></nav>

      <section id="english" lang="en">
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The EU Machinery Regulation (EU) 2023/1230 applies from 14 January 2027, the same day Directive 2006/42/EC is repealed. We verified both against the EUR-Lex primary text at Article 54, because several vendor summaries in circulation give 20 January and are wrong. Articles 26 to 42 have already applied since 14 January 2024."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Taiwan is one of the world's largest machine tool exporters, and the Taichung cluster, from Hiwin and Delta through Tongtai and Victor Taichung, sells heavily into Europe. For those firms this Regulation turns technical documentation into a data engineering problem. The semantic carriers the industry has converged on are the Asset Administration Shell for product documentation and MTConnect for shop floor data."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We audited both, and we are publishing a number of our own that failed verification alongside the one that survived."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"MTConnect publishes each version twice, and the copies disagree"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"MTConnect releases every version as both an XSD and a JSON Schema, which makes the two mutually checkable. We compared 2.0, 2.1 and 2.2."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The JSON Schema defines AlarmStateEnum with INSTANT, ACTIVE and CLEARED. The XSD defines AlarmStateType with only ACTIVE and CLEARED. The string INSTANT does not appear anywhere in either XSD. The discrepancy is identical across all three released versions."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The consequence is narrow and real. A JSON-side implementation may legitimately emit INSTANT and an XSD-validating consumer will reject it. If your integration crosses that boundary, neither document tells you which side is correct."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The finding we retracted"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Our first pass reported 111 divergences between the two representations. That number was wrong, and the correction matters more than the original claim."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Of the 111, 105 were the UNAVAILABLE sentinel present in the XSD enumerations but absent from the JSON ones. The JSON Schema handles unavailability structurally through an isUnavailable flag and a separate value constraint, so this is a deliberate design difference and not a defect. Another three were an artefact of our own name normalisation, which collapsed two genuinely distinct XSD types, CoordinateSystemEnumType and CoordinateSystemTypeEnumType, onto one key across a file boundary."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"One real defect remains, present in three releases. We would rather publish one verified finding than a hundred impressive ones."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The Asset Administration Shell is open, and a widespread assumption about it is false"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The IDTA publishes 54 submodel templates under CC BY 4.0, including those a Taiwanese exporter will need: Digital Nameplate, Functional Safety, Handover Documentation, Intelligent Information for Use, Carbon Footprint and Digital Product Passport."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We expected these open templates to depend on paywalled semantic dictionaries, which would have meant compliance quietly requires a commercial ECLASS or IEC CDD subscription. That expectation was wrong. Across the published templates we counted 1,529 references to IDTA's own IRIs against 18 ECLASS and 9 IEC CDD references. The templates are overwhelmingly self-referential. If a vendor tells you compliance requires buying a dictionary, ask them for their counts."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What this means in Taichung"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Your compliance evidence is becoming machine-readable, so it inherits the defects of the schemas beneath it. Those schemas are open, so you can audit them yourself instead of trusting an assurance. And where two published representations of one standard disagree, resolving that disagreement falls to you at integration time unless someone raises it upstream first."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We have raised the MTConnect discrepancy with the standard's maintainers."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"How we checked"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Every number here was computed two independent ways, and disagreement between methods is treated as a defect in our own work rather than a finding. For ontology material we used our open-source Open Ontologies engine alongside rdflib. The MTConnect comparison is a short script over the published files, which are freely available. One warning for anyone repeating it: the MTConnect XSDs use single-quoted XML attributes, so a regular expression written for double quotes silently returns zero matches and looks like a clean bill of health."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Working with us"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We offer bounded first engagements. For a machine builder, that is a fixed-scope readiness assessment against the 14 January 2027 deadline, covering which submodel templates your documentation actually requires, where your current data falls short, and a reproducible conformance script that stays with you."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd, trading as The Tesseract Academy. fabio@thetesseractacademy.com"}</p>
      </section>

      <hr className="my-14 border-gov-blue/20" />

      <section id="native" lang="zh-Hant">
        <h2 className="text-2xl font-bold text-gov-blue mb-6">{"工具機資料標準的本體與綱要品質問題概觀：以 MTConnect 與資產管理殼檢驗"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"歐盟機械法規 (EU) 2023/1230 自 2027 年 1 月 14 日起適用，同日指令 2006/42/EC 廢止。我們已對照 EUR-Lex 原文第 54 條查核這兩個日期，因為市面流通的多份供應商摘要寫成 1 月 20 日，那是錯誤的。第 26 條至第 42 條則自 2024 年 1 月 14 日起即已適用。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"臺灣是全球最大的工具機出口國之一，臺中聚落從上銀、台達電到東台與亞崴，對歐洲銷售比重甚高。對這些企業而言，這項法規把技術文件轉變成一個資料工程問題。業界所收斂的語意載體，在產品文件方面是資產管理殼，在生產現場資料方面則是 MTConnect。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"我們對兩者進行了稽核，並且將我們自己未通過驗證的數字，與通過驗證的發現一併公開。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"MTConnect 每個版本發行兩次，而兩份副本並不一致"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"MTConnect 將每個版本同時以 XSD 與 JSON Schema 發行，使兩者可以互相對照。我們比對了 2.0、2.1 與 2.2。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"JSON Schema 將 AlarmStateEnum 定義為 INSTANT、ACTIVE 與 CLEARED。XSD 則將 AlarmStateType 僅定義為 ACTIVE 與 CLEARED。字串 INSTANT 未曾出現在任何一份 XSD 之中。此項不一致在三個已發行版本中完全相同。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"後果範圍有限但真實存在。JSON 側的實作可以正當地送出 INSTANT，而以 XSD 進行驗證的接收端會拒絕該訊息。若貴公司的整合跨越了這個邊界，兩份文件都不會告訴您哪一側才是正確的。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"我們撤回的那項發現"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"初次分析得出兩種表示之間有 111 項分歧。該數字是錯的，而這項更正比原本的主張更值得說明。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"111 項之中，有 105 項是出現在 XSD 列舉但未出現在 JSON 列舉中的 UNAVAILABLE 哨兵值。JSON Schema 透過 isUnavailable 旗標與獨立的值約束，以結構方式處理不可用狀態，因此這是刻意的設計差異而非缺陷。另有 3 項是我們自身名稱正規化所產生的假象，把兩個確實不同的 XSD 型別 CoordinateSystemEnumType 與 CoordinateSystemTypeEnumType 跨檔案邊界合併成同一個鍵。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"最後剩下一項真實缺陷，存在於三個版本之中。我們寧可發表一項經過驗證的發現，也不願發表一百項看起來可觀的發現。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"資產管理殼確實開放，而關於它的一個普遍假設並不成立"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"IDTA 以 CC BY 4.0 發行 54 份子模型範本，其中包含臺灣出口商實際需要的項目：數位銘牌、功能安全、移交文件、供使用的智慧資訊、碳足跡與數位產品護照。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"我們原本預期這些開放範本會依賴付費的語意字典，果真如此的話，合規就等於悄悄要求購買 ECLASS 或 IEC CDD 的商業訂閱。這項預期是錯的。在已發行的範本中，我們計得 IDTA 自身 IRI 的參照共 1,529 次，而 ECLASS 為 18 次、IEC CDD 為 9 次。這些範本壓倒性地屬於自我參照。若有供應商告訴您合規必須購買字典訂閱，請要求對方提出其計數依據。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"這對臺中的意義"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"貴公司的合規證據正在轉為機器可讀，因此會承接其底層綱要的缺陷。這些綱要是開放的，因此您可以自行稽核，而不必仰賴一紙保證。而當同一標準的兩份發行本彼此不一致時，除非有人先向上游提出，否則解決該不一致的責任會落在貴公司的整合階段。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"我們已就 MTConnect 的此項不一致向該標準的維護方提出。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"我們的查核方式"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"上述每一個數字都以兩種獨立方法計算，方法之間的不一致會被視為我們自身工作的缺陷，而非一項發現。本體相關資料使用我們的開源引擎 Open Ontologies 搭配 rdflib。MTConnect 的比對是針對公開檔案的一段簡短腳本，而這些檔案均可免費取得。給打算重現此項檢查者一項提醒：MTConnect 的 XSD 使用單引號標示 XML 屬性，因此以雙引號撰寫的正規表示式會靜默地回傳零筆結果，看起來就像一份乾淨的檢驗報告。"}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"與我們合作"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"我們提供範圍明確的初期合作。對機械製造商而言，那是一項針對 2027 年 1 月 14 日期限的固定範圍準備度評估，涵蓋貴公司文件實際需要哪些子模型範本、目前資料的不足之處，以及一份由貴公司持續保有的可重現符合性腳本。"}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd（營業名稱 The Tesseract Academy）。fabio@thetesseractacademy.com"}</p>
      </section>
    </div>
  </div>
);
