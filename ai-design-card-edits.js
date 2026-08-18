const aiDesignConciseEdits={
  1:{
    meaning:"Generative AI predicts likely outputs rather than following fixed rules, so the same prompt can produce several valid answers.",
    prompt:"Design a safe range of acceptable behaviour instead of one perfect response."
  },
  2:{
    meaning:"Model behaviour includes tone, initiative, uncertainty, refusal, interpretation and tool use.",
    prompt:"Decide how the system should behave, not only what its interface should show."
  },
  3:{
    meaning:"Hallucinations are plausible but unsupported or false outputs. Fluent language does not guarantee truth.",
    prompt:"Use trusted sources, show evidence, acknowledge uncertainty and escalate when verification fails."
  },
  4:{
    meaning:"Confident language is not evidence that an answer is correct, current or complete.",
    prompt:"Do not imply certainty without evidence. Show sources, verification and uncertainty."
  },
  5:{
    meaning:"Models can produce different valid outputs from the same prompt. Variation enables creativity, but one successful run cannot prove reliability. A complaint summary may be accurate once yet omit an important detail next time.",
    prompt:"Test repeated runs and judge patterns, not one demo. Define acceptable variation and which omissions count as failure."
  },
  6:{
    meaning:"Inference, retrieval, tool calls and agent workflows take time. A refund agent may need to check the order, policy and payment provider before answering.",
    prompt:"Design progressive feedback, status and cancellation. Balance response quality, speed and cost."
  },
  7:{
    meaning:"AI is probabilistic, contextual, adaptive, creative, inconsistent and fallible—just as every design material has distinctive properties.",
    prompt:"Learn the material before shaping the experience. Design with uncertainty and variability instead of assuming fixed software behaviour."
  },
  8:{
    meaning:"The context window is everything available to the model now: instructions, messages, retrieved documents and tool results. Without relevant context, references such as “her concern” remain ambiguous.",
    prompt:"Choose what enters context deliberately. The available information determines how the model interprets the request."
  },
  9:{
    meaning:"Excessive or irrelevant context can add cost, delay, contradictions and distraction.",
    prompt:"Include what matters for the current task. Relevant context beats maximum context."
  },
  11:{
    meaning:"RAG fails when retrieval returns irrelevant, outdated or conflicting evidence. A UK customer may receive a polished answer based on the wrong US policy.",
    prompt:"Evaluate retrieval and generation separately: did the system find the right evidence, then answer correctly from it?"
  },
  12:{
    meaning:"Grounding connects an AI answer to trusted information or observable evidence.",
    prompt:"Show what claims are based on through sources, dates or verification states."
  },
  13:{
    meaning:"Memory retains useful information across interactions, such as a seating preference. It also raises questions about what is stored, for how long and whether users can change it.",
    prompt:"Let users inspect, correct and delete memories. Treat memory as a product feature, not merely storage."
  },
  14:{
    meaning:"Incorrectly inferred memory can create persistent poor behaviour, turning a one-off request into a permanent preference.",
    prompt:"Let users inspect, correct, override and delete memories before errors compound."
  },
  15:{
    meaning:"Good personalisation uses explicit preferences or strong evidence. Bad personalisation extrapolates, such as turning one vegetarian restaurant request into a permanent dietary assumption.",
    prompt:"Distinguish what is known, inferred and assumed. Personalise from evidence and match action to confidence."
  },
  16:{
    meaning:"A system prompt gives the model high-level behavioural instructions, priorities and boundaries.",
    prompt:"Define personality, limits and escalation rules, while remembering that prompts are only one product layer."
  },
  17:{
    meaning:"AI products contain instruction layers. Higher-priority safety and system rules should constrain lower-priority user requests.",
    prompt:"Design for instruction conflicts and make clear that not every request can override product rules."
  },
  18:{
    meaning:"Prompt injection occurs when external content tries to override the AI’s instructions—for example, a webpage telling an agent to expose private data.",
    prompt:"Separate trusted instructions from untrusted content. Systems that read external data need explicit trust boundaries and safeguards."
  },
  19:{
    meaning:"Models can return structured data for software to classify, route or change state—not only conversational prose.",
    prompt:"Choose a reliable schema when another system must consume the output."
  },
  21:{
    meaning:"Models trade off quality, speed, cost, reasoning, modality and context size. A fast model may classify support requests while a stronger one investigates complex discrepancies.",
    prompt:"Choose enough intelligence for the task. Model selection directly shapes experience and business viability."
  },
  25:{
    meaning:"Tool use also requires correct parameters. A wrong order ID or amount can affect the wrong transaction.",
    prompt:"Review or confirm high-impact arguments. The right action with wrong parameters is still wrong."
  },
  26:{
    meaning:"Agents can break complex goals into steps, such as searching, comparing and assembling a travel plan.",
    prompt:"Show progress and completion, and let users interrupt long-running workflows."
  },
  28:{
    meaning:"Autonomy ranges from suggesting, to preparing an action for approval, to acting independently.",
    prompt:"Match autonomy to risk, reversibility, user intent and confidence."
  },
  29:{
    meaning:"Understanding emotion or desire does not give an AI permission to act. Frustration is not a cancellation request.",
    prompt:"Separate desire, intent, permission and execution. Inference is not consent."
  },
  30:{
    meaning:"Automation is safer when actions are easy to reverse. Irreversible actions require stronger safeguards.",
    prompt:"Provide undo where possible and increase confirmation as reversibility decreases."
  },
  31:{
    meaning:"Human-in-the-loop systems require people in selected situations—for example, automatically approving small refunds while routing larger ones for review.",
    prompt:"Define when human judgement is required and preserve context during handoff. Escalation can be successful product behaviour."
  },
  32:{
    meaning:"An eval is a structured test of whether an AI behaves as intended—for example, scoring its responses across hundreds of representative support questions.",
    prompt:"Help define what good means, then measure it consistently. Evals make behavioural quality inspectable."
  },
  33:{
    meaning:"An eval dataset is a representative set of cases used to test AI behaviour.",
    prompt:"Include common tasks, ambiguity and difficult edge cases. The dataset defines what quality measures."
  },
  34:{
    meaning:"Golden answers describe expected information or outcomes for questions with reasonably objective answers.",
    prompt:"Compare meaning rather than exact wording, because several responses may be equally correct."
  },
  35:{
    meaning:"Rubrics score responses across qualities such as correctness, helpfulness, clarity, safety and tone.",
    prompt:"Define the criteria that make the experience genuinely good, not merely factually correct."
  },
  36:{
    meaning:"Offline evals test fixed cases outside production, making model, prompt and workflow comparisons repeatable.",
    prompt:"Use them before release to measure performance on known scenarios."
  },
  37:{
    meaning:"Online evals measure real production outcomes such as completion, correction, escalation and satisfaction.",
    prompt:"Check whether laboratory quality survives real users, contexts and constraints."
  },
  38:{
    meaning:"Another model can score AI outputs at scale, but its judgements may also be biased or inconsistent.",
    prompt:"Calibrate AI judges against humans and inspect disagreements and edge cases."
  },
  39:{
    meaning:"People remain essential for judging nuance, delight, appropriateness, trust and cultural context.",
    prompt:"Extend design critique to conversations, decisions and failures—not only screens."
  },
  40:{
    meaning:"A change can improve one behaviour while damaging another, such as reducing hallucination but increasing excessive caution.",
    prompt:"Run broad evals after changes and inspect trade-offs across multiple quality dimensions."
  },
  41:{
    meaning:"Red teaming deliberately probes malicious, unusual and extreme requests to reveal weaknesses before users encounter or exploit them.",
    prompt:"Test adversarial prompts, unsafe actions and privacy attacks. Design for hostile edge cases, not only happy paths."
  },
  42:{
    meaning:"AI can fail through hallucination, misunderstanding, wrong tools, missing context, overconfidence, loops or bias.",
    prompt:"Map likely failures and recovery paths before polishing the happy path."
  },
  43:{
    meaning:"Risk depends on both likelihood and consequence. A rare financial mistake may matter more than frequent typos.",
    prompt:"Use risk to set autonomy, evidence, confirmation and escalation requirements."
  },
  44:{
    meaning:"Guardrails constrain what AI can do through limits, permissions, privacy rules and domain boundaries.",
    prompt:"Enforce critical constraints in deterministic software, not only through prompts."
  },
  48:{
    meaning:"Useful explanations show the observable basis of a decision—sources, criteria, actions, constraints or verification—rather than claiming to expose hidden reasoning.",
    prompt:"Explain what evidence and rules shaped the result. Make decisions understandable without inventing an internal thought transcript."
  },
  47:{
    meaning:"Trust calibration means users accurately understand what the AI can and cannot do.",
    prompt:"Communicate capability and uncertainty so people neither overtrust nor underuse the system."
  },
  50:{
    meaning:"Natural language is ambiguous. The same statement may express a complaint, question or request for action.",
    prompt:"Clarify intent before high-impact actions. Do not turn every inference into execution."
  },
  51:{
    meaning:"Uncertainty needs explicit system behaviour: clarify, offer alternatives, verify, defer, escalate or proceed with easy undo.",
    prompt:"Treat uncertainty as a designed state rather than hiding it."
  },
  52:{
    meaning:"Autonomy should rise with confidence and reversibility, and fall as risk and consequence increase.",
    prompt:"Act on low-risk reversible tasks; seek approval or human judgement for higher-risk actions."
  },
  53:{
    meaning:"An AI product designer shapes behaviour as well as interfaces: what the model knows, remembers and can do; how agents act; how quality is evaluated; and how failure, autonomy and trust are handled.",
    prompt:"Design the relationship between human intention and machine intelligence. Keep people informed, empowered and in control."
  }
};

window.aiDesignCards=window.aiDesignCards.map(card=>aiDesignConciseEdits[card.id]?{...card,...aiDesignConciseEdits[card.id]}:card);
