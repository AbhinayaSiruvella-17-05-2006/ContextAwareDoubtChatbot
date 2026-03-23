import React, { useState, useEffect } from "react";

function Home({ setPage }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background: #0e0e0e;
        }

        .lp-root {
          min-height: 100vh;
          background: #0e0e0e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Ambient blobs */
        .lp-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          pointer-events: none;
        }
        .lp-blob-1 {
          width: 420px; height: 420px;
          background: #c8a96e;
          top: -80px; left: -100px;
          animation: blobDrift 14s ease-in-out infinite alternate;
        }
        .lp-blob-2 {
          width: 320px; height: 320px;
          background: #5a8fa3;
          bottom: -60px; right: -60px;
          animation: blobDrift 18s ease-in-out infinite alternate-reverse;
        }
        @keyframes blobDrift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, 20px) scale(1.07); }
        }

        /* Subtle grid overlay */
        .lp-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* Card */
        .lp-card {
          position: relative;
          z-index: 1;
          background: rgba(22, 22, 22, 0.85);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 56px 52px 52px;
          width: 420px;
          backdrop-filter: blur(18px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04);
          opacity: ${mounted ? 1 : 0};
          transform: ${mounted ? 'translateY(0)' : 'translateY(24px)'};
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        /* Badge */
        .lp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(200, 169, 110, 0.12);
          border: 1px solid rgba(200, 169, 110, 0.25);
          color: #c8a96e;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 24px;
        }
        .lp-badge-dot {
          width: 6px; height: 6px;
          background: #c8a96e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Title */
        .lp-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: #f5f0e8;
          line-height: 1.15;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .lp-title span {
          color: #c8a96e;
        }

        .lp-subtitle {
          font-size: 14px;
          color: rgba(255,255,255,0.38);
          font-weight: 300;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        /* Divider */
        .lp-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: 32px;
        }

        /* Buttons */
        .lp-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lp-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          text-align: left;
          color: #e8e3da;
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          font-weight: 500;
        }
        .lp-btn:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(200, 169, 110, 0.3);
          transform: translateY(-1px);
        }
        .lp-btn:active {
          transform: translateY(0);
        }

        .lp-btn-primary {
          background: linear-gradient(135deg, #c8a96e 0%, #a8843e 100%);
          border-color: transparent;
          color: #0e0e0e;
        }
        .lp-btn-primary:hover {
          background: linear-gradient(135deg, #d4b87a 0%, #b8944e 100%);
          border-color: transparent;
        }

        .lp-btn-disabled {
          opacity: 0.35;
          cursor: not-allowed;
          pointer-events: none;
        }

        .lp-btn-icon {
          width: 34px; height: 34px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 16px;
        }
        .lp-btn-primary .lp-btn-icon {
          background: rgba(0,0,0,0.15);
        }
        .lp-btn:not(.lp-btn-primary):not(.lp-btn-disabled) .lp-btn-icon {
          background: rgba(200, 169, 110, 0.1);
        }
        .lp-btn-disabled .lp-btn-icon {
          background: rgba(255,255,255,0.05);
        }

        .lp-btn-text {}
        .lp-btn-label {
          display: block;
          font-weight: 500;
        }
        .lp-btn-desc {
          display: block;
          font-size: 11.5px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          margin-top: 2px;
        }
        .lp-btn-primary .lp-btn-desc {
          color: rgba(0,0,0,0.45);
        }

        .lp-btn-arrow {
          margin-left: auto;
          font-size: 18px;
          opacity: 0.4;
          transition: opacity 0.2s, transform 0.2s;
        }
        .lp-btn:hover .lp-btn-arrow {
          opacity: 0.8;
          transform: translateX(3px);
        }

        /* Footer */
        .lp-footer {
          margin-top: 32px;
          text-align: center;
          font-size: 11px;
          color: rgba(255,255,255,0.18);
          letter-spacing: 0.04em;
        }
      `}</style>

      <div className="lp-root">
        <div className="lp-blob lp-blob-1" />
        <div className="lp-blob lp-blob-2" />
        <div className="lp-grid" />

        <div className="lp-card">
          <div className="lp-badge">
            <span className="lp-badge-dot" />
            Learning Platform
          </div>

          <h1 className="lp-title">
            Grow your <span>knowledge</span>
          </h1>
          <p className="lp-subtitle">
            Access curated materials, share your expertise, and track your learning journey.
          </p>

          <div className="lp-divider" />

          <nav className="lp-nav">
            <button className="lp-btn lp-btn-primary" onClick={() => setPage("online")}>
              <span className="lp-btn-icon">📚</span>
              <span className="lp-btn-text">
                <span className="lp-btn-label">View Online Materials</span>
                <span className="lp-btn-desc">Browse the full resource library</span>
              </span>
              <span className="lp-btn-arrow">›</span>
            </button>

            <button className="lp-btn" onClick={() => setPage("post")}>
              <span className="lp-btn-icon">✦</span>
              <span className="lp-btn-text">
                <span className="lp-btn-label">Post Materials</span>
                <span className="lp-btn-desc">Share resources with the community</span>
              </span>
              <span className="lp-btn-arrow">›</span>
            </button>

            <button className="lp-btn lp-btn-disabled" disabled>
              <span className="lp-btn-icon">🔒</span>
              <span className="lp-btn-text">
                <span className="lp-btn-label">View Your Materials</span>
                <span className="lp-btn-desc">Coming soon — sign in to unlock</span>
              </span>
            </button>
          </nav>

          <p className="lp-footer">© 2026 Learning Platform · All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default Home;