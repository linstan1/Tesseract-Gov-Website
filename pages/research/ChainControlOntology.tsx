import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Mermaid } from '../../components/Mermaid';

const REPO = 'https://github.com/fabio-rovai/chain-control-ontology';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://gov.tesseract.academy/research/chain-control-ontology#article',
  mainEntityOfPage: 'https://gov.tesseract.academy/research/chain-control-ontology',
  headline:
    'USDC Has a Different Upgrade Key on Every Chain, and Its Own owner() Names None of Them | Tesseract Academy',
  description:
    'An open OWL 2, SKOS and SHACL ontology for on-chain control, measured across 6,316 contracts on seven EVM chains plus Solana. Of 656 upgradeable contracts with a resolvable upgrade authority, 390 report a different account through owner() than the one that can replace their code, and for 556 the address in the proxy admin slot is not the real controller because the control path continues past it. Walking every path to its terminal node, 132 resolve to a single private key and 335 to a multisig, eight of which have a threshold of one. Native USDC has six different bare-key upgrade authorities across six EVM chains while the same issuer runs two separate 2-of-4 on-chain multisigs on Solana. The artefact models control as dated evidence-bearing assertions and marks the point where chain state stops answering.',
  author: { '@id': 'https://gov.tesseract.academy/#organization' },
  publisher: { '@id': 'https://gov.tesseract.academy/#organization' },
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  about: { '@type': 'Dataset', name: 'Chain Control Ontology (CHAINCTL)', url: REPO },
  keywords:
    'blockchain ontology, on-chain control, beneficial ownership crypto, proxy admin, EIP-1967, upgradeable contracts, delegation hazard, Safe multisig threshold, timelock, control graph, cross-chain, CAIP-10, SPL token multisig, USDC upgrade authority, Paxos Gold, SHACL, OWL 2, EthOn, L2BEAT, MiCA, crypto asset governance, key custody, digital asset assurance',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gov.tesseract.academy/research/chain-control-ontology#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can blockchain data tell you who ultimately controls an asset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and any product that says otherwise is selling an unpublished inference. Chain state resolves control up to an address, and an address is not a person. Every control path ends at a public key whose custody arrangement sits off chain and is not observable at any block. What is computable, exactly and reproducibly, is the path up to that point: which account can replace a contract’s code, what that account is, and whether a quorum is enforced. The honest artefact names the stopping point rather than guessing past it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is reading owner() on a smart contract unreliable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because on a transparent proxy a call from anyone other than the admin is delegated to the implementation, so owner() returns the implementation’s owner rather than the account that can replace the code. In this census, 390 of the 656 upgradeable contracts with a resolvable upgrade authority, 59.5 per cent, report through owner() an account different from the one holding the upgrade power. The account that can replace the code can grant itself every other capability, so it is the controller regardless of what any view function says.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is reading the EIP-1967 proxy admin slot enough to find the controller?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. For 556 of 656 upgradeable contracts, 84.8 per cent, the address in the admin slot is not the terminal controller, because that address is itself a contract owned by something else. Only 100 contracts resolve in a single hop, 536 need two, 18 need three and 2 need four. Separately, 37 contracts in the census are upgradeable through storage slots outside EIP-1967, including the legacy zeppelinos layout still used by very large deployments, so tooling that checks only the EIP-1967 slot reports them as immutable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many on-chain assets are controlled by a single private key?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In this population, 132 of 656 upgradeable contracts, 20.1 per cent, resolve to a terminal controller that is an externally owned account with no code. A further eight are controlled by a multisig whose threshold is one, meaning any single signer can act alone, which brings effective single-signature control to 140 of 656, or 21.3 per cent. Seventeen of the 132 terminal keys have never sent a transaction, so they cannot be characterised even by their own history. This is not a claim that those keys are poorly held. Many will sit behind institutional MPC or hardware custody. The finding is that no observer can tell the difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does USDC have the same controller on every chain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Native USDC on Ethereum, Base, Arbitrum, Optimism, Polygon and Avalanche has six different upgrade authorities, with no signer reuse, and every one of them is an externally owned account with no code. On all six chains the contract’s own owner() function returns a different account than the one that can replace the code. On Solana the same issuer runs two separate SPL token multisigs with disjoint signers, a 2-of-4 for mint authority and a different 2-of-4 for freeze authority, both readable by anyone. The control structure is publicly verifiable on Solana and not on EVM, and separation of duties exists on Solana and cannot exist on EVM, because whoever replaces the code can do everything.',
      },
    },
  ],
};

const MODEL = `graph LR
  A["Token contract<br/>(what users hold)"] -->|"proxy admin slot<br/>evidence: storage read"| B["Admin contract"]
  A -.->|"owner() view<br/>evidence: DELEGATED<br/>names the wrong account"| X["Implementation's owner"]
  B -->|"owner()<br/>evidence: direct view read"| C["Terminal controller"]
  C --> D["Multisig<br/>quorum on chain<br/>335 contracts"]
  C --> E["Timelock<br/>109 contracts"]
  C --> F["Single key<br/>132 contracts"]
  F --> G["Epistemic boundary:<br/>custody is off chain<br/>and unobservable"]`;

export const ChainControlOntology: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

    <Link to="/research" className="inline-flex items-center gap-2 text-sm text-gov-blue hover:text-gov-blue-dark">
      <ArrowLeft className="w-4 h-4" /> Back to research
    </Link>

    <header className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gov-blue">Open research, August 2026</p>
      <h1 className="text-4xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight font-serif">
        USDC Has a Different Upgrade Key on Every Chain, and Its Own owner() Names None of Them
      </h1>
      <p className="text-xl text-gov-secondary/90 leading-relaxed">
        We read the control structure of 6,316 contracts across seven EVM chains and Solana, live from keyless public nodes, with every value confirmed by more than one independent provider. Of the 656 upgradeable contracts whose upgrade authority resolves, 390 report a different account through their own owner() function than the account that can replace their code. For 556 of them the address sitting in the proxy admin slot is not the controller either, because that address is itself owned by something further out. Walking every path to its end, 132 contracts are ultimately controlled by a single private key. This page explains what was measured, why the last hop is unknowable in principle, and why an ontology that admits this is more useful than a product that pretends otherwise.
      </p>
    </header>

    <section className="space-y-4">
      <div className="rounded-lg border border-gov-border bg-gov-bg/40 p-6">
        <h2 className="text-lg font-bold text-gov-dark font-serif mb-3">The short version</h2>
        <ul className="list-disc pl-5 space-y-2 text-gov-dark leading-relaxed">
          <li><strong>The question cannot be answered as asked.</strong> Show me every entity ultimately controlling these assets is not computable from chain state. Control resolves to an address, and an address is not a person. Everything past that hop is inference, and the products that sell it do not publish theirs.</li>
          <li><strong>The contract lies about its own owner.</strong> 390 of 656 upgradeable contracts, 59.5 per cent, return an account from owner() that is not the account able to replace their code. On a transparent proxy the call is delegated to the implementation, so the answer describes the wrong contract entirely.</li>
          <li><strong>The admin slot is not the answer either.</strong> For 556 of 656, 84.8 per cent, the control path continues past the proxy admin slot. Only 100 resolve in one hop, 536 need two, 18 need three, 2 need four.</li>
          <li><strong>Where the paths end:</strong> 335 at a multisig, 132 at a single private key, 109 at a timelock, 7 at renounced control. Eight of the 335 multisigs have a threshold of one, so effective single-signature control is 140 of 656, or 21.3 per cent.</li>
          <li><strong>USDC is the worked example.</strong> Six EVM chains, six different bare-key upgrade authorities, no signer reuse, and owner() naming the wrong account on all six. On Solana the same issuer runs two separate 2-of-4 multisigs with disjoint signers for mint and for freeze, both publicly readable.</li>
          <li><strong>The artefact</strong> is an OWL 2 ontology with SKOS registries and three SHACL layers, in which control is a dated assertion carrying an evidence class, never a property of a thing. Code MIT, ontology CC BY 4.0, reproducible with no API keys.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Why the honest answer is better than the one people ask for</h2>
      <p className="text-gov-dark leading-relaxed">
        The request that starts this work is always some version of the same sentence. Show me all the entities ultimately controlling these assets, across every chain, and explain the evidence for each step. The first two thirds of that are a good specification. The last hop is not achievable and never will be.
      </p>
      <p className="text-gov-dark leading-relaxed">
        A control path ends at a public key. Whether the corresponding private key sits on a laptop, inside a hardware security module, or is split across a nine-party threshold scheme in three jurisdictions is a fact about an off-chain arrangement. No block contains it. No amount of graph analysis recovers it. The commercial attribution products resolve that hop by combining exchange deposit patterns, off-chain leaks and human research, and they do not show you which of those produced any given label. That is not a criticism of their accuracy. It is an observation that you cannot audit it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        So the vocabulary we built stops where the evidence stops and gives the stopping point a name. A control path that ends at an account with no code is typed as an unattributed key, and a SHACL rule rejects any attempt to link an account to a legal entity unless the supporting assertion carries an off-chain attestation as its evidence class. A storage read can never support that link, and the shapes enforce it rather than merely recommending it. The result is a graph that tells you exactly how far the chain can take you, which is a great deal further than most people assume, and then refuses to take one step more.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What the census measured</h2>
      <p className="text-gov-dark leading-relaxed">
        The population is 6,316 contracts, drawn from the DefiLlama protocol list and the CoinGecko token list, spanning Ethereum, Arbitrum, Optimism, Base, Polygon, BSC and Gnosis. For each contract we read the code size, five different proxy storage slots covering EIP-1967, the legacy zeppelinos layout and EIP-1822, and the return values of symbol, owner, admin and implementation. Everything was read from keyless public nodes with each value confirmed by more than one independent provider.
      </p>
      <p className="text-gov-dark leading-relaxed">
        1,827 of the 6,316 contracts, 28.9 per cent, are upgradeable. 656 of those have an upgrade authority we can resolve. A separate 1,068 contracts have deliberately renounced ownership, returning the zero address from owner(), which the ontology records as a positive fact rather than a missing value, because giving up a capability is the strongest guarantee a contract can offer.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Three defects then fall out of the data. The first is the delegation hazard. On a transparent proxy, calls from anyone other than the admin are forwarded to the implementation, so a caller asking owner() is answered by the implementation about the implementation. 390 contracts return a different account this way than the account holding the upgrade power. Any dashboard, explorer or compliance tool reading owner() to determine control is being told the wrong thing, and it is being told it by the contract itself.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The second is that the admin slot is only the first hop. In most real deployments that slot holds an admin contract, which is itself owned by a multisig or a governance contract. For 556 of 656 contracts the path continues past the slot. Reading one hop and stopping produces a confident, precise and wrong answer five times out of six.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The third is narrower but sharper. 37 contracts are upgradeable through storage slots outside EIP-1967. The legacy zeppelinos slots, keccak256 of org.zeppelinos.proxy.admin and .implementation, predate the standard and remain in use under some very large deployments, including every native USDC contract. Tooling that checks the EIP-1967 slot alone reports these contracts as immutable. They are not.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">Where the paths actually end</h2>
      <Mermaid chart={MODEL} id="chainctl-model" ariaLabel="Control path from a token contract through its admin to a terminal controller, ending at an epistemic boundary" />
      <p className="text-gov-dark leading-relaxed">
        Walking all 656 paths to their terminal node gives the distribution the question was really after. 335 contracts, 51.1 per cent, end at a multisig whose quorum is enforced and published by the chain. 109, 16.6 per cent, end at a timelock, which constrains when control is exercised rather than who holds it. 73 end at a contract we did not classify further, and 7 at renounced control. And 132, 20.1 per cent, end at a single externally owned account.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Two qualifications sharpen that last number in opposite directions. Eight of the 335 multisigs have a threshold of one, meaning any single signer acts alone, so the honest count of effective single-signature control is 140 of 656, or 21.3 per cent. Among those eight is the largest contract in the population by the protocol TVL attached to it, whose terminal controller is a 1-of-2, verified identically across three independent providers. A quorum of one is not a quorum, and a label that says multisig without the threshold is not information.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Pulling the other way, a bare key is not evidence of carelessness. Institutional issuers routinely hold keys under multi-party computation or hardware custody with internal approval policies that are, in substance, quorums. The finding is not that these are weak. It is that they are invisible. A well-run five-of-nine custody policy and a single laptop present identically on chain, and the difference between them is exactly the thing an auditor, a counterparty or a regulator would want to see.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">USDC, one asset, seven chains, seven answers</h2>
      <p className="text-gov-dark leading-relaxed">
        The composition claim becomes concrete on the second largest stablecoin in the world. Native USDC on Ethereum, Base, Arbitrum, Optimism, Polygon and Avalanche has six different upgrade authorities. No signer is reused. All six are externally owned accounts with no code, so no quorum is enforced or visible on any of them. On all six chains, owner() returns an account other than the one that can replace the code.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gov-border">
          <thead className="bg-gov-bg/60">
            <tr>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Chain</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Upgrade or mint authority</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">What it is</th>
              <th className="text-left p-3 font-semibold text-gov-dark border-b border-gov-border">Quorum you can verify</th>
            </tr>
          </thead>
          <tbody className="text-gov-dark">
            <tr><td className="p-3 border-b border-gov-border/50">ethereum</td><td className="p-3 border-b border-gov-border/50 font-mono text-xs">0x807a96288a1a408dbc13de2b1d087d10356395d2</td><td className="p-3 border-b border-gov-border/50">single key</td><td className="p-3 border-b border-gov-border/50">none</td></tr>
            <tr><td className="p-3 border-b border-gov-border/50">base</td><td className="p-3 border-b border-gov-border/50 font-mono text-xs">0x4fc7850364958d97b4d3f5a08f79db2493f8ca44</td><td className="p-3 border-b border-gov-border/50">single key</td><td className="p-3 border-b border-gov-border/50">none</td></tr>
            <tr><td className="p-3 border-b border-gov-border/50">arbitrum</td><td className="p-3 border-b border-gov-border/50 font-mono text-xs">0x2e0a67588cfbcad40f9e4dd76052436190a77a68</td><td className="p-3 border-b border-gov-border/50">single key</td><td className="p-3 border-b border-gov-border/50">none</td></tr>
            <tr><td className="p-3 border-b border-gov-border/50">optimism</td><td className="p-3 border-b border-gov-border/50 font-mono text-xs">0xbb8a939e2b1923d248ac4c2f6aed0a4d71cb18a3</td><td className="p-3 border-b border-gov-border/50">single key</td><td className="p-3 border-b border-gov-border/50">none</td></tr>
            <tr><td className="p-3 border-b border-gov-border/50">polygon</td><td className="p-3 border-b border-gov-border/50 font-mono text-xs">0x9238e612387ebba4d4fa0d76dbfba99b453417b3</td><td className="p-3 border-b border-gov-border/50">single key</td><td className="p-3 border-b border-gov-border/50">none</td></tr>
            <tr><td className="p-3 border-b border-gov-border/50">avalanche</td><td className="p-3 border-b border-gov-border/50 font-mono text-xs">0xf0f918c7c977c41b390f8bc69f294eff414a5cb7</td><td className="p-3 border-b border-gov-border/50">single key</td><td className="p-3 border-b border-gov-border/50">none</td></tr>
            <tr><td className="p-3 border-b border-gov-border/50">solana (mint)</td><td className="p-3 border-b border-gov-border/50 font-mono text-xs">BJE5MMbqXjVwjAF7oxwPYXnTXDyspzZyt4vwenNw5ruG</td><td className="p-3 border-b border-gov-border/50">SPL multisig</td><td className="p-3 border-b border-gov-border/50 font-semibold">2 of 4</td></tr>
            <tr><td className="p-3">solana (freeze)</td><td className="p-3 font-mono text-xs">7dGbd2QZcCKcTndnHcTL8q7SMVXAkp688NTQYwrRCrar</td><td className="p-3">SPL multisig, disjoint signers</td><td className="p-3 font-semibold">2 of 4</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-gov-dark leading-relaxed">
        The asymmetry is the point. On Solana the issuer&apos;s control structure is enforced and published by the chain, and mint authority and freeze authority are separated across two different multisigs with different signers, which is a real separation of duties that anyone can check. On the EVM chains that separation cannot exist, because the account that can replace the code can mint and freeze and anything else it writes into the new implementation. Same issuer, same asset, two entirely different assurance postures, and you can only see it if both chains are one queryable world.
      </p>
      <p className="text-gov-dark leading-relaxed">
        This is not an accusation. Circle is a regulated issuer and those EVM keys are near-certainly held under serious institutional custody. The observation is narrower and, we think, more useful: on one chain that fact is verifiable by a counterparty in a single RPC call, and on six others it is not verifiable at all.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">How the artefact is built</h2>
      <p className="text-gov-dark leading-relaxed">
        The load-bearing decision is that control is never a property. Saying a contract has an owner throws away everything that matters. Instead every edge in the graph is a control assertion: a named observation run claims, at a recorded block, that one account holds a named capability over another, on the basis of a stated evidence class, having read a stated locator. The evidence classes are a SKOS scheme with strengths attached, and the one that earns its place is delegated view function return, the class for a value read through a proxy, which is the single most common source of wrong ownership reporting in this field.
      </p>
      <p className="text-gov-dark leading-relaxed">
        Identifier schemes declare their own conformance rules as data rather than having them hard-coded, so an EIP-55 checksummed address, an unchecksummed hexadecimal address and a base58 account address each carry their own pattern, case rule and check algorithm. Accounts are identified by CAIP-10, because a bare 0x address is not an identifier for anything: the same twenty bytes denote different contracts on different chains, and treating them as one thing is how cross-chain analysis goes wrong at the first step.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The SHACL layers are the defect classes, so the validation report is the findings table. Layer 3 contains the rule that stops us doing what the attribution vendors do, and the rule that fires when a proxy&apos;s slot-derived controller disagrees with its own view function. That second rule fires exactly 390 times, matching the independent Python count precisely.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">What we are not claiming</h2>
      <p className="text-gov-dark leading-relaxed">
        L2BEAT resolves contract permission graphs and did so before this work. Its discovery tooling is open source under MIT, it is careful and curated, and for deep analysis of a rollup or a bridge it is the right instrument. This study does not duplicate it. EthOn is the incumbent Ethereum ontology, published under CC BY 4.0 and archived since October 2018. Measured by grep over its Turtle file it contains zero occurrences of proxy, upgrade, admin, owner, multisig and timelock, because it predates EIP-1967 entirely. Our Account class is declared a subclass of EthOn&apos;s, and the alignment is deliberately weak. GraphSense does open clustering on UTXO chains, which is a different problem.
      </p>
      <p className="text-gov-dark leading-relaxed">
        We also removed a number from an earlier draft. It totalled the reported value of every protocol whose contract resolves to a single key and produced a headline figure above two billion dollars. That number is not defensible, because the value figure is protocol-level while the contract measured is usually a token contract, and controlling a token contract is not the same as controlling a protocol&apos;s deposits. Where the two genuinely coincide, as with a gold-backed token whose proxy is the token itself, the case is stated individually instead. The build report explains why it was cut.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The same build report lists four bugs this pipeline had. A SHACL layer that reported a clean pass while 390 real violations sat in the data, because the SKOS hierarchy was supplied through a parameter that does not expose it to constraint queries. An address decoder that invented a controller out of a function return that was not an address. A decoder change that then labelled 5,691 ordinary contracts as having renounced ownership when their storage slot was merely empty. And an account carrying two different canonical addresses, caught by SHACL and not by a regular expression. Each is documented because a repository that reports only its successes is not evidence of anything.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gov-dark font-serif">If this touches your work</h2>
      <p className="text-gov-dark leading-relaxed">
        Three groups have an immediate use for this. Anyone running a register, explorer or analytics product can be told which of their control records this census disagrees with, contract by contract, with the storage slot and block for each. Anyone holding or accepting a tokenised asset can ask a question they probably have not asked, which is not who issues this but who can rewrite it, and get an answer with its evidence attached. And anyone writing assurance requirements for digital assets can use the distinction this artefact is built around, between a control structure that is enforced on chain and one that is merely asserted off it.
      </p>
      <p className="text-gov-dark leading-relaxed">
        The repository is public, the pipeline needs no API keys, and every headline is computed twice with a governance report that exits non-zero if the two methods disagree. If you want the rows that concern you, or a control census of a specific set of contracts, write to Fabio Rovai at fabio@thetesseractacademy.com and say which chains and which addresses.
      </p>
      <div className="flex flex-wrap gap-3 items-center pt-2">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">Repository on GitHub<span className="sr-only"> (opens in new tab)</span></a>
        <a href="mailto:fabio@thetesseractacademy.com" className="text-sm font-medium text-gov-blue hover:text-gov-blue-dark hover:underline transition-colors">fabio@thetesseractacademy.com</a>
      </div>
    </section>
  </article>
);
