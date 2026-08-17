import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = "https://github.com/fabio-rovai/cargo-semantics";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://gov.tesseract.academy/research/one-record-domain-axioms-korea#article",
  "mainEntityOfPage": "https://gov.tesseract.academy/research/one-record-domain-axioms-korea",
  "headline": "An overview of ontology quality issues in air cargo data standards, tested against IATA ONE Record | Tesseract Academy",
  "description": "An independent, dual-engine audit of the IATA ONE Record data model ontology across six releases. Every one of the 496 properties in the 2022-12 release declares an rdfs:domain. None of the 522 properties in 2023-12 do, and none of the 534 in 2024-12 do. Classes with no rdfs:label rose from 1 to 58 over the same span, and total lint issues rose from 2 to 650. Verified two independent ways, with rdflib and with the open-source Open Ontologies engine, which agree exactly. Written for Korean air cargo operators building on ONE Record, in English and Korean, with a reproducible check over the MIT-licensed public repository.",
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
    "ko"
  ],
  "about": {
    "@type": "Dataset",
    "name": "OneRecordKorea",
    "url": "https://github.com/fabio-rovai/cargo-semantics"
  }
};

export const OneRecordKorea: React.FC = () => (
  <div className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to research
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-gov-blue mb-6">{"An overview of ontology quality issues in air cargo data standards, tested against IATA ONE Record"}</h1>
      <p className="text-sm text-gov-dark/70 mb-2">Published 17 August 2026. Available in English and Korean.</p>
      <p className="text-sm mb-8"><a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Repository on GitHub<span className="sr-only"> (opens in new tab)</span></a></p>
      <nav className="mb-10 text-sm"><a href="#english" className="text-gov-blue hover:underline">English</a><span className="mx-2 text-gov-dark/40">|</span><a href="#native" className="text-gov-blue hover:underline">{"항공화물 데이터 표준의 온톨로지 품질 문제 개관: "}</a></nav>

      <section id="english" lang="en">
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"IATA ONE Record is the data standard the air cargo industry has agreed to converge on. Its data model is published as an OWL ontology under an MIT licence, which means anyone can check it. We did, across six releases, and found that one release removed a foundational modelling construct from every single property in the ontology."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What we measured"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We validated every published version of the ONE Record data model ontology with two independent engines, our own open-source Open Ontologies engine and rdflib. They agree exactly."}</p>
            <div className="overflow-x-auto my-6"><table className="w-full text-sm border border-gov-blue/20 rounded"><thead className="bg-gov-blue/5"><tr><th className="text-left py-2 px-3 font-semibold">{"Release"}</th><th className="text-left py-2 px-3 font-semibold">{"Properties"}</th><th className="text-left py-2 px-3 font-semibold">{"Missing rdfs:domain"}</th><th className="text-left py-2 px-3 font-semibold">{"Classes missing a label"}</th><th className="text-left py-2 px-3 font-semibold">{"Total lint issues"}</th></tr></thead><tbody><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2021-06"}</td><td className="py-2 px-3">{""}</td><td className="py-2 px-3">{""}</td><td className="py-2 px-3">{"9"}</td><td className="py-2 px-3">{"20"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2022-05"}</td><td className="py-2 px-3">{""}</td><td className="py-2 px-3">{""}</td><td className="py-2 px-3">{"10"}</td><td className="py-2 px-3">{"23"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2022-12"}</td><td className="py-2 px-3">{"496"}</td><td className="py-2 px-3">{"0"}</td><td className="py-2 px-3">{"1"}</td><td className="py-2 px-3">{"2"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2023-12"}</td><td className="py-2 px-3">{"522"}</td><td className="py-2 px-3">{"522 (100 per cent)"}</td><td className="py-2 px-3">{"57"}</td><td className="py-2 px-3">{"636"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2024-12"}</td><td className="py-2 px-3">{"534"}</td><td className="py-2 px-3">{"534 (100 per cent)"}</td><td className="py-2 px-3">{"58"}</td><td className="py-2 px-3">{"650"}</td></tr></tbody></table></div>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The December 2022 release was in good shape. Every one of its 496 object and datatype properties declared an rdfs:domain. The December 2023 release introduced 522 properties and not one of them declares a domain. The December 2024 release grew the model to 534 properties and the situation is unchanged."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"This is not gradual erosion. It is a categorical change that happened in a single release and has now persisted through two."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Why a Korean cargo carrier should care"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Korean Air Cargo is one of the largest air freight operators in the world, and Korea's logistics sector has committed heavily to digital freight documentation. If your team is building against ONE Record, the missing domain axioms have three concrete consequences."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Reasoning breaks quietly. An rdfs:domain axiom is what lets a reasoner infer the type of a subject from the property used. Without it, a triple that says something has a gross weight no longer tells the reasoner what kind of thing it is. Inference that worked against the 2022-12 ontology returns fewer results against 2023-12, and nothing in the release notes tells you why."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Validation loses its grip. Teams that generate SHACL shapes or JSON Schema from the ontology will generate weaker constraints, because the constraint generator has less to work with. Data that should fail validation will pass."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Tooling degrades silently. Ontology-driven editors, form generators and mapping tools use domain declarations to decide which properties apply to which class. With no domains, every property appears applicable to everything."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The 57 classes with no rdfs:label compound this, because human-facing tools fall back to displaying raw IRIs."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What we are not claiming"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We have not found evidence that this was accidental, and we are not asserting it was. There are legitimate modelling reasons to omit rdfs:domain, most commonly to avoid unintended inference in an open world. What we are asserting is narrower and verifiable: the axioms were present in 2022-12, they are absent in 2023-12 and 2024-12, no migration note accompanies the change, and any implementer who upgraded across that boundary inherited the difference without being told."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We have raised this with IATA through the repository's own public channel before publishing, because a reproducible defect report is worth more than commentary."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"How we checked, so you can repeat it"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Clone IATA-Cargo/ONE-Record. Take the data model ontology from the 2022-12 and 2024-12 standard folders. Count properties typed owl:ObjectProperty or owl:DatatypeProperty, then count how many of those are the subject of an rdfs:domain triple. The gap is the finding. The whole check runs in under a minute and needs no licence, because the repository is MIT."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"This is the method we apply to registers and standards generally. Identity and conformance are claims made by a named source on a date, not properties of a thing, so we record who asserted what and when, and we verify every number two ways before we publish it."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Working with us"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We do bounded first engagements. For a cargo carrier or freight forwarder, that is a fixed-scope conformance audit of your ONE Record implementation against the published ontology, delivered as a reproducible script you keep, plus a written assessment of what breaks when you move between releases."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd, trading as The Tesseract Academy. fabio@thetesseractacademy.com"}</p>
      </section>

      <hr className="my-14 border-gov-blue/20" />

      <section id="native" lang="ko">
        <h2 className="text-2xl font-bold text-gov-blue mb-6">{"항공화물 데이터 표준의 온톨로지 품질 문제 개관: IATA ONE Record 검증"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"IATA ONE Record는 항공화물 산업이 수렴하기로 합의한 데이터 표준입니다. 데이터 모델은 MIT 라이선스로 공개된 OWL 온톨로지이므로 누구나 검증할 수 있습니다. 저희는 여섯 개 릴리스를 대상으로 검증했고, 한 릴리스에서 온톨로지의 모든 속성으로부터 기초적인 모델링 구조가 제거되었음을 확인했습니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"측정 결과"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"저희는 공개된 모든 ONE Record 데이터 모델 온톨로지 버전을 두 개의 독립적인 엔진으로 검증했습니다. 자체 오픈소스 엔진인 Open Ontologies와 rdflib입니다. 두 엔진의 결과는 정확히 일치합니다."}</p>
            <div className="overflow-x-auto my-6"><table className="w-full text-sm border border-gov-blue/20 rounded"><thead className="bg-gov-blue/5"><tr><th className="text-left py-2 px-3 font-semibold">{"릴리스"}</th><th className="text-left py-2 px-3 font-semibold">{"속성 수"}</th><th className="text-left py-2 px-3 font-semibold">{"rdfs:domain 누락"}</th><th className="text-left py-2 px-3 font-semibold">{"레이블 없는 클래스"}</th><th className="text-left py-2 px-3 font-semibold">{"린트 이슈 총계"}</th></tr></thead><tbody><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2022-12"}</td><td className="py-2 px-3">{"496"}</td><td className="py-2 px-3">{"0"}</td><td className="py-2 px-3">{"1"}</td><td className="py-2 px-3">{"2"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2023-12"}</td><td className="py-2 px-3">{"522"}</td><td className="py-2 px-3">{"522 (100 퍼센트)"}</td><td className="py-2 px-3">{"57"}</td><td className="py-2 px-3">{"636"}</td></tr><tr className="border-t border-gov-blue/15"><td className="py-2 px-3">{"2024-12"}</td><td className="py-2 px-3">{"534"}</td><td className="py-2 px-3">{"534 (100 퍼센트)"}</td><td className="py-2 px-3">{"58"}</td><td className="py-2 px-3">{"650"}</td></tr></tbody></table></div>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"2022년 12월 릴리스는 상태가 양호했습니다. 496개 객체 및 데이터 속성 모두가 rdfs:domain을 선언하고 있었습니다. 2023년 12월 릴리스는 522개의 속성을 도입했으나 그 중 도메인을 선언한 것은 하나도 없습니다. 2024년 12월 릴리스는 모델을 534개 속성으로 확장했지만 상황은 그대로입니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"이는 점진적인 품질 저하가 아닙니다. 단일 릴리스에서 발생하여 두 개 릴리스에 걸쳐 지속되고 있는 범주적 변화입니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"한국 항공화물 사업자가 주목해야 하는 이유"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"대한항공 화물은 세계 최대 항공화물 사업자 중 하나이며, 한국 물류 부문은 디지털 화물 문서화에 상당한 투자를 해왔습니다. 귀사의 팀이 ONE Record 기반으로 구축 중이라면, 누락된 도메인 공리는 세 가지 구체적인 결과를 낳습니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"추론이 조용히 실패합니다. rdfs:domain 공리는 사용된 속성으로부터 주어의 타입을 추론하게 해주는 장치입니다. 이것이 없으면 총중량을 가진다는 트리플은 더 이상 추론기에게 그 대상이 어떤 종류인지 알려주지 못합니다. 2022-12 온톨로지에서 작동하던 추론이 2023-12에서는 더 적은 결과를 반환하며, 릴리스 노트는 그 이유를 설명하지 않습니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"검증이 느슨해집니다. 온톨로지로부터 SHACL 형상이나 JSON Schema를 생성하는 팀은 더 약한 제약 조건을 생성하게 됩니다. 제약 생성기가 활용할 정보가 줄어들기 때문입니다. 검증에서 걸러져야 할 데이터가 통과합니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"도구가 조용히 성능을 잃습니다. 온톨로지 기반 편집기, 폼 생성기, 매핑 도구는 도메인 선언을 사용해 어떤 속성이 어떤 클래스에 적용되는지 판단합니다. 도메인이 없으면 모든 속성이 모든 것에 적용 가능해 보입니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"레이블이 없는 57개 클래스가 이 문제를 가중시킵니다. 사람이 사용하는 도구가 원시 IRI를 그대로 표시하게 되기 때문입니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"저희가 주장하지 않는 것"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"이것이 실수였다는 증거는 찾지 못했으며, 실수라고 주장하지도 않습니다. rdfs:domain을 생략하는 정당한 모델링 이유는 존재하며, 가장 흔한 이유는 개방 세계 가정에서 의도치 않은 추론을 피하기 위함입니다. 저희가 주장하는 바는 더 좁고 검증 가능합니다. 해당 공리는 2022-12에 존재했고 2023-12와 2024-12에는 부재하며, 이 변경에 대한 마이그레이션 안내가 동반되지 않았고, 그 경계를 넘어 업그레이드한 구현자는 통보 없이 이 차이를 물려받았습니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"저희는 발표에 앞서 저장소의 공개 채널을 통해 IATA에 이 사안을 제기했습니다. 재현 가능한 결함 보고가 논평보다 가치 있기 때문입니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"재현 방법"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"IATA-Cargo/ONE-Record를 복제하십시오. 2022-12와 2024-12 표준 폴더에서 데이터 모델 온톨로지를 가져오십시오. owl:ObjectProperty 또는 owl:DatatypeProperty로 타입이 지정된 속성을 세고, 그 중 rdfs:domain 트리플의 주어인 것이 몇 개인지 세십시오. 그 차이가 바로 이 발견입니다. 저장소가 MIT 라이선스이므로 전체 검사는 1분 이내에 완료되며 별도의 라이선스가 필요하지 않습니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"이것이 저희가 등록부와 표준 전반에 적용하는 방법론입니다. 정체성과 적합성은 사물의 속성이 아니라 특정 출처가 특정 시점에 제기한 주장이므로, 저희는 누가 무엇을 언제 주장했는지 기록하고 모든 수치를 두 가지 방법으로 검증한 뒤에 발표합니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"협업 문의"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"저희는 범위가 명확한 초기 계약을 제공합니다. 항공화물 사업자나 포워더의 경우, 공개된 온톨로지 대비 귀사의 ONE Record 구현에 대한 고정 범위 적합성 감사이며, 귀사가 계속 보유하는 재현 가능한 스크립트와 릴리스 간 이동 시 무엇이 깨지는지에 대한 서면 평가를 함께 제공합니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd (상호 The Tesseract Academy). fabio@thetesseractacademy.com"}</p>
      </section>
    </div>
  </div>
);
