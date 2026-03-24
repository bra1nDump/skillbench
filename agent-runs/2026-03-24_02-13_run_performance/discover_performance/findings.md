# Discover Findings — Performance

## Scope

Find all serious contenders in the **Performance** problem space: tools for profiling, benchmarking, and optimizing AI/agent/LLM workloads. Identify new signals, gaps, and what deserves a deep-dive.

## Date

2026-03-24

## Inputs

### Search Queries Used

**Hacker News Algolia (10+ queries):**
- `AI performance optimization LLM` (points>10)
- `LLM inference speed benchmark` (points>10)
- `vLLM OR SGLang OR TensorRT-LLM OR llama.cpp` (points>10)
- `AI agent latency profiling` (points>10)
- `Show HN performance LLM inference` (points>5)
- `vLLM` (points>10)
- `llama.cpp performance` (points>10)
- `SGLang inference` (points>5)
- `LLM caching prompt cache` (points>10)
- `Ollama performance` (points>10)
- `speculative decoding` (points>10)
- `quantization LLM GGUF` (points>10)
- `Groq` (points>20)
- `Cerebras inference` (points>10)
- Recent stories (last 30 days): `LLM inference performance optimization`

**GitHub (5+ queries):**
- `LLM inference optimization stars:>1000`
- `vLLM OR SGLang OR llama.cpp OR TensorRT-LLM stars:>500`
- `LLM benchmark OR AI profiling OR model optimization stars:>500 pushed:>2025-01-01`
- `prompt caching OR KV cache LLM stars:>200 pushed:>2025-06-01`
- `LLM quantization OR model compression stars:>500 pushed:>2025-06-01`
- `speculative decoding OR inference engine LLM stars:>500 pushed:>2025-06-01`
- `Ollama OR GPUStack OR LocalAI OR LMStudio stars:>1000`

**Registries:**
- skills.sh — checked for performance/benchmarking/profiling skills

**Pages Checked:**
- GitHub trending (via search API sorted by stars)
- skills.sh homepage

---

## Findings

### Tier 1 — Dominant Inference Engines (The Big 4)

#### 1. llama.cpp (ggml-org)
- **GitHub:** ★99,098 — the single most-starred inference engine
- **What:** C/C++ LLM inference, runs on CPU and GPU, GGUF format standard
- **Why it matters:** De facto standard for local/edge inference. Everything else benchmarks against it.
- **HN signal:** RTX 5090 benchmark review (113 pts, Mar 2025); Apple Silicon performance discussion (100 pts)
- **Key trend:** GGUF has become the universal model distribution format

#### 2. vLLM
- **GitHub:** ★74,093
- **What:** High-throughput, memory-efficient serving engine with PagedAttention
- **Why it matters:** Standard for production GPU serving. V1 architecture landed with significant perf improvements.
- **HN signals:**
  - "Nano-vLLM: How a vLLM-style inference engine works" — 271 pts (Feb 2026) — shows deep community interest in understanding vLLM internals
  - "Life of an inference request (vLLM V1)" — 175 pts (Jun 2025)
  - "vLLM large scale serving: DeepSeek 2.2k tok/s/h200" — 147 pts (Jan 2026)
  - **"Surpassing vLLM with a Generated Inference Stack" — 62 pts (Mar 2026)** — Infinity Inc claims to beat vLLM with code-generated kernels; signals competition heating up

#### 3. Ollama
- **GitHub:** ★165,967 — most-starred project in local AI space
- **What:** Dead-simple local LLM runner, wraps llama.cpp
- **Why it matters:** Gateway drug for local inference. Massive community, but not a performance tool per se — it's a UX layer. Important for the "consumer performance" angle.

#### 4. SGLang
- **GitHub:** ★24,917
- **What:** High-performance serving framework with RadixAttention for structured generation
- **Why it matters:** Fastest-growing serious vLLM competitor. RadixAttention enables prefix caching at the attention level.
- **HN signal:** "Fast and Expressive LLM Inference with RadixAttention and SGLang" (11 pts, Jan 2024)

---

### Tier 2 — Specialized Engines & Optimizers

#### 5. NVIDIA TensorRT-LLM
- **GitHub:** ★13,172
- **What:** NVIDIA's optimized LLM inference on NVIDIA GPUs
- **Why it matters:** Best raw performance on NVIDIA hardware. Enterprise-grade but complex setup. De facto for NVIDIA-heavy production deployments.

#### 6. KTransformers (kvcache-ai)
- **GitHub:** ★16,819
- **What:** Heterogeneous inference — runs 671B DeepSeek-R1 on single machine, 286 tok/s prefill
- **Why it matters:** Pioneering CPU+GPU hybrid inference for massive models. Two HN Show HN posts (20 pts, 14 pts). Growing fast.
- **NEW CONTENDER ALERT** — Not in current catalog; 16.8K stars is significant

#### 7. nano-vllm
- **GitHub:** ★12,391
- **What:** Lightweight reimplementation of vLLM from scratch for learning/hacking
- **Why it matters:** 271 pts on HN (Feb 2026) for the blog post. Shows the community wants to understand and customize inference stacks. Could become a platform for experiments.
- **NEW CONTENDER ALERT**

#### 8. GPUStack
- **GitHub:** ★4,702
- **What:** Performance-optimized multi-GPU AI inference platform
- **Why it matters:** Multi-GPU orchestration layer — manages GPU allocation, model placement, throughput tuning.
- **NEW CONTENDER ALERT**

#### 9. LocalAI
- **GitHub:** ★44,268
- **What:** Run any model on any hardware, no GPU required
- **Why it matters:** OpenAI-compatible API for local inference. Strong community (44K stars). Performance is secondary to compatibility, but still relevant.

---

### Tier 3 — Optimization Techniques & Libraries

#### 10. LMCache
- **GitHub:** ★7,748
- **What:** "Supercharge Your LLM with the Fastest KV Cache Layer" — external KV cache management
- **Why it matters:** KV cache is the #1 bottleneck for long-context inference. Dedicated caching layer that works across serving engines.
- **NEW CONTENDER ALERT**

#### 11. NVIDIA kvpress
- **GitHub:** ★977
- **What:** LLM KV cache compression made easy
- **Why it matters:** NVIDIA's official take on KV cache compression. Growing fast.
- **NEW CONTENDER ALERT**

#### 12. vllm-project/llm-compressor
- **GitHub:** ★2,911
- **What:** Transformers-compatible compression algorithms for vLLM deployment
- **Why it matters:** Official vLLM companion for quantization/pruning. Bridge between training and serving.
- **NEW CONTENDER ALERT**

#### 13. AWQ (mit-han-lab/llm-awq)
- **GitHub:** ★3,471
- **What:** Activation-aware Weight Quantization — MLSys 2024 Best Paper
- **Why it matters:** State-of-the-art quantization technique. Won best paper at MLSys.

#### 14. Microsoft LLMLingua
- **GitHub:** ★5,951
- **What:** Prompt compression to speed up inference and reduce costs
- **Why it matters:** Different angle — compress the INPUT rather than the model. 2.5x speedup claimed. EMNLP/ACL published.
- **NEW CONTENDER ALERT**

#### 15. Intel IPEX-LLM
- **GitHub:** ★8,737
- **What:** Accelerate LLM inference and finetuning on Intel hardware
- **Why it matters:** Only serious Intel GPU/CPU optimization library. Important for non-NVIDIA deployments.

#### 16. NVIDIA Model-Optimizer
- **GitHub:** ★2,228
- **What:** Unified library for quantization, pruning, distillation, sparsity
- **Why it matters:** NVIDIA's all-in-one optimization toolkit. Growing steadily.

#### 17. Intel Neural Compressor
- **GitHub:** ★2,604
- **What:** Low-bit quantization (INT8/FP8/INT4) and sparsity for PyTorch/TensorFlow
- **Why it matters:** Cross-hardware compression. Supports latest quantization formats.

#### 18. GPTQModel (ModelCloud)
- **GitHub:** ★1,066
- **What:** LLM quantization toolkit with multi-vendor GPU acceleration
- **Why it matters:** Practical quantization for deployment. Supports NVIDIA, AMD, Intel.

---

### Tier 4 — Inference-as-a-Service (Hardware Plays)

#### 19. Groq
- **What:** Custom LPU hardware for ultra-fast inference
- **HN signals:** MASSIVE — "Groq runs Mixtral 8x7B at 500 T/s" (847 pts!), "Nvidia to buy Groq for $20B" (699 pts), multiple 100+ pt stories
- **Why it matters:** Proved that dedicated silicon can blow GPUs away on inference latency. Nvidia acquisition (Dec 2025) is the biggest signal in this space.
- **NEW CONTENDER ALERT** — Must be in catalog as the hardware speed benchmark

#### 20. Cerebras
- **HN signals:** "Llama 3.1 405B at 969 tok/s" (427 pts), "3x faster: 70B at 2,100 tok/s" (147 pts), "GPT-OSS-120B at 3k tok/s" (11 pts, Aug 2025)
- **Why it matters:** Record-breaking inference speeds. Now supports OpenAI's open model.
- **NEW CONTENDER ALERT**

---

### Tier 5 — Emerging & Techniques

#### 21. Speculative Decoding
- **What:** Technique to parallelize autoregressive generation using a draft model
- **HN signals:** "Speculative Speculative Decoding (SSD)" — 61 pts (Mar 2026!), Google research retrospective — 36 pts (Mar 2025), Morph uses it for 4,500 tok/s code edits — 217 pts
- **Why it matters:** March 2026 paper "SSD" shows the technique is still evolving. OpenGraviton uses it for 500B+ models on Mac Mini.

#### 22. Prompt Caching
- **HN signal:** "Prompt caching for cheaper LLM tokens" — 306 pts (Dec 2025)
- **What:** Cache repeated prompt prefixes to avoid recomputation. Now supported natively by Anthropic, OpenAI, Google.
- **Why it matters:** 306 pts shows massive community interest. ngrok blog post was huge.

#### 23. ZSE (Zyora-Dev)
- **GitHub:** github.com/Zyora-Dev/zse
- **HN:** 58 pts (Feb 2026)
- **What:** Open-source inference engine with 3.9s cold starts, native quantization, 70% VRAM reduction
- **Why it matters:** Tackling the cold-start problem specifically. Fresh entry.
- **NEW CONTENDER ALERT**

#### 24. OpenGraviton
- **HN:** 17 + 13 pts (Mar 2026)
- **What:** Run 500B+ parameter models on consumer Mac Mini using speculative decoding
- **Why it matters:** Pushing the boundary of what consumer hardware can do.
- **NEW CONTENDER ALERT**

#### 25. Infinity Inc — Generated Inference Stack
- **HN:** "Surpassing vLLM with a Generated Inference Stack" — 62 pts (Mar 2026!)
- **What:** Code-generated, model-specific inference kernels that beat vLLM
- **Why it matters:** Fresh (March 2026), challenges the reigning champion. New paradigm: generate the serving code per-model.
- **NEW CONTENDER ALERT**

#### 26. optillm (algorithmicsuperintelligence)
- **GitHub:** ★3,389
- **What:** Optimizing inference proxy for LLMs — routing, caching, strategy selection
- **Why it matters:** Meta-optimizer that sits between your app and the LLM. System Prompt Learning plugin (48 pts HN).

#### 27. LiteLLM (BerriAI)
- **GitHub:** ★40,082
- **What:** Proxy/gateway to 100+ LLM APIs with cost tracking
- **Why it matters:** Not a raw performance tool, but enables routing to fastest/cheapest provider — performance optimization through selection.

#### 28. Headroom (chopratejas)
- **GitHub:** ★756
- **What:** "The Context Optimization Layer for LLM Applications"
- **Why it matters:** Focused specifically on context window optimization.

#### 29. R-KV (Redundancy-aware KV Cache Compression)
- **GitHub:** ★1,187
- **What:** NeurIPS 2025 paper — KV cache compression for reasoning models
- **Why it matters:** Specifically targets reasoning model performance (chain-of-thought generates massive KV caches).

#### 30. Claw Compactor (open-compress)
- **GitHub:** ★1,851
- **What:** 14-stage fusion pipeline for LLM token compression
- **Why it matters:** Aggressive compression approach. Fast-growing.
- **NEW CONTENDER ALERT**

---

### Skills.sh Registry Findings

**Performance-related skills available:**
- `python-performance-optimization` — 12K installs
- `performance-optimization` — 11.5K installs
- `postgresql-optimization` — 8.3K installs
- `sql-optimization` — 7.9K installs
- `monitoring-observability` — 11K installs
- `log-analysis` — 10.6K installs

**Gap:** No skills specifically for LLM inference benchmarking, model profiling, or serving optimization.

---

## Key Themes & Meta Shifts

### 1. The Inference Stack War is ON (March 2026)
vLLM is the incumbent but is being challenged from multiple directions:
- **SGLang** — RadixAttention, structured generation
- **Infinity Inc** — generated, model-specific kernels (62 pts, fresh)
- **KTransformers** — CPU+GPU hybrid for massive models

### 2. KV Cache is the New Battleground
LMCache (★7.7K), NVIDIA kvpress (★977), R-KV (NeurIPS 2025), prompt caching (306 pts on HN) — the community has realized that KV cache management is THE bottleneck for long-context and agent workloads.

### 3. Hardware Consolidation
Nvidia acquiring Groq ($20B, Dec 2025) signals that the hardware inference race matters. Cerebras continues to post record speeds (3K tok/s). The "which hardware" question is a key performance decision.

### 4. Consumer Hardware Getting Serious
KTransformers (671B on one machine), OpenGraviton (500B+ on Mac Mini), llama.cpp RTX 5090 benchmarks — the gap between consumer and datacenter is narrowing for inference.

### 5. Compression Techniques Maturing
AWQ (MLSys best paper), LLMLingua (EMNLP/ACL), llm-compressor, NVIDIA Model-Optimizer — quantization and prompt compression are moving from research to production.

---

## Quotes

> "286 tokens/s for prompt prefill" on 671B model — KTransformers (HN, Feb 2025)

> "Llama 3.1 405B now runs at 969 tokens/s on Cerebras Inference" — 427 pts on HN (Nov 2024)

> "Prompt caching is OP!" — sentiment from HN prompt caching thread (306 pts, Dec 2025)

> "Surpassing vLLM with a Generated Inference Stack" — Infinity Inc (62 pts, Mar 2026)

> "Fits 32B in 19.3 GB VRAM (70% reduction vs FP16)" — ZSE engine (58 pts, Feb 2026)

---

## NEW CONTENDER ALERTS (Not in Current Catalog)

| Contender | Stars/Signal | Why Add |
|-----------|-------------|---------|
| KTransformers | ★16,819 | CPU+GPU hybrid, 671B on single machine |
| nano-vllm | ★12,391 | Educational + hackable vLLM reimplementation |
| LMCache | ★7,748 | Dedicated KV cache optimization layer |
| GPUStack | ★4,702 | Multi-GPU inference orchestration |
| Groq (service) | 847 pts HN, acquired by Nvidia for $20B | Fastest inference hardware |
| Cerebras (service) | 427 pts HN | Record token speeds |
| ZSE | 58 pts HN | Cold-start focused engine |
| OpenGraviton | 17 pts HN (Mar 2026) | 500B+ on consumer hardware |
| Infinity Inc | 62 pts HN (Mar 2026) | Generated inference stacks beating vLLM |
| LLMLingua | ★5,951 | Prompt compression (input-side optimization) |
| llm-compressor | ★2,911 | Official vLLM quantization companion |
| NVIDIA kvpress | ★977 | KV cache compression from NVIDIA |
| Claw Compactor | ★1,851 | 14-stage token compression pipeline |
| optillm | ★3,389 | Inference proxy/optimizer with strategy routing |

---

## GAPS in Current Catalog

The "performance" category is **completely empty** — no rankings, no verdicts, no solutions listed. This is a major gap given:

1. **30+ serious contenders** identified across inference engines, optimization libraries, hardware services, and techniques
2. **Massive community interest** — vLLM alone has 74K stars; Ollama has 166K; Groq's HN debut got 847 points
3. **Active competition** — March 2026 alone saw Infinity Inc challenging vLLM, SSD paper on speculative decoding, and OpenGraviton demos
4. **Cross-category relevance** — performance affects every other problem space (coding CLIs need fast inference, agents need low latency, etc.)

### Suggested Sub-Categories for Performance

1. **Inference Engines** — vLLM, SGLang, llama.cpp, TensorRT-LLM, KTransformers
2. **Local Inference Platforms** — Ollama, LocalAI, GPUStack, LMStudio, Jan
3. **Model Compression** — AWQ, llm-compressor, NVIDIA Model-Optimizer, Intel Neural Compressor, GPTQModel
4. **KV Cache & Prompt Optimization** — LMCache, kvpress, LLMLingua, prompt caching, R-KV
5. **Inference-as-a-Service** — Groq, Cerebras, cloud provider endpoints
6. **Benchmarking Tools** — llmapitest.com, llm-inference-perf-model

---

## Recommended Next Step

1. **Deep-dive on the Big 4 inference engines** (vLLM vs SGLang vs llama.cpp vs TensorRT-LLM) — head-to-head benchmarks, production stories, community sentiment
2. **Deep-dive on KV cache optimization** (LMCache vs kvpress vs prompt caching) — this is the emerging battleground
3. **Deep-dive on Groq/Cerebras** — hardware inference services, pricing, availability, Nvidia acquisition implications
4. **Rank agent run** to populate the empty performance category with initial rankings based on these findings
5. **Create sub-problem pages** if performance is too broad for one ranking (inference engines vs optimization libraries vs hardware services)
