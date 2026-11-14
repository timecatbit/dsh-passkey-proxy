window.__ModuleLoader__.load({ id: '@smanx/dsh-proxy', factory: (require) => { var module = { exports: {} }; var exports = module.exports;
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.ts
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);

// src/client/SettingsSection.tsx
var import_react = require("react");

// src/contract.ts
var RPC_CHANNEL = "/dsh-proxy";
var RPC_STATUS_ENDPOINT = "status";
var RPC_UPDATE_ENDPOINT = "update";
var RPC_START_ENDPOINT = "start";
var RPC_STOP_ENDPOINT = "stop";

// src/client/SettingsSection.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function StatusRow(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dsh_lanproxy_rowLabel", children: props.label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dsh_lanproxy_rowValue", children: props.value })
  ] });
}
function PortStatus(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "dsh_lanproxy_portStatus", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "dsh_lanproxy_portAddr", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: props.ok ? "dsh_lanproxy_dot dsh_lanproxy_dotOn" : "dsh_lanproxy_dot dsh_lanproxy_dotOff" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dsh_lanproxy_portValue", children: props.port })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: props.ok ? "dsh_lanproxy_statusText dsh_lanproxy_statusTextOn" : "dsh_lanproxy_statusText dsh_lanproxy_statusTextOff", children: props.ok ? props.okText : props.failText })
  ] });
}
function EyeIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "3" })
  ] });
}
function EyeOffIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "2", x2: "22", y1: "2", y2: "22" })
  ] });
}
function SettingsSection({ rpc, t }) {
  const [phase, setPhase] = (0, import_react.useState)("loading");
  const phaseRef = (0, import_react.useRef)("loading");
  const [status, setStatus] = (0, import_react.useState)(null);
  const [statusError, setStatusError] = (0, import_react.useState)(null);
  const [saving, setSaving] = (0, import_react.useState)(false);
  const [controlling, setControlling] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  const [message, setMessage] = (0, import_react.useState)(null);
  const [controlError, setControlError] = (0, import_react.useState)(null);
  const [controlMessage, setControlMessage] = (0, import_react.useState)(null);
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const [listenPort, setListenPort] = (0, import_react.useState)("");
  const [lanAccessEnabled, setLanAccessEnabled] = (0, import_react.useState)(false);
  const [username, setUsername] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [skipLaunchToken, setSkipLaunchToken] = (0, import_react.useState)(false);
  const [passkeyOrigin, setPasskeyOrigin] = (0, import_react.useState)("");
  const [tlsProxyIPs, setTlsProxyIPs] = (0, import_react.useState)("");
  const [passwordLoginEnabled, setPasswordLoginEnabled] = (0, import_react.useState)(true);
  const [passkeyLoginEnabled, setPasskeyLoginEnabled] = (0, import_react.useState)(false);
  const formSeededRef = (0, import_react.useRef)(false);
  const applyPhase = (0, import_react.useCallback)((next) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);
  const applyStatusToForm = (0, import_react.useCallback)((next) => {
    setListenPort(String(next.listenPort));
    setLanAccessEnabled(next.listenHost === "0.0.0.0");
    setUsername(next.username);
    setPassword("");
    setSkipLaunchToken(next.skipLaunchToken);
    setPasskeyOrigin(next.passkeyOrigin ?? "");
    setTlsProxyIPs(next.tlsProxyIPs ?? "");
    setPasswordLoginEnabled(next.passwordLoginEnabled ?? true);
    setPasskeyLoginEnabled(next.passkeyLoginEnabled ?? Boolean(next.passkeyOrigin));
  }, []);
  const loadStatus = (0, import_react.useCallback)(async () => {
    applyPhase("loading");
    setStatusError(null);
    try {
      const result = await rpc.call(RPC_CHANNEL, RPC_STATUS_ENDPOINT, {});
      if (result.ok) {
        const next = result.value;
        setStatus(next);
        applyPhase("ok");
        if (!formSeededRef.current) {
          applyStatusToForm(next);
          formSeededRef.current = true;
        }
      } else {
        setStatusError(result.error.message);
        applyPhase("error");
      }
    } catch (err) {
      console.error("[dsh-proxy] status RPC failed:", err);
      setStatusError(err instanceof Error ? err.message : String(err));
      applyPhase("error");
    }
  }, [rpc, applyPhase, applyStatusToForm]);
  (0, import_react.useEffect)(() => {
    void loadStatus();
    const timer = window.setTimeout(() => {
      if (phaseRef.current === "error") void loadStatus();
    }, 2e3);
    return () => window.clearTimeout(timer);
  }, [loadStatus]);
  const runControl = (0, import_react.useCallback)(async (action) => {
    setControlling(true);
    setControlError(null);
    setControlMessage(null);
    try {
      const result = await rpc.call(
        RPC_CHANNEL,
        action === "start" ? RPC_START_ENDPOINT : RPC_STOP_ENDPOINT,
        {}
      );
      if (result.ok) {
        const next = result.value;
        setStatus(next);
        if (action === "start" && !next.proxyListening) {
          setControlError(t("control.startHintPort"));
        } else {
          setControlMessage(action === "start" ? t("control.started") : t("control.stopped"));
        }
      } else {
        setControlError(result.error.message);
      }
    } catch (err) {
      console.error(`[dsh-proxy] ${action} RPC failed:`, err);
      setControlError(`${t("control.failed")}\uFF1A${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setControlling(false);
    }
  }, [rpc, t]);
  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      const port = Number(listenPort.trim());
      if (!Number.isInteger(port) || port < 1 || port > 65535) {
        setError(t("form.invalidPort"));
        return;
      }
      if (status !== null && port === status.upstreamPort) {
        setError(t("form.portConflict"));
        return;
      }
      const payload = {
        listenPort: port,
        username: username.trim(),
        skipLaunchToken
      };
      if (password) payload.password = password;
      if (status?.desktopProfile && lanAccessEnabled !== (status.listenHost === "0.0.0.0")) payload.lanAccessEnabled = lanAccessEnabled;
      if (passwordLoginEnabled !== (status?.passwordLoginEnabled ?? true)) payload.passwordLoginEnabled = passwordLoginEnabled;
      if (passkeyLoginEnabled !== (status?.passkeyLoginEnabled ?? Boolean(status?.passkeyOrigin))) payload.passkeyLoginEnabled = passkeyLoginEnabled;
      if (!passwordLoginEnabled && !passkeyLoginEnabled) {
        setError(t("form.atLeastOne"));
        return;
      }
      if (!status?.passkeySettingsManaged && (passkeyOrigin.trim() !== (status?.passkeyOrigin ?? "") || tlsProxyIPs.trim() !== (status?.tlsProxyIPs ?? ""))) {
        payload.passkeyOrigin = passkeyOrigin.trim();
        payload.tlsProxyIPs = tlsProxyIPs.trim();
      }
      const result = await rpc.call(RPC_CHANNEL, RPC_UPDATE_ENDPOINT, payload);
      if (result.ok) {
        const value = result.value;
        setStatus(value.status);
        applyPhase("ok");
        const noticeText = {
          "saved": t("form.updatedSaved"),
          "saved-restarted": t("form.updated"),
          "saved-restart-pending": t("form.passkeyReconnecting"),
          "saved-restart-failed": `${t("form.updatedListenFailed")}\uFF1A${value.message}`,
          "credentials-partial-saved": t("form.updatedSavedPartial"),
          "credentials-partial-restarted": t("form.updatedPartial")
        };
        setMessage(noticeText[value.notice]);
        applyStatusToForm(value.status);
      } else {
        setError(result.error.message);
      }
    } catch (err) {
      console.error("[dsh-proxy] update RPC failed:", err);
      setError(`${t("form.failed")}\uFF1A${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSaving(false);
    }
  };
  const authBadge = status === null || status.authEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dsh_lanproxy_badge dsh_lanproxy_badgeOn", children: t("status.authOn") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dsh_lanproxy_badge dsh_lanproxy_badgeOff", children: t("status.authOff") });
  const statusCard = phase === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_hint", children: t("status.loading") }) : phase === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_statusError", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_error", children: t("status.unreachable") }),
    statusError !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_hint", children: statusError }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsh_lanproxy_button", onClick: () => {
      void loadStatus();
    }, children: t("status.retry") })
  ] }) : status !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      StatusRow,
      {
        label: t("status.proxyPort"),
        value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortStatus, { port: `${status.listenHost}:${status.listenPort}`, ok: status.proxyListening, okText: t("status.proxyRunning"), failText: t("status.proxyStopped") })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      StatusRow,
      {
        label: t("status.targetPort"),
        value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortStatus, { port: `${status.upstreamHost}:${status.upstreamPort}`, ok: status.upstreamReachable, okText: t("status.targetReachable"), failText: t("status.targetUnreachable") })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, { label: t("status.username"), value: status.username }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, { label: t("status.auth"), value: authBadge }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, { label: t("status.skipToken"), value: status.skipLaunchToken ? t("status.skipTokenOn") : t("status.skipTokenOff") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_hint", children: status.persisted ? t("status.persistedOn") : t("status.persistedOff") })
  ] }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "dsh_lanproxy_section", "aria-labelledby": "dsh-lanproxy-settings-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { id: "dsh-lanproxy-settings-title", className: "dsh_lanproxy_title", children: t("nav") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_subtitle", children: t("form.subtitle") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_cardHeader", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dsh_lanproxy_cardTitle", children: t("status.title") }),
        phase === "ok" && status !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_controls", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              className: "dsh_lanproxy_button",
              disabled: controlling || status.proxyListening,
              onClick: () => {
                void runControl("start");
              },
              children: t("control.start")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              className: "dsh_lanproxy_button dsh_lanproxy_buttonStop",
              disabled: controlling || !status.proxyListening,
              onClick: () => {
                void runControl("stop");
              },
              children: t("control.stop")
            }
          )
        ] }) : null
      ] }),
      statusCard,
      controlMessage !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_message", children: controlMessage }) : null,
      controlError !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_error", children: controlError }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", { className: "dsh_lanproxy_card dsh_lanproxy_form", onSubmit: (event) => {
      void submit(event);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dsh_lanproxy_cardTitle", children: t("form.title") }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { className: "dsh_lanproxy_group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: t("form.accessSection") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "dsh_lanproxy_fieldLabel", htmlFor: "dsh-lanproxy-listen-port", children: t("form.listenPort") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              id: "dsh-lanproxy-listen-port",
              className: "dsh_lanproxy_input",
              type: "number",
              min: 1,
              max: 65535,
              inputMode: "numeric",
              placeholder: t("form.listenPortHint"),
              value: listenPort,
              onChange: (event) => {
                setListenPort(event.target.value);
              }
            }
          )
        ] }),
        status?.desktopProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dsh_lanproxy_checkRow", htmlFor: "dsh-lanproxy-lan-access", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                id: "dsh-lanproxy-lan-access",
                className: "dsh_lanproxy_checkbox",
                type: "checkbox",
                checked: lanAccessEnabled,
                onChange: (event) => setLanAccessEnabled(event.target.checked)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("form.lanAccess") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.lanAccessHint") })
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.lanHint") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "dsh_lanproxy_fieldLabel", htmlFor: "dsh-passkey-origin", children: t("form.passkeyOrigin") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              id: "dsh-passkey-origin",
              className: "dsh_lanproxy_input",
              type: "url",
              inputMode: "url",
              autoCapitalize: "none",
              spellCheck: false,
              placeholder: "https://dsh.example.com",
              readOnly: status?.passkeySettingsManaged,
              value: passkeyOrigin,
              onChange: (event) => setPasskeyOrigin(event.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.passkeyHint") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { className: "dsh_lanproxy_trust", open: status?.passkeySettingsManaged || Boolean(tlsProxyIPs) || void 0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: t("form.tlsProxyIPs") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dsh_lanproxy_field", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              id: "dsh-passkey-proxies",
              className: "dsh_lanproxy_input",
              "aria-label": t("form.tlsProxyIPs"),
              autoCapitalize: "none",
              spellCheck: false,
              placeholder: "192.0.2.10",
              readOnly: status?.passkeySettingsManaged,
              value: tlsProxyIPs,
              onChange: (event) => setTlsProxyIPs(event.target.value)
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.trustHint") }),
          status?.passkeySettingsManaged ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.passkeyManaged") }) : passkeyOrigin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.observeHint") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsh_lanproxy_button", onClick: () => void loadStatus(), children: t("form.checkPeer") }),
            !!status?.observedProxyIPs?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "dsh_lanproxy_fieldHint", children: [
              t("form.observedPeers"),
              ": ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: status.observedProxyIPs.join(", ") })
            ] })
          ] }) : null
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { className: "dsh_lanproxy_group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: t("form.loginSection") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.atLeastOne") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dsh_lanproxy_checkRow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              id: "dsh-password-enabled",
              className: "dsh_lanproxy_checkbox",
              type: "checkbox",
              checked: passwordLoginEnabled,
              onChange: (event) => setPasswordLoginEnabled(event.target.checked)
            }
          ),
          t("form.passwordLogin")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dsh_lanproxy_checkRow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              id: "dsh-passkey-enabled",
              className: "dsh_lanproxy_checkbox",
              type: "checkbox",
              checked: passkeyLoginEnabled,
              onChange: (event) => setPasskeyLoginEnabled(event.target.checked)
            }
          ),
          t("form.passkeyTitle")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.policyHint") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "dsh_lanproxy_fieldLabel", htmlFor: "dsh-lanproxy-username", children: t("form.username") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              id: "dsh-lanproxy-username",
              className: "dsh_lanproxy_input",
              type: "text",
              autoComplete: "username",
              placeholder: t("form.usernameHint"),
              value: username,
              onChange: (event) => {
                setUsername(event.target.value);
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "dsh_lanproxy_fieldLabel", htmlFor: "dsh-lanproxy-password", children: t("form.password") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_passwordWrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                id: "dsh-lanproxy-password",
                className: "dsh_lanproxy_input dsh_lanproxy_passwordInput",
                type: showPassword ? "text" : "password",
                autoComplete: "new-password",
                placeholder: status?.passwordConfigured ? t("form.passwordHint") : t("form.passwordNew"),
                value: password,
                onChange: (event) => {
                  setPassword(event.target.value);
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                type: "button",
                className: "dsh_lanproxy_eye",
                "aria-label": showPassword ? t("form.hidePassword") : t("form.showPassword"),
                title: showPassword ? t("form.hidePassword") : t("form.showPassword"),
                onClick: () => {
                  setShowPassword((visible) => !visible);
                },
                children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOffIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeIcon, {})
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { className: "dsh_lanproxy_group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: t("status.managePasskeys") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.manageHint") }),
        status?.passkeyLoginEnabled && status.proxyListening && typeof location !== "undefined" && (location.origin === status.passkeyOrigin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "/_dsh_login/keys?from=settings", referrerPolicy: "same-origin", children: t("status.managePasskeys") }) : status.passkeyOrigin?.startsWith("https://") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: status.passkeyOrigin + "/_dsh_login/keys", children: t("form.openHTTPS") }) : null),
        status?.registeredPasskeys !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "dsh_lanproxy_fieldHint", children: [
          t("form.registeredKeys"),
          ": ",
          status.registeredPasskeys,
          " / 5"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { className: "dsh_lanproxy_trust", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: t("form.advanced") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_checkRow", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                id: "dsh-lanproxy-skip-token",
                className: "dsh_lanproxy_checkbox",
                type: "checkbox",
                checked: skipLaunchToken,
                onChange: (event) => {
                  setSkipLaunchToken(event.target.checked);
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "dsh_lanproxy_fieldLabel", htmlFor: "dsh-lanproxy-skip-token", children: t("form.skipToken") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_fieldHint", children: t("form.skipTokenHint") })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh_lanproxy_actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "submit", className: "dsh_lanproxy_button", disabled: saving, children: saving ? t("form.saving") : t("form.save") }),
        message !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_message", children: message }) : null,
        error !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "dsh_lanproxy_error", children: error }) : null
      ] })
    ] })
  ] });
}

// src/client/locales.ts
var NS = "dsh-proxy";
var zh = {
  "nav": "Passkey Proxy",
  "status.title": "\u8FD0\u884C\u72B6\u6001",
  "status.proxyPort": "\u4EE3\u7406\u670D\u52A1\u7AEF\u53E3",
  "status.proxyRunning": "\u8FD0\u884C\u4E2D",
  "status.proxyStopped": "\u672A\u8FD0\u884C",
  "status.targetPort": "\u9ED8\u8BA4\u670D\u52A1\u7AEF\u53E3",
  "status.targetReachable": "\u53EF\u8BBF\u95EE",
  "status.targetUnreachable": "\u4E0D\u53EF\u8BBF\u95EE",
  "status.username": "\u5F53\u524D\u7528\u6237\u540D",
  "status.auth": "\u8BBF\u95EE\u4FDD\u62A4",
  "status.managePasskeys": "\u7BA1\u7406 Passkey",
  "status.authOn": "\u5DF2\u542F\u7528",
  "status.authOff": "\u5F85\u8BBE\u7F6E\uFF08\u4EE3\u7406\u62D2\u7EDD\u672A\u767B\u5F55\u8BF7\u6C42\uFF09",
  "status.persistedOn": "\u5B58\u5728\u5DF2\u4FDD\u5B58\u7684\u8FD0\u884C\u914D\u7F6E\uFF08\u4F18\u5148\u4E8E cordis \u914D\u7F6E\uFF09",
  "status.persistedOff": "\u4F7F\u7528 cordis \u914D\u7F6E",
  "status.skipToken": "\u514D token \u767B\u5F55",
  "status.skipTokenOn": "\u5DF2\u542F\u7528\uFF08\u9996\u6B21\u8BBF\u95EE\u81EA\u52A8\u767B\u5F55\uFF09",
  "status.skipTokenOff": "\u672A\u542F\u7528\uFF08\u9700\u624B\u52A8\u5E26 token \u8BBF\u95EE\u4E00\u6B21\uFF09",
  "status.loading": "\u52A0\u8F7D\u4E2D\u2026",
  "status.unreachable": "\u65E0\u6CD5\u8FDE\u63A5\u4EE3\u7406\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u63D2\u4EF6\u5DF2\u542F\u7528\uFF0C\u5E76\u91CD\u542F DSH \u540E\u91CD\u8BD5\u3002",
  "status.retry": "\u91CD\u8BD5",
  "control.start": "\u542F\u52A8",
  "control.stop": "\u505C\u6B62",
  "control.started": "\u4EE3\u7406\u670D\u52A1\u5DF2\u542F\u52A8",
  "control.stopped": "\u4EE3\u7406\u670D\u52A1\u5DF2\u505C\u6B62",
  "control.failed": "\u64CD\u4F5C\u5931\u8D25",
  "control.startHintPort": "\u4EE3\u7406\u670D\u52A1\u672A\u80FD\u542F\u52A8\uFF0C\u8BF7\u5C1D\u8BD5\u66F4\u6362\u4EE3\u7406\u670D\u52A1\u7AEF\u53E3\uFF08\u5F53\u524D\u7AEF\u53E3\u53EF\u80FD\u5DF2\u88AB\u5360\u7528\uFF09\u3002",
  "form.title": "\u4FEE\u6539\u8BBE\u7F6E",
  "form.subtitle": "\u4FDD\u5B58\u540E\u4EE3\u7406\u53EF\u80FD\u77ED\u6682\u91CD\u65B0\u8FDE\u63A5\u3002",
  "form.listenPort": "\u4EE3\u7406\u670D\u52A1\u7AEF\u53E3\uFF08\u76D1\u542C\u7AEF\u53E3\uFF09",
  "form.listenPortHint": "1\u201365535",
  "form.username": "\u7528\u6237\u540D",
  "form.usernameHint": "\u4EE3\u7406\u8D26\u53F7",
  "form.password": "\u4EE3\u7406\u5BC6\u7801",
  "form.passwordHint": "\u5DF2\u8BBE\u7F6E\uFF1B\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8",
  "form.passwordNew": "\u8BBE\u7F6E\u65B0\u5BC6\u7801",
  "form.skipToken": "\u8BA4\u8BC1\u540E\u81EA\u52A8\u8FDB\u5165 DSH",
  "form.accessSection": "1. \u8BBF\u95EE\u5165\u53E3",
  "form.lanAccess": "\u5141\u8BB8\u5C40\u57DF\u7F51\u8BBE\u5907\u8BBF\u95EE",
  "form.lanAccessHint": "\u9ED8\u8BA4\u4EC5\u6B64\u7535\u8111\u53EF\u8BBF\u95EE\u3002\u8981\u4ECE\u624B\u673A\u6216\u5176\u4ED6\u5C40\u57DF\u7F51\u8BBE\u5907\u6253\u5F00\uFF0C\u8BF7\u5148\u8BBE\u7F6E\u4EE3\u7406\u8D26\u53F7\u5BC6\u7801\uFF0C\u518D\u5F00\u542F\u5E76\u4FDD\u5B58\u3002",
  "form.loginSection": "2. \u767B\u5F55\u65B9\u5F0F",
  "form.lanHint": "\u5C40\u57DF\u7F51\u53EF\u4EE5\u7528 http://\u670D\u52A1\u5668IP:\u4EE3\u7406\u7AEF\u53E3 \u6253\u5F00\u7F51\u9875\u767B\u5F55\u9875\u3002\u82E5\u5F00\u542F\u5BC6\u7801\u767B\u5F55\uFF0C\u4EE3\u7406\u4F1A\u9A8C\u8BC1\u81EA\u5DF1\u7684\u8D26\u53F7\u5BC6\u7801\u540E\u518D\u8F6C\u53D1\u7ED9 DSH\u3002HTTP \u4E0D\u52A0\u5BC6\uFF0C\u8BF7\u53EA\u5728\u53EF\u4FE1\u5C40\u57DF\u7F51\u4F7F\u7528\u3002",
  "form.passwordLogin": "\u5141\u8BB8\u5BC6\u7801\u767B\u5F55",
  "form.atLeastOne": "\u81F3\u5C11\u4FDD\u7559\u4E00\u79CD\u767B\u5F55\u65B9\u5F0F\u3002",
  "form.policyHint": "Passkey \u53EA\u5728\u53D7\u4FE1\u4EFB\u7684 HTTPS \u5165\u53E3\u751F\u6548\u3002\u5173\u95ED\u5BC6\u7801\u767B\u5F55\u524D\uFF0C\u5148\u6DFB\u52A0\u5E76\u8BD5\u7528 Passkey\uFF1B\u5173\u6389\u540E\u5C40\u57DF\u7F51 HTTP \u4E5F\u4E0D\u80FD\u7528\u5BC6\u7801\u767B\u5F55\u3002\u539F\u5BC6\u7801\u53EA\u4FDD\u7559\u7528\u4E8E\u6DFB\u52A0\u6216\u79FB\u9664 Passkey\u3002",
  "form.manageHint": "\u5EFA\u8BAE\u5148\u6DFB\u52A0\u5E76\u6D4B\u8BD5\u4E00\u4E2A Passkey\uFF0C\u518D\u5173\u95ED\u5BC6\u7801\u767B\u5F55\u3002\u4EC5\u4F7F\u7528 Passkey \u65F6\u4E0D\u80FD\u79FB\u9664\u6700\u540E\u4E00\u4E2A\u53EF\u7528\u51ED\u636E\u3002",
  "form.registeredKeys": "\u5F53\u524D\u57DF\u540D\u5DF2\u6CE8\u518C",
  "form.openHTTPS": "\u5230 HTTPS \u5165\u53E3\u7BA1\u7406 Passkey",
  "form.advanced": "\u9AD8\u7EA7\uFF1ADSH \u542F\u52A8\u4EE4\u724C",
  "form.passkeyTitle": "Passkey \u767B\u5F55",
  "form.passkeyOrigin": "\u5BF9\u5916 HTTPS \u57DF\u540D",
  "form.tlsProxyIPs": "\u53CD\u4EE3\u6765\u6E90 IP\uFF08\u540C\u673A\u56DE\u73AF\u53EF\u7559\u7A7A\uFF09",
  "form.passkeyHint": "\u4E0D\u9700\u8981 HTTPS \u65F6\u53EF\u4EE5\u7559\u7A7A\u3002\u4F7F\u7528 HTTPS \u65F6\uFF0C\u53CD\u4EE3\u5230\u4EE3\u7406\u7AEF\u53E3\uFF0C\u4FDD\u7559\u539F\u59CB Host\uFF0C\u8BBE\u7F6E X-Forwarded-Proto: https\uFF0C\u5E76\u652F\u6301 WebSocket\u3002",
  "form.trustHint": "\u7559\u7A7A\u53EA\u4FE1\u4EFB\u672C\u673A\u56DE\u73AF\u5730\u5740\u3002\u53CD\u4EE3\u5728\u53E6\u4E00\u53F0\u673A\u5668\u6216\u4ECE\u5BB9\u5668\u5730\u5740\u8FDE\u63A5\u65F6\uFF0C\u586B\u5199 DSH \u5B9E\u9645\u6536\u5230\u7684\u6765\u6E90 IP\uFF1B\u591A\u4E2A\u5730\u5740\u7528\u82F1\u6587\u9017\u53F7\u5206\u9694\u3002",
  "form.observeHint": "\u5148\u4FDD\u5B58 HTTPS \u57DF\u540D\uFF0C\u518D\u4ECE\u53E6\u4E00\u6807\u7B7E\u9875\u6253\u5F00\u5B83\u4E00\u6B21\u3002\u56DE\u6765\u68C0\u67E5\u6765\u6E90\u3002\u68C0\u6D4B\u7ED3\u679C\u53EA\u4F9B\u6838\u5BF9\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u52A0\u5165\u4FE1\u4EFB\u5217\u8868\u3002",
  "form.checkPeer": "\u68C0\u67E5\u6700\u8FD1\u7684\u53CD\u4EE3\u6765\u6E90",
  "form.observedPeers": "\u6700\u8FD1\u770B\u5230\u7684\u6765\u6E90",
  "form.passkeyManaged": "\u8FD9\u4E24\u9879\u7531\u670D\u52A1\u5668\u73AF\u5883\u53D8\u91CF\u7BA1\u7406\uFF0C\u7F51\u9875\u4EC5\u663E\u793A\u5F53\u524D\u503C\u3002",
  "form.passkeyReconnecting": "\u5DF2\u4FDD\u5B58\uFF0C\u4EE3\u7406\u5373\u5C06\u91CD\u65B0\u8FDE\u63A5\u3002",
  "form.skipTokenHint": "\u4EE3\u7406\u9A8C\u8BC1\u5BC6\u7801\u6216 Passkey \u540E\uFF0C\u53EF\u4EE3\u66FF\u6D4F\u89C8\u5668\u5B8C\u6210 DSH \u81EA\u5DF1\u7684\u542F\u52A8\u4EE4\u724C\u6821\u9A8C\u3002\u6B64\u9009\u9879\u4E0D\u4F1A\u8DF3\u8FC7\u4EE3\u7406\u767B\u5F55\u3002",
  "form.showPassword": "\u663E\u793A\u5BC6\u7801",
  "form.hidePassword": "\u9690\u85CF\u5BC6\u7801",
  "form.save": "\u5E94\u7528",
  "form.saving": "\u5E94\u7528\u4E2D\u2026",
  "form.invalidPort": "\u7AEF\u53E3\u5FC5\u987B\u662F 1\u201365535 \u7684\u6574\u6570",
  "form.portConflict": "\u4EE3\u7406\u670D\u52A1\u7AEF\u53E3\u4E0D\u80FD\u4E0E\u9ED8\u8BA4\u670D\u52A1\u7AEF\u53E3\u76F8\u540C",
  "form.updated": "\u5DF2\u4FDD\u5B58\u5E76\u91CD\u542F\u8F6C\u53D1\u670D\u52A1",
  "form.updatedSaved": "\u5DF2\u4FDD\u5B58",
  "form.updatedPartial": "\u5DF2\u4FDD\u5B58\u5E76\u91CD\u542F\u8F6C\u53D1\u670D\u52A1\uFF08\u6CE8\u610F\uFF1A\u9700\u540C\u65F6\u8BBE\u7F6E\u7528\u6237\u540D\u548C\u5BC6\u7801\u624D\u4F1A\u542F\u7528\u5BC6\u7801\u767B\u5F55\uFF09",
  "form.updatedSavedPartial": "\u5DF2\u4FDD\u5B58\uFF08\u6CE8\u610F\uFF1A\u9700\u540C\u65F6\u8BBE\u7F6E\u7528\u6237\u540D\u548C\u5BC6\u7801\u624D\u4F1A\u542F\u7528\u5BC6\u7801\u767B\u5F55\uFF09",
  "form.updatedListenFailed": "\u5DF2\u4FDD\u5B58\uFF0C\u4F46\u8F6C\u53D1\u670D\u52A1\u672A\u80FD\u542F\u52A8",
  "form.failed": "\u4FDD\u5B58\u5931\u8D25"
};
var en = {
  "nav": "Passkey Proxy",
  "status.title": "Status",
  "status.proxyPort": "Proxy port",
  "status.proxyRunning": "Running",
  "status.proxyStopped": "Not running",
  "status.targetPort": "Default service port",
  "status.targetReachable": "Reachable",
  "status.targetUnreachable": "Unreachable",
  "status.username": "Username",
  "status.auth": "Access protection",
  "status.managePasskeys": "Manage Passkeys",
  "status.authOn": "Enabled",
  "status.authOff": "Setup required (unauthenticated requests blocked)",
  "status.persistedOn": "A saved runtime config overrides the cordis config",
  "status.persistedOff": "Using the cordis config",
  "status.skipToken": "Token-free login",
  "status.skipTokenOn": "Enabled (first visit signs in automatically)",
  "status.skipTokenOff": "Disabled (the first visit still needs the token once)",
  "status.loading": "Loading\u2026",
  "status.unreachable": "Cannot reach the proxy service. Make sure the plugin is enabled, then restart DSH.",
  "status.retry": "Retry",
  "control.start": "Start",
  "control.stop": "Stop",
  "control.started": "Proxy service started",
  "control.stopped": "Proxy service stopped",
  "control.failed": "Action failed",
  "control.startHintPort": "The proxy failed to start \u2014 try changing the proxy port (the current one may already be in use).",
  "form.title": "Edit settings",
  "form.subtitle": "The proxy may reconnect briefly after saving.",
  "form.listenPort": "Proxy port (listen)",
  "form.listenPortHint": "1\u201365535",
  "form.username": "Username",
  "form.usernameHint": "Proxy username",
  "form.password": "Proxy password",
  "form.passwordHint": "Already set; leave blank to keep it",
  "form.passwordNew": "Set a new password",
  "form.skipToken": "Open DSH automatically after sign-in",
  "form.accessSection": "1. Access addresses",
  "form.lanAccess": "Allow access from devices on the local network",
  "form.lanAccessHint": "By default only this computer can connect. To use a phone or another LAN device, set a proxy username and password, then enable this option and save.",
  "form.loginSection": "2. Sign-in methods",
  "form.lanHint": "Open http://SERVER-IP:PROXY-PORT on your LAN. If password sign-in is on, the proxy checks its own credentials before forwarding to DSH. Plain HTTP is unencrypted; use it only on a trusted LAN.",
  "form.passwordLogin": "Allow password sign-in",
  "form.atLeastOne": "Keep at least one sign-in method enabled.",
  "form.policyHint": "Passkeys work only at the trusted HTTPS address. Add and test a Passkey before turning off password sign-in. Turning it off also blocks LAN HTTP sign-in. The password remains for managing Passkeys.",
  "form.manageHint": "Add and test a Passkey before turning off password sign-in. When Passkeys are the only sign-in method, the final usable credential cannot be removed.",
  "form.registeredKeys": "Registered for this domain",
  "form.openHTTPS": "Manage Passkeys on the HTTPS site",
  "form.advanced": "Advanced: DSH launch token",
  "form.passkeyTitle": "Passkey sign-in",
  "form.passkeyOrigin": "Public HTTPS origin",
  "form.tlsProxyIPs": "Reverse proxy source IPs (optional for loopback)",
  "form.passkeyHint": "Leave this blank if you do not use HTTPS. For HTTPS, forward to the proxy port, preserve Host, set X-Forwarded-Proto: https, and enable WebSockets.",
  "form.trustHint": "A blank list trusts only local loopback. For another host or a container connecting via its own IP, enter the source IPs seen by DSH, separated by commas.",
  "form.observeHint": "Save the HTTPS origin, open it once in another tab, then check the source here. Observed addresses are suggestions to verify, never added automatically.",
  "form.checkPeer": "Check recent proxy sources",
  "form.observedPeers": "Recently observed sources",
  "form.passkeyManaged": "These values are managed by server environment variables.",
  "form.passkeyReconnecting": "Saved. The proxy will reconnect shortly.",
  "form.skipTokenHint": "After password or Passkey verification, the proxy can handle the separate DSH launch-token check. It never skips proxy sign-in.",
  "form.showPassword": "Show password",
  "form.hidePassword": "Hide password",
  "form.save": "Apply",
  "form.saving": "Applying\u2026",
  "form.invalidPort": "Port must be an integer between 1 and 65535",
  "form.portConflict": "Proxy port must differ from the default service port",
  "form.updated": "Saved and the forwarding service restarted",
  "form.updatedSaved": "Saved",
  "form.updatedPartial": "Saved and restarted (note: password login requires BOTH username and password)",
  "form.updatedSavedPartial": "Saved (note: password login requires BOTH username and password)",
  "form.updatedListenFailed": "Saved, but the forwarding service failed to start",
  "form.failed": "Save failed"
};

// src/client/styles.ts
var STYLE_ID = "dsh-lanproxy-style";
var cssText = `
.dsh_lanproxy_section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}
.dsh_lanproxy_heading {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.dsh_lanproxy_title {
  margin: 0;
  color: var(--dsw-alias-label-primary, #e6edf3);
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
}
.dsh_lanproxy_subtitle {
  margin: 0;
  color: var(--dsw-alias-label-tertiary, #8b949e);
  font-size: 13px;
  line-height: 20px;
}
.dsh_lanproxy_card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  padding: 14px 16px;
  border: 1px solid var(--dsw-alias-border-l2, #30363d);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1, #161b22);
}
.dsh_lanproxy_cardTitle {
  color: var(--dsw-alias-label-primary, #e6edf3);
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}
.dsh_lanproxy_cardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
}
.dsh_lanproxy_controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dsh_lanproxy_cardDesc {
  margin: -4px 0 0;
  color: var(--dsw-alias-label-tertiary, #8b949e);
  font-size: 12px;
  line-height: 18px;
}
.dsh_lanproxy_row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
}
/* Narrow windows and phones: long values wrap inside their column instead of
   running past the card, and the label keeps room for a word or two. A value
   never gets narrower than an address with its status light. */
.dsh_lanproxy_rowLabel {
  min-width: min(6em, 35%);
  color: var(--dsw-alias-label-secondary, #c9d1d9);
  font-size: 13px;
  line-height: 20px;
}
.dsh_lanproxy_rowValue {
  color: var(--dsw-alias-label-primary, #e6edf3);
  font-size: 13px;
  line-height: 20px;
  font-variant-numeric: tabular-nums;
  text-align: right;
  overflow-wrap: anywhere;
}
.dsh_lanproxy_portStatus {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 2px 6px;
  min-width: 0;
}
.dsh_lanproxy_portAddr {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}
.dsh_lanproxy_dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex: none;
}
.dsh_lanproxy_dotOn {
  background: var(--dsw-alias-state-success-primary, #3fb950);
  box-shadow: 0 0 0 3px rgba(63, 185, 80, 0.2);
}
.dsh_lanproxy_dotOff {
  background: var(--dsw-alias-state-error-primary, #f85149);
  box-shadow: 0 0 0 3px rgba(248, 81, 73, 0.2);
}
.dsh_lanproxy_portValue {
  color: var(--dsw-alias-label-primary, #e6edf3);
  font-variant-numeric: tabular-nums;
}
.dsh_lanproxy_statusText {
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
}
.dsh_lanproxy_statusTextOn {
  color: var(--dsw-alias-state-success-primary, #3fb950);
}
.dsh_lanproxy_statusTextOff {
  color: var(--dsw-alias-state-error-primary, #f85149);
}
/* Badges: text color only, no tinted background (the user asked for the
   status text color without the red/green fill), and no side padding, so
   their text lines up with the other values. */
.dsh_lanproxy_badge {
  padding: 2px 0;
  border-radius: 999px;
  font-size: 12px;
  line-height: 18px;
  background: transparent;
}
.dsh_lanproxy_badgeOn {
  color: var(--dsw-alias-state-success-primary, #3fb950);
}
.dsh_lanproxy_badgeOff {
  color: var(--dsw-alias-state-error-primary, #f85149);
}
.dsh_lanproxy_form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}
.dsh_lanproxy_group {
  display: grid;
  gap: 10px;
  min-width: 0;
  margin: 0;
  padding: 12px;
  border: 1px solid var(--dsw-alias-border-normal, #68717e55);
  border-radius: 10px;
}
.dsh_lanproxy_group > legend { padding-inline: 6px; font-weight: 650; }
.dsh_lanproxy_trust > summary { cursor: pointer; padding-block: 8px; }
.dsh_lanproxy_trust > :not(summary) { margin-top: 6px; }
.dsh_lanproxy_group :is(p, code) { overflow-wrap: anywhere; }
.dsh_lanproxy_field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.dsh_lanproxy_fieldLabel {
  color: var(--dsw-alias-label-secondary, #c9d1d9);
  font-size: 13px;
  line-height: 20px;
}
.dsh_lanproxy_fieldHint {
  color: var(--dsw-alias-label-tertiary, #8b949e);
  font-size: 12px;
  line-height: 18px;
  margin: 4px 0 0;
}
/* Checkbox row for the token-free-login toggle. */
.dsh_lanproxy_checkRow {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dsh_lanproxy_checkbox {
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--dsw-alias-accent, #2f81f7);
  cursor: pointer;
  flex: none;
}
.dsh_lanproxy_checkRow .dsh_lanproxy_fieldLabel {
  cursor: pointer;
}
.dsh_lanproxy_input {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid var(--dsw-alias-border-l2, #30363d);
  border-radius: 8px;
  /* bg-layer-0 does not exist in the design platform; bg-layer-2 is the
     token the harness itself uses for inputs and raised surfaces. */
  background: var(--dsw-alias-bg-layer-2, #21262d);
  color: var(--dsw-alias-label-primary, #e6edf3);
  font-size: 13px;
  line-height: 20px;
}
.dsh_lanproxy_input:focus {
  outline: none;
  border-color: var(--dsw-alias-accent, #2f81f7);
}
.dsh_lanproxy_passwordWrap {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
}
.dsh_lanproxy_passwordInput {
  padding-right: 36px;
}
.dsh_lanproxy_eye {
  position: absolute;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #8b949e);
  cursor: pointer;
}
.dsh_lanproxy_eye:hover {
  color: var(--dsw-alias-label-primary, #e6edf3);
  background: var(--dsw-alias-bg-layer-2, #21262d);
}
.dsh_lanproxy_eye svg {
  width: 16px;
  height: 16px;
}
.dsh_lanproxy_statusError {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
}
.dsh_lanproxy_actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2px;
}
/* Primary button (\u542F\u52A8 / \u5E94\u7528): filled accent with a visible border. */
.dsh_lanproxy_button {
  padding: 7px 14px;
  border: 1px solid var(--dsw-alias-accent, #2f81f7);
  border-radius: 8px;
  background: var(--dsw-alias-accent, #2f81f7);
  color: var(--dsw-alias-fg-on-accent, #ffffff);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.dsh_lanproxy_button:hover:not(:disabled) {
  background: var(--dsw-alias-accent-hover, #388bfd);
  border-color: var(--dsw-alias-accent-hover, #388bfd);
}
.dsh_lanproxy_button:active:not(:disabled) {
  background: var(--dsw-alias-accent-active, #1f6feb);
  border-color: var(--dsw-alias-accent-active, #1f6feb);
}
.dsh_lanproxy_button:disabled {
  opacity: 0.5;
  cursor: default;
  border-color: var(--dsw-alias-border-l2, #30363d);
  background: var(--dsw-alias-bg-layer-2, #21262d);
  color: var(--dsw-alias-label-tertiary, #8b949e);
}
/* Secondary button (\u505C\u6B62): outline style with its own border. */
.dsh_lanproxy_buttonStop {
  background: var(--dsw-alias-bg-layer-1, #161b22);
  border: 1px solid var(--dsw-alias-border-l2, #30363d);
  color: var(--dsw-alias-label-primary, #e6edf3);
}
.dsh_lanproxy_buttonStop:hover:not(:disabled) {
  background: var(--dsw-alias-bg-layer-2, #21262d);
  border-color: var(--dsw-alias-label-tertiary, #8b949e);
}
.dsh_lanproxy_buttonStop:active:not(:disabled) {
  background: var(--dsw-alias-bg-layer-0, #0d1117);
}
.dsh_lanproxy_buttonStop:disabled {
  opacity: 0.5;
  cursor: default;
}
.dsh_lanproxy_message {
  margin: 0;
  color: var(--dsw-alias-state-success-primary, #3fb950);
  font-size: 13px;
  line-height: 20px;
}
.dsh_lanproxy_error {
  margin: 0;
  color: var(--dsw-alias-state-error-primary, #f85149);
  font-size: 13px;
  line-height: 20px;
}
.dsh_lanproxy_hint {
  margin: 0;
  color: var(--dsw-alias-label-tertiary, #8b949e);
  font-size: 12px;
  line-height: 18px;
}
`;
function adoptStyles() {
  if (document.getElementById(STYLE_ID) !== null) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = cssText;
  document.head.appendChild(style);
}

// src/client/index.ts
var inject = ["slots", "locale", "connection"];
function apply(ctx) {
  adoptStyles();
  console.info("[dsh-proxy] bundle loaded");
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "dsh-proxy: dictionaries");
  const t = ctx.locale.bind(NS);
  const connection = ctx.get("connection");
  const rpc = connection.rpc;
  ctx.slots.inject("settings.section", () => ctx.slots.register({
    name: "settings.section",
    id: "dsh-proxy",
    order: 70,
    label: () => t("nav"),
    locale: NS,
    inject: () => ({ rpc })
  }, SettingsSection));
}
return module.exports; } });
//# sourceMappingURL=client.js.map
