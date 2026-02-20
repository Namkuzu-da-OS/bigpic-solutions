import { useState } from "react";

const COLORS = {
  bg: "#0a0e17",
  card: "#111827",
  cardBorder: "#1e293b",
  accent: "#76b900",    // NVIDIA green
  accentDim: "#4a7a00",
  bull: "#22c55e",
  bear: "#ef4444",
  neutral: "#f59e0b",
  text: "#e2e8f0",
  textDim: "#94a3b8",
  textMuted: "#64748b",
  highlight: "#1e3a5f",
};

const SignalBar = ({ label, value, max = 10, color = COLORS.accent }) => (
  <div style={{ marginBottom: 12 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
      <span style={{ fontSize: 13, color: COLORS.textDim }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color }}>{value}/{max}</span>
    </div>
    <div style={{ height: 6, background: "#1e293b", borderRadius: 3, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${(value / max) * 100}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          borderRadius: 3,
          transition: "width 0.6s ease",
        }}
      />
    </div>
  </div>
);

const DataRow = ({ label, value, subtext, highlight }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "8px 0",
      borderBottom: `1px solid ${COLORS.cardBorder}`,
    }}
  >
    <span style={{ fontSize: 13, color: COLORS.textDim, flex: 1 }}>{label}</span>
    <div style={{ textAlign: "right" }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: highlight || COLORS.text }}>
        {value}
      </span>
      {subtext && (
        <div style={{ fontSize: 11, color: COLORS.textMuted }}>{subtext}</div>
      )}
    </div>
  </div>
);

const SectionCard = ({ title, icon, children, accent = COLORS.accent }) => (
  <div
    style={{
      background: COLORS.card,
      border: `1px solid ${COLORS.cardBorder}`,
      borderRadius: 12,
      padding: 20,
      marginBottom: 16,
      borderTop: `3px solid ${accent}`,
    }}
  >
    <h3
      style={{
        margin: "0 0 16px 0",
        fontSize: 15,
        fontWeight: 700,
        color: accent,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ fontSize: 18 }}>{icon}</span> {title}
    </h3>
    {children}
  </div>
);

const VerdictBadge = ({ text, color }) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: 20,
      fontSize: 12,
      fontWeight: 700,
      color,
      background: `${color}18`,
      border: `1px solid ${color}40`,
      letterSpacing: "0.04em",
    }}
  >
    {text}
  </span>
);

export default function NvidiaAnalysis() {
  const [activeTab, setActiveTab] = useState("mosaic");

  const tabs = [
    { id: "mosaic", label: "Data Mosaic" },
    { id: "supply", label: "Supply Chain" },
    { id: "verdict", label: "Verdict" },
  ];

  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
        background: COLORS.bg,
        color: COLORS.text,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentDim})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 900,
            }}
          >
            ◈
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>
              NVDA Q4 FY2026 — Independent Analysis
            </h1>
            <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>
              BIGPIC SOLUTIONS × PROJECT MERIDIAN | Feb 19, 2026 | Earnings: Feb 25 AMC
            </div>
          </div>
        </div>

        {/* Verdict Banner */}
        <div
          style={{
            background: `linear-gradient(90deg, ${COLORS.bull}12, transparent)`,
            border: `1px solid ${COLORS.bull}30`,
            borderRadius: 8,
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 12,
          }}
        >
          <div>
            <span style={{ fontSize: 12, color: COLORS.textMuted }}>INDEPENDENT VERDICT</span>
            <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.bull, marginTop: 2 }}>
              BEAT ON REVENUE & EPS — HIGH CONFIDENCE
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <VerdictBadge text="REV: $66.5-68B" color={COLORS.bull} />
            <VerdictBadge text="EPS: $1.50-1.58" color={COLORS.bull} />
            <VerdictBadge text="GUIDANCE: WILD CARD" color={COLORS.neutral} />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 20,
          background: COLORS.card,
          borderRadius: 8,
          padding: 4,
          border: `1px solid ${COLORS.cardBorder}`,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "10px 16px",
              border: "none",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "inherit",
              cursor: "pointer",
              letterSpacing: "0.04em",
              background: activeTab === tab.id ? COLORS.accent : "transparent",
              color: activeTab === tab.id ? "#000" : COLORS.textDim,
              transition: "all 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "mosaic" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* TSMC Fab Data */}
          <SectionCard title="TSMC Fabrication Data (Primary Source)" icon="🏭">
            <p style={{ fontSize: 12, color: COLORS.textMuted, margin: "0 0 12px 0", lineHeight: 1.5 }}>
              TSMC is NVIDIA's sole foundry. Their revenue is the closest proxy to actual NVIDIA chip production.
            </p>
            <DataRow
              label="TSMC Q4'25 Revenue"
              value="$33.7B"
              subtext="+25.5% YoY, beat guidance"
              highlight={COLORS.bull}
            />
            <DataRow
              label="TSMC Jan 2026 Revenue"
              value="NT$401.3B (~$12.7B)"
              subtext="+36.8% YoY, +19.8% MoM"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Advanced Nodes (≤7nm)"
              value="77% of Q4 revenue"
              subtext="3nm: 28% | 5nm: 35% | 7nm: 14%"
              highlight={COLORS.accent}
            />
            <DataRow
              label="HPC Revenue Share"
              value="55% of Q4"
              subtext="This is where NVIDIA GPUs live"
              highlight={COLORS.accent}
            />
            <DataRow
              label="AI Accelerator Rev (FY25)"
              value="High-teens % of total"
              subtext="CAGR: mid-to-high 50s% through 2029"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Q1 2026 Guidance"
              value="$34.6-35.8B"
              subtext="+38% YoY at midpoint"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Advanced Packaging Share"
              value="~10%+ of FY25 (8% in FY24)"
              subtext="CoWoS — expected low-teens % in 2026"
            />
            <div
              style={{
                marginTop: 12,
                padding: 10,
                background: `${COLORS.bull}10`,
                borderRadius: 6,
                fontSize: 12,
                color: COLORS.bull,
                lineHeight: 1.5,
                borderLeft: `3px solid ${COLORS.bull}`,
              }}
            >
              <strong>SIGNAL:</strong> TSMC's advanced node revenue and HPC mix both accelerating. Jan 2026 monthly rev at +36.8% YoY is a Q1 leading indicator showing NO deceleration. AI accelerator revenue growing at 50%+ CAGR. All signals confirm maximum utilization of NVIDIA-relevant capacity.
            </div>
          </SectionCard>

          {/* SK Hynix HBM Data */}
          <SectionCard title="SK Hynix HBM Memory Data (Primary Source)" icon="💾">
            <p style={{ fontSize: 12, color: COLORS.textMuted, margin: "0 0 12px 0", lineHeight: 1.5 }}>
              SK Hynix is the dominant HBM supplier for NVIDIA. Every GPU needs HBM — their shipments directly constrain NVIDIA output.
            </p>
            <DataRow
              label="SK Hynix Q4'25 Revenue"
              value="KRW 32.8T (~$23B)"
              subtext="+66% YoY, +34% QoQ — ALL-TIME HIGH"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Q4 Operating Margin"
              value="58%"
              subtext="Up from 47% in Q3. Record profitability"
              highlight={COLORS.bull}
            />
            <DataRow
              label="HBM Revenue Growth"
              value=">2x YoY"
              subtext="HBM3E 12Hi driving bulk of growth"
              highlight={COLORS.bull}
            />
            <DataRow
              label="DDR5 128GB+ Shipments"
              value="+50% QoQ in Q4"
              subtext="Server memory demand surging"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Customer DRAM Inventory"
              value="Decreased overall"
              subtext="Especially for server customers"
              highlight={COLORS.accent}
            />
            <DataRow
              label="HBM4 Status"
              value="Mass production underway"
              subtext="First in industry. Shipping to customers"
              highlight={COLORS.accent}
            />
            <DataRow
              label="2026 DRAM Demand Outlook"
              value=">20% growth expected"
              subtext="NAND: high-teens growth"
            />
            <div
              style={{
                marginTop: 12,
                padding: 10,
                background: `${COLORS.bull}10`,
                borderRadius: 6,
                fontSize: 12,
                color: COLORS.bull,
                lineHeight: 1.5,
                borderLeft: `3px solid ${COLORS.bull}`,
              }}
            >
              <strong>SIGNAL:</strong> SK Hynix posted ALL-TIME record revenue and profit. HBM revenue more than doubled. Customer inventory declined (meaning demand > supply). They literally cannot meet all customer requests. This is the strongest possible HBM signal for NVIDIA Q4.
            </div>
          </SectionCard>

          {/* Hyperscaler Capex */}
          <SectionCard title="Hyperscaler Capex Actuals (Bottom-Up)" icon="📊">
            <p style={{ fontSize: 12, color: COLORS.textMuted, margin: "0 0 12px 0", lineHeight: 1.5 }}>
              These are the ACTUAL buyers. Their spend IS NVIDIA's revenue pipeline.
            </p>
            <DataRow
              label="Combined Big 4 Q4'25 Capex"
              value="~$88B+ (record)"
              subtext="Amazon, Google, Microsoft, Meta"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Amazon 2026 Capex Guide"
              value="$200B"
              subtext="Up from $125B in 2025 (+60%)"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Alphabet 2026 Capex Guide"
              value="$175-185B"
              subtext="~2x 2025 spend of $91-93B"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Meta 2026 Total Expenses"
              value="$115-135B"
              subtext="Including Superintelligence Labs"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Microsoft FY26 Capex"
              value="~$140B+ run-rate"
              subtext="$72B in H1 FY26 alone"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Combined 2026 Guidance"
              value="$650-700B"
              subtext="Up ~60-70% from 2025's ~$410B"
              highlight={COLORS.bull}
            />
            <DataRow
              label="% Tied to AI Infrastructure"
              value="~75%"
              subtext="= ~$450-525B flowing to AI"
            />
            <div
              style={{
                marginTop: 12,
                padding: 10,
                background: `${COLORS.bull}10`,
                borderRadius: 6,
                fontSize: 12,
                color: COLORS.bull,
                lineHeight: 1.5,
                borderLeft: `3px solid ${COLORS.bull}`,
              }}
            >
              <strong>SIGNAL:</strong> Every hyperscaler RAISED guidance. Wall Street initially expected +19% capex growth in 2026 — actual guidance is +60-70%. This isn't moderation, it's acceleration. NVIDIA captures the lion's share of AI GPU spend.
            </div>
          </SectionCard>

          {/* NVIDIA's Own Setup */}
          <SectionCard title="NVIDIA's Own Numbers & Guidance Math" icon="🔢">
            <p style={{ fontSize: 12, color: COLORS.textMuted, margin: "0 0 12px 0", lineHeight: 1.5 }}>
              Working backward from NVIDIA's own guidance and historical beat patterns.
            </p>
            <DataRow label="Q4 Revenue Guidance" value="$65B ±2%" subtext="Range: $63.7B - $66.3B" />
            <DataRow
              label="Q3 Actual vs Guidance"
              value="Beat by $2B+"
              subtext="$57B actual vs ~$54.9B expected"
              highlight={COLORS.bull}
            />
            <DataRow
              label="Last 12 Quarters"
              value="12 consecutive beats"
              subtext="Avg beat magnitude declining (better guidance)"
            />
            <DataRow
              label="Q3 Data Center Revenue"
              value="$51.2B (89.8% of total)"
              subtext="+66% YoY. Networking >2x"
              highlight={COLORS.accent}
            />
            <DataRow
              label="Q3 Inventory"
              value="$19.8B (+32% QoQ)"
              subtext="⚠️ Watch this — could be build or bloat"
              highlight={COLORS.neutral}
            />
            <DataRow
              label="Q3 A/R"
              value="$33.4B (+$5.7B QoQ)"
              subtext="⚠️ 53 DSO, up from 46 DSO in Q2"
              highlight={COLORS.neutral}
            />
            <DataRow
              label="Blackwell Pipeline"
              value="$350B remaining through CY2026"
              subtext="Of $500B total Blackwell+Rubin visibility"
              highlight={COLORS.bull}
            />
            <DataRow
              label="China Data Center Rev"
              value="Guided at $0"
              subtext="Any positive = upside surprise"
              highlight={COLORS.neutral}
            />
            <div
              style={{
                marginTop: 12,
                padding: 10,
                background: `${COLORS.accent}15`,
                borderRadius: 6,
                fontSize: 12,
                color: COLORS.accent,
                lineHeight: 1.5,
                borderLeft: `3px solid ${COLORS.accent}`,
              }}
            >
              <strong>OUR MATH:</strong> Guidance midpoint ($65B) + typical $2B beat = $67B. At 75% gross margin and ~58% operating margin, EPS lands ~$1.50-$1.58. The inventory and A/R buildup in Q3 is the one yellow flag — but in context of Blackwell ramp and 53-day DSO (still reasonable for the scale), it's likely production buildup, not demand weakness.
            </div>
          </SectionCard>
        </div>
      )}

      {activeTab === "supply" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <SectionCard title="Supply Chain Evidence Map" icon="🔗">
            <p style={{ fontSize: 12, color: COLORS.textMuted, margin: "0 0 12px 0", lineHeight: 1.5 }}>
              Triangulating NVIDIA demand through independent supply chain data points.
            </p>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, marginBottom: 8 }}>
                FABRICATION (TSMC)
              </div>
              <SignalBar label="Advanced node utilization" value={10} color={COLORS.bull} />
              <SignalBar label="HPC revenue acceleration" value={9} color={COLORS.bull} />
              <SignalBar label="CoWoS packaging demand" value={9} color={COLORS.bull} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, marginBottom: 8 }}>
                MEMORY (SK Hynix / Micron)
              </div>
              <SignalBar label="HBM shipment volume" value={10} color={COLORS.bull} />
              <SignalBar label="HBM pricing power" value={9} color={COLORS.bull} />
              <SignalBar label="Customer inventory levels" value={9} color={COLORS.bull} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, marginBottom: 8 }}>
                ASSEMBLY & SYSTEMS
              </div>
              <SignalBar label="Foxconn rack shipment projections" value={8} color={COLORS.bull} />
              <SignalBar label="GB300 transition from GB200" value={8} color={COLORS.bull} />
              <SignalBar label="Liquid cooling demand (Vertiv)" value={8} color={COLORS.bull} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.neutral, marginBottom: 8 }}>
                RISK SIGNALS
              </div>
              <SignalBar label="A/R growth outpacing revenue" value={6} max={10} color={COLORS.neutral} />
              <SignalBar label="DSO rising (53 days, up from 46)" value={5} max={10} color={COLORS.neutral} />
              <SignalBar label="China export uncertainty" value={4} max={10} color={COLORS.bear} />
            </div>
          </SectionCard>

          <div>
            <SectionCard title="Blackwell Ramp Timeline" icon="⚡">
              <div style={{ fontSize: 12, lineHeight: 1.8, color: COLORS.textDim }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: COLORS.bull }}>●</span>
                  <span><strong style={{ color: COLORS.text }}>Q3 FY26 (Aug-Oct):</strong> GB200 in full volume. GB300 "crossed over" to 2/3 of Blackwell rev</span>
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: COLORS.bull }}>●</span>
                  <span><strong style={{ color: COLORS.text }}>Q4 FY26 (Nov-Jan):</strong> GB300 dominant. 60K rack target for CY2026. Full NVL72 production</span>
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: COLORS.accent }}>●</span>
                  <span><strong style={{ color: COLORS.text }}>Q1 FY27 (Feb-Apr):</strong> Rubin reveal at GTC March. Blackwell Ultra at peak. HBM4 ramping</span>
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: COLORS.accent }}>●</span>
                  <span><strong style={{ color: COLORS.text }}>H2 CY2026:</strong> Rubin (R200) shipping. JP Morgan: 5.7M Rubin GPUs projected for 2026</span>
                </div>
              </div>
              <div
                style={{
                  marginTop: 12,
                  padding: 10,
                  background: `${COLORS.accent}15`,
                  borderRadius: 6,
                  fontSize: 12,
                  color: COLORS.accent,
                  lineHeight: 1.5,
                  borderLeft: `3px solid ${COLORS.accent}`,
                }}
              >
                <strong>KEY INSIGHT:</strong> Q4 is the sweet spot — GB300 is in full swing, demand is established, and there's no transition gap yet. The Blackwell-to-Rubin handoff doesn't create a revenue air pocket until H2 2026 at earliest.
              </div>
            </SectionCard>

            <SectionCard title="Independent Revenue Build" icon="🧮" accent={COLORS.neutral}>
              <p style={{ fontSize: 12, color: COLORS.textMuted, margin: "0 0 12px 0" }}>
                Our bottom-up estimate vs. consensus
              </p>
              <DataRow
                label="Data Center (our est.)"
                value="$59-61B"
                subtext="Q3 was $51.2B. +15-19% QoQ"
                highlight={COLORS.bull}
              />
              <DataRow label="Gaming" value="~$4.0-4.3B" subtext="Stable. RTX 50 series launched" />
              <DataRow label="Auto / Pro Viz / OEM" value="~$2.5-3.0B" subtext="Steady contributors" />
              <DataRow
                label="TOTAL REVENUE (Our Est.)"
                value="$66.5-68.0B"
                subtext="vs consensus $65-66B"
                highlight={COLORS.bull}
              />
              <DataRow
                label="Gross Margin (Our Est.)"
                value="74.5-75.5%"
                subtext="GB300 full-rack carries higher margins"
                highlight={COLORS.bull}
              />
              <DataRow
                label="EPS (Our Est.)"
                value="$1.50-1.58"
                subtext="vs consensus ~$1.46-1.53"
                highlight={COLORS.bull}
              />
            </SectionCard>
          </div>
        </div>
      )}

      {activeTab === "verdict" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <SectionCard title="Confidence Assessment" icon="🎯">
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.bull, marginBottom: 12 }}>
                Q4 EARNINGS BEAT
              </div>
              <SignalBar label="Revenue beat probability" value={9} color={COLORS.bull} />
              <SignalBar label="EPS beat probability" value={9} color={COLORS.bull} />
              <SignalBar label="Gross margin beat probability" value={8} color={COLORS.bull} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.neutral, marginBottom: 12 }}>
                FORWARD GUIDANCE (THE REAL EVENT)
              </div>
              <SignalBar label="Q1 FY27 guidance beat probability" value={7} color={COLORS.neutral} />
              <SignalBar label="Full-year commentary strength" value={7} color={COLORS.neutral} />
              <SignalBar label="China revenue upside surprise" value={3} color={COLORS.bear} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.textDim, marginBottom: 12 }}>
                STOCK PRICE REACTION
              </div>
              <SignalBar label="Probability of positive reaction" value={6} color={COLORS.neutral} />
              <SignalBar label="Magnitude if positive" value={5} color={COLORS.neutral} />
              <SignalBar label="Risk of sell-the-news" value={5} color={COLORS.bear} />
            </div>
          </SectionCard>

          <div>
            <SectionCard title="The Independent Verdict" icon="⚖️" accent={COLORS.bull}>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.textDim }}>
                <p style={{ marginTop: 0 }}>
                  <strong style={{ color: COLORS.bull }}>Revenue & EPS will beat consensus.</strong> The supply chain evidence is overwhelming and unambiguous:
                </p>
                <p>
                  <strong style={{ color: COLORS.text }}>1. TSMC confirms maximum throughput.</strong> Advanced nodes at 77%, HPC at 55% of rev, AI accelerator CAGR in the 50s%. Jan 2026 revenue shows NO deceleration — +36.8% YoY.
                </p>
                <p>
                  <strong style={{ color: COLORS.text }}>2. SK Hynix confirms insatiable HBM demand.</strong> ALL-TIME records across every metric. HBM revenue doubled. Customer inventory declining. They can't fill all orders. If memory suppliers are capacity-constrained, NVIDIA is shipping everything they can make.
                </p>
                <p>
                  <strong style={{ color: COLORS.text }}>3. Hyperscaler capex is accelerating, not moderating.</strong> The 2026 guidance of $650-700B combined is +60-70% above 2025 actuals. Wall Street consistently underestimates this spend (expected +19%, actual was +64% in 2025). Every major buyer raised guidance.
                </p>
                <p>
                  <strong style={{ color: COLORS.text }}>4. NVIDIA's own math works.</strong> Guidance midpoint + historical beat pattern = $66.5-68B. Blackwell GB300 at full ramp with higher ASPs and full-rack solutions.
                </p>
              </div>
            </SectionCard>

            <SectionCard title="Risk Factors (What Could Go Wrong)" icon="⚠️" accent={COLORS.bear}>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.textDim }}>
                <p style={{ marginTop: 0 }}>
                  <strong style={{ color: COLORS.bear }}>The beat is NOT the risk. Guidance is.</strong>
                </p>
                <p>
                  <strong style={{ color: COLORS.neutral }}>1. Inventory quality.</strong> $19.8B in Q3 inventory (+32% QoQ). If Q4 shows further buildup despite strong revenue, it suggests production ahead of delivery — fine — or channel stuffing — not fine.
                </p>
                <p>
                  <strong style={{ color: COLORS.neutral }}>2. Working capital strain.</strong> A/R jumped $5.7B QoQ to $33.4B while DSO rose from 46 to 53 days. Concentrated customer base (top 4-5 = 40-45% of DC rev). If any hyperscaler delays payment timing, it amplifies this risk.
                </p>
                <p>
                  <strong style={{ color: COLORS.neutral }}>3. Circular AI economy risk.</strong> VC-funded startups buying cloud, cloud buying GPUs, GPU revenue flowing back to AI ecosystem. Real demand or capital recycling? Watch non-hyperscaler customer commentary.
                </p>
                <p>
                  <strong style={{ color: COLORS.bear }}>4. Stock is priced for perfection.</strong> IV at 5.7%, implied move ±6.2%. Sideways for 3 months. A beat is expected. Guidance needs to WOW (&gt;$75B for Q1 FY27) or the stock may not move.
                </p>
              </div>
            </SectionCard>
          </div>

          {/* Bottom Summary */}
          <div style={{ gridColumn: "1 / -1" }}>
            <SectionCard title="Trading Implications" icon="💡" accent={COLORS.accent}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                  fontSize: 13,
                  color: COLORS.textDim,
                  lineHeight: 1.6,
                }}
              >
                <div
                  style={{
                    padding: 12,
                    background: `${COLORS.bull}10`,
                    borderRadius: 8,
                    border: `1px solid ${COLORS.bull}25`,
                  }}
                >
                  <div style={{ fontWeight: 700, color: COLORS.bull, marginBottom: 6 }}>BULL SCENARIO (55%)</div>
                  Rev $67B+, guidance $73-75B+ for Q1. Gross margins at 75%+. Commentary on Rubin demand and Blackwell Ultra momentum. Any positive China signal. Stock +5-8%.
                </div>
                <div
                  style={{
                    padding: 12,
                    background: `${COLORS.neutral}10`,
                    borderRadius: 8,
                    border: `1px solid ${COLORS.neutral}25`,
                  }}
                >
                  <div style={{ fontWeight: 700, color: COLORS.neutral, marginBottom: 6 }}>BASE SCENARIO (30%)</div>
                  Rev $66B, guidance ~$71B (in-line). Margins meet expectations. No China upside. Solid but not spectacular. Stock ±2% — sell-the-news risk.
                </div>
                <div
                  style={{
                    padding: 12,
                    background: `${COLORS.bear}10`,
                    borderRadius: 8,
                    border: `1px solid ${COLORS.bear}25`,
                  }}
                >
                  <div style={{ fontWeight: 700, color: COLORS.bear, marginBottom: 6 }}>BEAR SCENARIO (15%)</div>
                  Guidance below $70B. Margin compression from Blackwell ramp costs. Inventory continues to surge. Cash flow quality concerns. Stock -8-12%.
                </div>
              </div>
              <div
                style={{
                  marginTop: 16,
                  padding: 12,
                  background: COLORS.highlight,
                  borderRadius: 8,
                  fontSize: 12,
                  color: COLORS.textDim,
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: COLORS.accent }}>⚡ DATA SOURCES USED:</strong> TSMC monthly revenue reports & Q4'25 earnings transcript, SK Hynix Q4'25 earnings & HBM shipment data, Amazon/Alphabet/Microsoft/Meta Q4 capex actuals & 2026 guidance, NVIDIA Q3 FY26 10-Q, JP Morgan GPU shipment projections, Foxconn rack shipment estimates, Polymarket prediction data, options implied volatility. <strong style={{ color: COLORS.text }}>No analyst consensus was used as a primary input.</strong>
              </div>
            </SectionCard>
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", padding: "16px 0", fontSize: 10, color: COLORS.textMuted }}>
        BigPic Solutions — Project Meridian Framework | Not financial advice | Data as of Feb 19, 2026
      </div>
    </div>
  );
}
