import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const REPO = "https://github.com/fabio-rovai/machinery-semantics";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://gov.tesseract.academy/research/machinery-regulation-readiness-korea#article",
  "mainEntityOfPage": "https://gov.tesseract.academy/research/machinery-regulation-readiness-korea",
  "headline": "An overview of ontology and schema quality issues in machinery data standards, tested against MTConnect and the Asset Administration Shell | Tesseract Academy",
  "description": "A readiness assessment for Korean machine tool and equipment exporters against EU Machinery Regulation 2023/1230, which applies from 14 January 2027, verified against the EUR-Lex primary text at Article 54 because several vendor summaries give the wrong date. Audits the two semantic carriers the sector relies on. MTConnect publishes each version as both XSD and JSON Schema, and the JSON AlarmStateEnum admits INSTANT while the XSD AlarmStateType does not, identically in 2.0, 2.1 and 2.2. Includes a retracted finding: an initial count of 111 divergences collapsed to one after 105 proved to be a deliberate design difference and three were our own matching artefact. Also tests and refutes the common claim that AAS submodel compliance requires a paid ECLASS subscription. In English and Korean.",
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
    "name": "MachineryKorea",
    "url": "https://github.com/fabio-rovai/machinery-semantics"
  }
};

export const MachineryKorea: React.FC = () => (
  <div className="bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gov-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to research
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-gov-blue mb-6">{"An overview of ontology and schema quality issues in machinery data standards, tested against MTConnect and the Asset Administration Shell"}</h1>
      <p className="text-sm text-gov-dark/70 mb-2">Published 17 August 2026. Available in English and Korean.</p>
      <p className="text-sm mb-8"><a href={REPO} target="_blank" rel="noopener noreferrer" className="text-gov-blue hover:underline">Repository on GitHub<span className="sr-only"> (opens in new tab)</span></a></p>
      <nav className="mb-10 text-sm"><a href="#english" className="text-gov-blue hover:underline">English</a><span className="mx-2 text-gov-dark/40">|</span><a href="#native" className="text-gov-blue hover:underline">{"기계류 데이터 표준의 온톨로지 및 스키마 품질 문제"}</a></nav>

      <section id="english" lang="en">
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The EU Machinery Regulation (EU) 2023/1230 applies from 14 January 2027. On that date Directive 2006/42/EC is repealed. We verified both dates against the EUR-Lex primary text, Article 54, because a number of vendor summaries circulating online give 20 January and are simply wrong. Parts of the Regulation already bite: Articles 26 to 42 have applied since 14 January 2024."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"For Korean machine tool and equipment exporters, from Doosan and Hyundai WIA down to component suppliers, this converts documentation into a data problem. Instructions, declarations and technical documentation move toward machine-readable form, and the semantic carriers the industry has settled on are the Asset Administration Shell and, for shop floor data, MTConnect."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We audited both. Here is what we found, including a number of ours that did not survive scrutiny."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"MTConnect publishes the same standard twice, and the two copies disagree"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"MTConnect publishes each version as both an XSD and a JSON Schema. That makes them checkable against each other, which is unusual and to the standard's credit. We compared versions 2.0, 2.1 and 2.2."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The JSON Schema defines AlarmStateEnum with the values INSTANT, ACTIVE and CLEARED. The XSD defines AlarmStateType with only ACTIVE and CLEARED. The string INSTANT appears nowhere in either XSD document. The discrepancy is present identically in all three released versions."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The practical consequence is narrow but real. A JSON-side implementation may legitimately emit INSTANT, and an XSD-validating consumer will reject the message. If your integration crosses that boundary, you have a conformance question that neither document answers."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The number we had to throw away"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Our first pass reported 111 divergences between the two representations. That number was wrong and we are publishing it because the correction is more instructive than the finding."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Of the 111, 105 were the UNAVAILABLE sentinel appearing in the XSD enumerations but not the JSON ones. The JSON Schema handles unavailability structurally, through an isUnavailable flag and a separate value constraint, so this is a deliberate design difference rather than a defect. A further three were an artefact of our own name matching, which collapsed two genuinely distinct XSD types, CoordinateSystemEnumType and CoordinateSystemTypeEnumType, onto a single key across a file boundary."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"That leaves one real defect, appearing in three releases. We would rather publish one verified finding than a hundred impressive ones."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"The Asset Administration Shell is genuinely open, and a common assumption about it is false"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"The IDTA publishes 54 submodel templates under CC BY 4.0, including the ones a machine builder exporting to the EU will actually need: Digital Nameplate, Functional Safety, Handover Documentation, Intelligent Information for Use, Carbon Footprint and Digital Product Passport."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We expected to find that these open templates depend on paywalled semantic dictionaries, which would have meant every implementer needs a commercial ECLASS or IEC CDD subscription to resolve the meaning of the fields. That expectation was wrong. Across the published templates we counted 1,529 references to IDTA's own IRIs against only 18 ECLASS and 9 IEC CDD references. The templates are overwhelmingly self-referential. Anyone telling you that compliance requires buying a dictionary subscription should be asked to show their counts."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"What this means for a Korean exporter"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Three things follow. Your compliance evidence is becoming machine-readable, so it inherits the defects of the schemas you build on. The schemas are open, which means you can audit them yourself rather than trusting a vendor's assurance. And where two published representations of the same standard disagree, the disagreement is yours to resolve at integration time unless somebody raises it upstream first."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We have raised the MTConnect discrepancy with the standard's maintainers."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"How we checked"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Every number above was computed two independent ways and we treat a disagreement between methods as a defect in our own work. For the ontology material we used our open-source Open Ontologies engine alongside rdflib. The MTConnect comparison is a short script over the published XSD and JSON Schema files, both of which are freely available. One caution for anyone repeating it: the MTConnect XSDs use single-quoted XML attributes, and a regular expression written for double quotes returns zero matches and looks like a clean result."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"Working with us"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"We offer bounded first engagements. For a machine builder, that is a fixed-scope readiness assessment against the 14 January 2027 deadline, covering which submodel templates your product documentation actually needs, where your current data falls short, and a reproducible conformance script you keep."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd, trading as The Tesseract Academy. fabio@thetesseractacademy.com"}</p>
      </section>

      <hr className="my-14 border-gov-blue/20" />

      <section id="native" lang="ko">
        <h2 className="text-2xl font-bold text-gov-blue mb-6">{"기계류 데이터 표준의 온톨로지 및 스키마 품질 문제 개관: MTConnect와 자산 관리 셸 검증"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"EU 기계류 규정 (EU) 2023/1230은 2027년 1월 14일부터 적용됩니다. 같은 날 지침 2006/42/EC는 폐지됩니다. 저희는 두 날짜 모두를 EUR-Lex 원문 제54조에서 직접 확인했습니다. 온라인에 유통되는 여러 벤더 요약본이 1월 20일이라고 기재하고 있으나 이는 사실이 아니기 때문입니다. 규정의 일부는 이미 발효 중입니다. 제26조부터 제42조까지는 2024년 1월 14일부터 적용되고 있습니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"두산과 현대위아를 비롯한 부품 공급사에 이르기까지, 한국의 공작기계 및 장비 수출 기업에게 이 규정은 문서화를 데이터 문제로 전환시킵니다. 사용설명서, 적합성 선언, 기술 문서가 기계 판독 가능한 형태로 이동하며, 업계가 정착시킨 의미 전달 수단은 자산 관리 셸과 현장 데이터의 경우 MTConnect입니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"저희는 두 가지 모두를 감사했습니다. 검증을 통과하지 못한 저희 자신의 수치를 포함하여 결과를 공개합니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"MTConnect는 동일한 표준을 두 번 발행하며, 두 사본은 서로 다릅니다"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"MTConnect는 각 버전을 XSD와 JSON Schema 양쪽으로 발행합니다. 덕분에 상호 대조가 가능하며, 이는 드문 일이고 해당 표준의 미덕입니다. 저희는 2.0, 2.1, 2.2 버전을 비교했습니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"JSON Schema는 AlarmStateEnum을 INSTANT, ACTIVE, CLEARED 값으로 정의합니다. XSD는 AlarmStateType을 ACTIVE와 CLEARED로만 정의합니다. INSTANT라는 문자열은 어느 XSD 문서에도 존재하지 않습니다. 이 불일치는 세 개 릴리스 모두에 동일하게 존재합니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"실무적 결과는 좁지만 실재합니다. JSON 측 구현은 정당하게 INSTANT를 발신할 수 있고, XSD로 검증하는 수신 측은 해당 메시지를 거부합니다. 귀사의 연동이 그 경계를 넘는다면, 어느 문서도 답해주지 않는 적합성 문제가 발생합니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"저희가 폐기해야 했던 수치"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"최초 분석에서는 두 표현 사이에 111건의 불일치가 있다고 산출되었습니다. 그 수치는 틀렸으며, 발견 자체보다 그 정정이 더 유익하기에 이를 공개합니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"111건 중 105건은 XSD 열거형에는 나타나지만 JSON 열거형에는 없는 UNAVAILABLE 센티넬이었습니다. JSON Schema는 isUnavailable 플래그와 별도의 값 제약을 통해 가용 불가 상태를 구조적으로 처리하므로, 이는 결함이 아니라 의도된 설계 차이입니다. 추가로 3건은 저희 자신의 이름 매칭이 만들어낸 산물이었습니다. 실제로는 서로 다른 두 XSD 타입인 CoordinateSystemEnumType과 CoordinateSystemTypeEnumType을 파일 경계를 넘어 하나의 키로 병합해버린 것입니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"남은 것은 세 개 릴리스에 걸쳐 나타나는 실제 결함 하나입니다. 저희는 인상적인 백 건보다 검증된 한 건을 발표하는 편을 택합니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"자산 관리 셸은 실제로 개방되어 있으며, 이에 관한 통념 하나는 사실이 아닙니다"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"IDTA는 CC BY 4.0으로 54개의 서브모델 템플릿을 발행합니다. 여기에는 EU로 수출하는 기계 제조사가 실제로 필요로 하는 항목들이 포함됩니다. 디지털 명판, 기능 안전, 인수인계 문서, 사용을 위한 지능형 정보, 탄소 발자국, 디지털 제품 여권입니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"저희는 이 개방 템플릿들이 유료 의미 사전에 의존할 것으로 예상했습니다. 그렇다면 모든 구현자가 필드의 의미를 해석하기 위해 상용 ECLASS 또는 IEC CDD 구독이 필요했을 것입니다. 그 예상은 틀렸습니다. 발행된 템플릿 전반에서 IDTA 자체 IRI 참조가 1,529건인 데 비해 ECLASS 참조는 18건, IEC CDD 참조는 9건에 불과했습니다. 템플릿은 압도적으로 자기 참조적입니다. 규정 준수를 위해 사전 구독이 필요하다고 말하는 이가 있다면 그 근거 수치를 요구하시기 바랍니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"한국 수출 기업에게 주는 의미"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"세 가지가 따라옵니다. 귀사의 규정 준수 증거가 기계 판독 가능한 형태로 바뀌고 있으므로, 그 기반이 되는 스키마의 결함을 그대로 물려받습니다. 해당 스키마는 개방되어 있으므로, 벤더의 보증을 신뢰하는 대신 직접 감사할 수 있습니다. 그리고 동일 표준의 두 발행본이 서로 다를 경우, 누군가 먼저 상류에 문제를 제기하지 않는 한 그 불일치는 연동 시점에 귀사가 해결해야 할 몫입니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"저희는 MTConnect의 해당 불일치를 표준 관리 주체에 제기했습니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"검증 방법"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"위의 모든 수치는 두 가지 독립적인 방법으로 산출했으며, 방법 간 불일치는 저희 작업의 결함으로 간주합니다. 온톨로지 자료에는 자체 오픈소스 엔진인 Open Ontologies와 rdflib을 함께 사용했습니다. MTConnect 비교는 공개된 XSD와 JSON Schema 파일에 대한 짧은 스크립트이며 두 파일 모두 무료로 이용 가능합니다. 이를 재현하려는 분께 한 가지 주의를 드립니다. MTConnect XSD는 작은따옴표로 XML 속성을 표기하므로, 큰따옴표를 전제로 작성한 정규식은 결과가 0건으로 나오며 깨끗한 결과처럼 보입니다."}</p>
            <h2 className="text-2xl font-semibold text-gov-blue mt-10 mb-4">{"협업 문의"}</h2>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"저희는 범위가 명확한 초기 계약을 제공합니다. 기계 제조사의 경우, 2027년 1월 14일 기한에 대한 고정 범위 준비도 평가이며, 귀사의 제품 문서에 실제로 필요한 서브모델 템플릿, 현재 데이터의 미흡한 지점, 그리고 귀사가 계속 보유하는 재현 가능한 적합성 스크립트를 포함합니다."}</p>
            <p className="text-base text-gov-dark/90 leading-relaxed mb-4">{"Kampakis and Co Ltd (상호 The Tesseract Academy). fabio@thetesseractacademy.com"}</p>
      </section>
    </div>
  </div>
);
