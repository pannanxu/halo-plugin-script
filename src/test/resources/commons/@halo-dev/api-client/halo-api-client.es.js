import m from "axios";
const V = "http://localhost:8091".replace(/\/+$/, "");
class U {
  constructor(a, s = V, n = m) {
    this.basePath = s, this.axios = n, a && (this.configuration = a, this.basePath = a.basePath ?? s);
  }
}
class vr extends Error {
  constructor(a, s) {
    super(s), this.field = a, this.name = "RequiredError";
  }
}
const y = {}, O = "https://example.com", R = function(e, a, s) {
  if (s == null)
    throw new vr(a, `Required parameter ${a} was null or undefined when calling ${e}.`);
}, P = function(e, a) {
  a && (a.username || a.password) && (e.auth = { username: a.username, password: a.password });
}, u = async function(e, a) {
  if (a && a.accessToken) {
    const s = typeof a.accessToken == "function" ? await a.accessToken() : await a.accessToken;
    e.Authorization = "Bearer " + s;
  }
};
function qa(e, a, s = "") {
  a != null && (typeof a == "object" ? Array.isArray(a) ? a.forEach((n) => qa(e, n, s)) : Object.keys(a).forEach(
    (n) => qa(e, a[n], `${s}${s !== "" ? "." : ""}${n}`)
  ) : e.has(s) ? e.append(s, a) : e.set(s, a));
}
const v = function(e, ...a) {
  const s = new URLSearchParams(e.search);
  qa(s, a), e.search = s.toString();
}, C = function(e, a, s) {
  const n = typeof e != "string";
  return (n && s && s.isJsonMime ? s.isJsonMime(a.headers["Content-Type"]) : n) ? JSON.stringify(e !== void 0 ? e : {}) : e || "";
}, S = function(e) {
  return e.pathname + e.search + e.hash;
}, A = function(e, a, s, n) {
  return (l = a, r = s) => {
    const t = { ...e.options, url: (l.defaults.baseURL ? "" : (n == null ? void 0 : n.basePath) ?? r) + e.url };
    return l.request(t);
  };
}, Sr = function(e) {
  return {
    /**
     * Create AnnotationSetting
     * @param {AnnotationSetting} [annotationSetting] Fresh annotationsetting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAnnotationSetting: async (a, s = {}) => {
      const n = "/api/v1alpha1/annotationsettings", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete AnnotationSetting
     * @param {string} name Name of annotationsetting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAnnotationSetting: async (a, s = {}) => {
      R("deleteAnnotationSetting", "name", a);
      const n = "/api/v1alpha1/annotationsettings/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get AnnotationSetting
     * @param {string} name Name of annotationsetting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnnotationSetting: async (a, s = {}) => {
      R("getAnnotationSetting", "name", a);
      const n = "/api/v1alpha1/annotationsettings/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List AnnotationSetting
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAnnotationSetting: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/annotationsettings", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch AnnotationSetting
     * @param {string} name Name of annotationsetting
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAnnotationSetting: async (a, s, n = {}) => {
      R("patchAnnotationSetting", "name", a);
      const l = "/api/v1alpha1/annotationsettings/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update AnnotationSetting
     * @param {string} name Name of annotationsetting
     * @param {AnnotationSetting} [annotationSetting] Updated annotationsetting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAnnotationSetting: async (a, s, n = {}) => {
      R("updateAnnotationSetting", "name", a);
      const l = "/api/v1alpha1/annotationsettings/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, te = function(e) {
  const a = Sr(e);
  return {
    /**
     * Create AnnotationSetting
     * @param {AnnotationSetting} [annotationSetting] Fresh annotationsetting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAnnotationSetting(s, n) {
      var o, c;
      const l = await a.createAnnotationSetting(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AnnotationSettingV1alpha1Api.createAnnotationSetting"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete AnnotationSetting
     * @param {string} name Name of annotationsetting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAnnotationSetting(s, n) {
      var o, c;
      const l = await a.deleteAnnotationSetting(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AnnotationSettingV1alpha1Api.deleteAnnotationSetting"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get AnnotationSetting
     * @param {string} name Name of annotationsetting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAnnotationSetting(s, n) {
      var o, c;
      const l = await a.getAnnotationSetting(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AnnotationSettingV1alpha1Api.getAnnotationSetting"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List AnnotationSetting
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAnnotationSetting(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listAnnotationSetting(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["AnnotationSettingV1alpha1Api.listAnnotationSetting"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch AnnotationSetting
     * @param {string} name Name of annotationsetting
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchAnnotationSetting(s, n, l) {
      var c, p;
      const r = await a.patchAnnotationSetting(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["AnnotationSettingV1alpha1Api.patchAnnotationSetting"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update AnnotationSetting
     * @param {string} name Name of annotationsetting
     * @param {AnnotationSetting} [annotationSetting] Updated annotationsetting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateAnnotationSetting(s, n, l) {
      var c, p;
      const r = await a.updateAnnotationSetting(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["AnnotationSettingV1alpha1Api.updateAnnotationSetting"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Tc = function(e, a, s) {
  const n = te(e);
  return {
    /**
     * Create AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiCreateAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAnnotationSetting(l = {}, r) {
      return n.createAnnotationSetting(l.annotationSetting, r).then((t) => t(s, a));
    },
    /**
     * Delete AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiDeleteAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAnnotationSetting(l, r) {
      return n.deleteAnnotationSetting(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiGetAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnnotationSetting(l, r) {
      return n.getAnnotationSetting(l.name, r).then((t) => t(s, a));
    },
    /**
     * List AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiListAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAnnotationSetting(l = {}, r) {
      return n.listAnnotationSetting(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiPatchAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAnnotationSetting(l, r) {
      return n.patchAnnotationSetting(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiUpdateAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAnnotationSetting(l, r) {
      return n.updateAnnotationSetting(l.name, l.annotationSetting, r).then((t) => t(s, a));
    }
  };
};
class Ar extends U {
  /**
   * Create AnnotationSetting
   * @param {AnnotationSettingV1alpha1ApiCreateAnnotationSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AnnotationSettingV1alpha1Api
   */
  createAnnotationSetting(a = {}, s) {
    return te(this.configuration).createAnnotationSetting(a.annotationSetting, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete AnnotationSetting
   * @param {AnnotationSettingV1alpha1ApiDeleteAnnotationSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AnnotationSettingV1alpha1Api
   */
  deleteAnnotationSetting(a, s) {
    return te(this.configuration).deleteAnnotationSetting(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get AnnotationSetting
   * @param {AnnotationSettingV1alpha1ApiGetAnnotationSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AnnotationSettingV1alpha1Api
   */
  getAnnotationSetting(a, s) {
    return te(this.configuration).getAnnotationSetting(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List AnnotationSetting
   * @param {AnnotationSettingV1alpha1ApiListAnnotationSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AnnotationSettingV1alpha1Api
   */
  listAnnotationSetting(a = {}, s) {
    return te(this.configuration).listAnnotationSetting(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch AnnotationSetting
   * @param {AnnotationSettingV1alpha1ApiPatchAnnotationSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AnnotationSettingV1alpha1Api
   */
  patchAnnotationSetting(a, s) {
    return te(this.configuration).patchAnnotationSetting(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update AnnotationSetting
   * @param {AnnotationSettingV1alpha1ApiUpdateAnnotationSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AnnotationSettingV1alpha1Api
   */
  updateAnnotationSetting(a, s) {
    return te(this.configuration).updateAnnotationSetting(a.name, a.annotationSetting, s).then((n) => n(this.axios, this.basePath));
  }
}
const br = function(e) {
  return {
    /**
     * Unsubscribe a subscription
     * @param {string} name Subscription name
     * @param {string} token Unsubscribe token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unsubscribe: async (a, s, n = {}) => {
      R("unsubscribe", "name", a), R("unsubscribe", "token", s);
      const l = "/apis/api.notification.halo.run/v1alpha1/subscriptions/{name}/unsubscribe".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "GET", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), s !== void 0 && (p.token = s), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    }
  };
}, zt = function(e) {
  const a = br(e);
  return {
    /**
     * Unsubscribe a subscription
     * @param {string} name Subscription name
     * @param {string} token Unsubscribe token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async unsubscribe(s, n, l) {
      var c, p;
      const r = await a.unsubscribe(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ApiNotificationHaloRunV1alpha1SubscriptionApi.unsubscribe"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Ic = function(e, a, s) {
  const n = zt(e);
  return {
    /**
     * Unsubscribe a subscription
     * @param {ApiNotificationHaloRunV1alpha1SubscriptionApiUnsubscribeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unsubscribe(l, r) {
      return n.unsubscribe(l.name, l.token, r).then((t) => t(s, a));
    }
  };
};
class Bc extends U {
  /**
   * Unsubscribe a subscription
   * @param {ApiNotificationHaloRunV1alpha1SubscriptionApiUnsubscribeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiNotificationHaloRunV1alpha1SubscriptionApi
   */
  unsubscribe(a, s) {
    return zt(this.configuration).unsubscribe(a.name, a.token, s).then((n) => n(this.axios, this.basePath));
  }
}
const Rr = function(e) {
  return {
    /**
     * Create Attachment
     * @param {Attachment} [attachment] Fresh attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAttachment: async (a, s = {}) => {
      const n = "/apis/storage.halo.run/v1alpha1/attachments", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Attachment
     * @param {string} name Name of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAttachment: async (a, s = {}) => {
      R("deleteAttachment", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/attachments/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Attachment
     * @param {string} name Name of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttachment: async (a, s = {}) => {
      R("getAttachment", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/attachments/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Attachment
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAttachment: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/storage.halo.run/v1alpha1/attachments", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Attachment
     * @param {string} name Name of attachment
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAttachment: async (a, s, n = {}) => {
      R("patchAttachment", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/attachments/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Attachment
     * @param {string} name Name of attachment
     * @param {Attachment} [attachment] Updated attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAttachment: async (a, s, n = {}) => {
      R("updateAttachment", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/attachments/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, re = function(e) {
  const a = Rr(e);
  return {
    /**
     * Create Attachment
     * @param {Attachment} [attachment] Fresh attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAttachment(s, n) {
      var o, c;
      const l = await a.createAttachment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AttachmentV1alpha1Api.createAttachment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Attachment
     * @param {string} name Name of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAttachment(s, n) {
      var o, c;
      const l = await a.deleteAttachment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AttachmentV1alpha1Api.deleteAttachment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Attachment
     * @param {string} name Name of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAttachment(s, n) {
      var o, c;
      const l = await a.getAttachment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AttachmentV1alpha1Api.getAttachment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Attachment
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAttachment(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listAttachment(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["AttachmentV1alpha1Api.listAttachment"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Attachment
     * @param {string} name Name of attachment
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchAttachment(s, n, l) {
      var c, p;
      const r = await a.patchAttachment(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["AttachmentV1alpha1Api.patchAttachment"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Attachment
     * @param {string} name Name of attachment
     * @param {Attachment} [attachment] Updated attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateAttachment(s, n, l) {
      var c, p;
      const r = await a.updateAttachment(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["AttachmentV1alpha1Api.updateAttachment"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Fc = function(e, a, s) {
  const n = re(e);
  return {
    /**
     * Create Attachment
     * @param {AttachmentV1alpha1ApiCreateAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAttachment(l = {}, r) {
      return n.createAttachment(l.attachment, r).then((t) => t(s, a));
    },
    /**
     * Delete Attachment
     * @param {AttachmentV1alpha1ApiDeleteAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAttachment(l, r) {
      return n.deleteAttachment(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Attachment
     * @param {AttachmentV1alpha1ApiGetAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAttachment(l, r) {
      return n.getAttachment(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Attachment
     * @param {AttachmentV1alpha1ApiListAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAttachment(l = {}, r) {
      return n.listAttachment(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Attachment
     * @param {AttachmentV1alpha1ApiPatchAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAttachment(l, r) {
      return n.patchAttachment(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Attachment
     * @param {AttachmentV1alpha1ApiUpdateAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAttachment(l, r) {
      return n.updateAttachment(l.name, l.attachment, r).then((t) => t(s, a));
    }
  };
};
class xr extends U {
  /**
   * Create Attachment
   * @param {AttachmentV1alpha1ApiCreateAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1Api
   */
  createAttachment(a = {}, s) {
    return re(this.configuration).createAttachment(a.attachment, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Attachment
   * @param {AttachmentV1alpha1ApiDeleteAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1Api
   */
  deleteAttachment(a, s) {
    return re(this.configuration).deleteAttachment(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Attachment
   * @param {AttachmentV1alpha1ApiGetAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1Api
   */
  getAttachment(a, s) {
    return re(this.configuration).getAttachment(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Attachment
   * @param {AttachmentV1alpha1ApiListAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1Api
   */
  listAttachment(a = {}, s) {
    return re(this.configuration).listAttachment(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Attachment
   * @param {AttachmentV1alpha1ApiPatchAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1Api
   */
  patchAttachment(a, s) {
    return re(this.configuration).patchAttachment(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Attachment
   * @param {AttachmentV1alpha1ApiUpdateAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1Api
   */
  updateAttachment(a, s) {
    return re(this.configuration).updateAttachment(a.name, a.attachment, s).then((n) => n(this.axios, this.basePath));
  }
}
const Cr = function(e) {
  return {
    /**
     * 
     * @param {UploadFromUrlRequest} uploadFromUrlRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    externalTransferAttachment: async (a, s = {}) => {
      R("externalTransferAttachment", "uploadFromUrlRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/attachments/-/upload-from-url", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * 
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
     * @param {string} [keyword] Keyword for searching.
     * @param {Array<string>} [accepts] Acceptable media types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAttachments: async (a, s, n, l, r, t, o, c, p = {}) => {
      const h = "/apis/api.console.halo.run/v1alpha1/attachments", i = new URL(h, O);
      let d;
      e && (d = e.baseOptions);
      const b = { method: "GET", ...d, ...p }, x = {}, w = {};
      P(b, e), await u(x, e), a !== void 0 && (w.page = a), s !== void 0 && (w.size = s), n && (w.labelSelector = n), l && (w.fieldSelector = l), r && (w.sort = r), t !== void 0 && (w.ungrouped = t), o !== void 0 && (w.keyword = o), c && (w.accepts = c), v(i, w);
      let T = d && d.headers ? d.headers : {};
      return b.headers = { ...x, ...T, ...p.headers }, {
        url: S(i),
        options: b
      };
    },
    /**
     * 
     * @param {File} file 
     * @param {string} policyName Storage policy name
     * @param {string} [groupName] The name of the group to which the attachment belongs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadAttachment: async (a, s, n, l = {}) => {
      R("uploadAttachment", "file", a), R("uploadAttachment", "policyName", s);
      const r = "/apis/api.console.halo.run/v1alpha1/attachments/upload", t = new URL(r, O);
      let o;
      e && (o = e.baseOptions);
      const c = { method: "POST", ...o, ...l }, p = {}, h = {}, i = new (e && e.formDataCtor || FormData)();
      P(c, e), await u(p, e), a !== void 0 && i.append("file", a), n !== void 0 && i.append("groupName", n), s !== void 0 && i.append("policyName", s), p["Content-Type"] = "multipart/form-data", v(t, h);
      let d = o && o.headers ? o.headers : {};
      return c.headers = { ...p, ...d, ...l.headers }, c.data = i, {
        url: S(t),
        options: c
      };
    }
  };
}, ba = function(e) {
  const a = Cr(e);
  return {
    /**
     * 
     * @param {UploadFromUrlRequest} uploadFromUrlRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async externalTransferAttachment(s, n) {
      var o, c;
      const l = await a.externalTransferAttachment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AttachmentV1alpha1ConsoleApi.externalTransferAttachment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * 
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
     * @param {string} [keyword] Keyword for searching.
     * @param {Array<string>} [accepts] Acceptable media types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchAttachments(s, n, l, r, t, o, c, p, h) {
      var x, w;
      const i = await a.searchAttachments(s, n, l, r, t, o, c, p, h), d = (e == null ? void 0 : e.serverIndex) ?? 0, b = (w = (x = y["AttachmentV1alpha1ConsoleApi.searchAttachments"]) == null ? void 0 : x[d]) == null ? void 0 : w.url;
      return (T, F) => A(i, m, V, e)(T, b || F);
    },
    /**
     * 
     * @param {File} file 
     * @param {string} policyName Storage policy name
     * @param {string} [groupName] The name of the group to which the attachment belongs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async uploadAttachment(s, n, l, r) {
      var p, h;
      const t = await a.uploadAttachment(s, n, l, r), o = (e == null ? void 0 : e.serverIndex) ?? 0, c = (h = (p = y["AttachmentV1alpha1ConsoleApi.uploadAttachment"]) == null ? void 0 : p[o]) == null ? void 0 : h.url;
      return (i, d) => A(t, m, V, e)(i, c || d);
    }
  };
}, Ec = function(e, a, s) {
  const n = ba(e);
  return {
    /**
     * 
     * @param {AttachmentV1alpha1ConsoleApiExternalTransferAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    externalTransferAttachment(l, r) {
      return n.externalTransferAttachment(l.uploadFromUrlRequest, r).then((t) => t(s, a));
    },
    /**
     * 
     * @param {AttachmentV1alpha1ConsoleApiSearchAttachmentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAttachments(l = {}, r) {
      return n.searchAttachments(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.ungrouped, l.keyword, l.accepts, r).then((t) => t(s, a));
    },
    /**
     * 
     * @param {AttachmentV1alpha1ConsoleApiUploadAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadAttachment(l, r) {
      return n.uploadAttachment(l.file, l.policyName, l.groupName, r).then((t) => t(s, a));
    }
  };
};
class wr extends U {
  /**
   * 
   * @param {AttachmentV1alpha1ConsoleApiExternalTransferAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1ConsoleApi
   */
  externalTransferAttachment(a, s) {
    return ba(this.configuration).externalTransferAttachment(a.uploadFromUrlRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * 
   * @param {AttachmentV1alpha1ConsoleApiSearchAttachmentsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1ConsoleApi
   */
  searchAttachments(a = {}, s) {
    return ba(this.configuration).searchAttachments(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.ungrouped, a.keyword, a.accepts, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * 
   * @param {AttachmentV1alpha1ConsoleApiUploadAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1ConsoleApi
   */
  uploadAttachment(a, s) {
    return ba(this.configuration).uploadAttachment(a.file, a.policyName, a.groupName, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ur = function(e) {
  return {
    /**
     * Create attachment for the given post.
     * @param {File} file 
     * @param {boolean} [waitForPermalink] Wait for permalink.
     * @param {string} [postName] Post name.
     * @param {string} [singlePageName] Single page name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAttachmentForPost: async (a, s, n, l, r = {}) => {
      R("createAttachmentForPost", "file", a);
      const t = "/apis/uc.api.storage.halo.run/v1alpha1/attachments", o = new URL(t, O);
      let c;
      e && (c = e.baseOptions);
      const p = { method: "POST", ...c, ...r }, h = {}, i = {}, d = new (e && e.formDataCtor || FormData)();
      P(p, e), await u(h, e), s !== void 0 && (i.waitForPermalink = s), a !== void 0 && d.append("file", a), n !== void 0 && d.append("postName", n), l !== void 0 && d.append("singlePageName", l), h["Content-Type"] = "multipart/form-data", v(o, i);
      let b = c && c.headers ? c.headers : {};
      return p.headers = { ...h, ...b, ...r.headers }, p.data = d, {
        url: S(o),
        options: p
      };
    },
    /**
     * Upload attachment from the given URL.
     * @param {UploadFromUrlRequest} uploadFromUrlRequest 
     * @param {boolean} [waitForPermalink] Wait for permalink.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    externalTransferAttachment1: async (a, s, n = {}) => {
      R("externalTransferAttachment1", "uploadFromUrlRequest", a);
      const l = "/apis/uc.api.storage.halo.run/v1alpha1/attachments/-/upload-from-url", r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), s !== void 0 && (p.waitForPermalink = s), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(a, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * List attachments of the current user uploaded.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
     * @param {string} [keyword] Keyword for searching.
     * @param {Array<string>} [accepts] Acceptable media types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMyAttachments: async (a, s, n, l, r, t, o, c, p = {}) => {
      const h = "/apis/uc.api.storage.halo.run/v1alpha1/attachments", i = new URL(h, O);
      let d;
      e && (d = e.baseOptions);
      const b = { method: "GET", ...d, ...p }, x = {}, w = {};
      P(b, e), await u(x, e), a !== void 0 && (w.page = a), s !== void 0 && (w.size = s), n && (w.labelSelector = n), l && (w.fieldSelector = l), r && (w.sort = r), t !== void 0 && (w.ungrouped = t), o !== void 0 && (w.keyword = o), c && (w.accepts = c), v(i, w);
      let T = d && d.headers ? d.headers : {};
      return b.headers = { ...x, ...T, ...p.headers }, {
        url: S(i),
        options: b
      };
    },
    /**
     * Upload attachment to user center storage.
     * @param {File} file 
     * @param {UcUploadRequestFormData} [formData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadUcAttachment: async (a, s, n = {}) => {
      R("uploadUcAttachment", "file", a);
      const l = "/apis/uc.api.storage.halo.run/v1alpha1/attachments/-/upload", r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {}, h = new (e && e.formDataCtor || FormData)();
      P(o, e), await u(c, e), a !== void 0 && h.append("file", a), s !== void 0 && h.append("formData", new Blob([JSON.stringify(s)], { type: "application/json" })), c["Content-Type"] = "multipart/form-data", v(r, p);
      let i = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...i, ...n.headers }, o.data = h, {
        url: S(r),
        options: o
      };
    }
  };
}, ha = function(e) {
  const a = Ur(e);
  return {
    /**
     * Create attachment for the given post.
     * @param {File} file 
     * @param {boolean} [waitForPermalink] Wait for permalink.
     * @param {string} [postName] Post name.
     * @param {string} [singlePageName] Single page name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAttachmentForPost(s, n, l, r, t) {
      var h, i;
      const o = await a.createAttachmentForPost(s, n, l, r, t), c = (e == null ? void 0 : e.serverIndex) ?? 0, p = (i = (h = y["AttachmentV1alpha1UcApi.createAttachmentForPost"]) == null ? void 0 : h[c]) == null ? void 0 : i.url;
      return (d, b) => A(o, m, V, e)(d, p || b);
    },
    /**
     * Upload attachment from the given URL.
     * @param {UploadFromUrlRequest} uploadFromUrlRequest 
     * @param {boolean} [waitForPermalink] Wait for permalink.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async externalTransferAttachment1(s, n, l) {
      var c, p;
      const r = await a.externalTransferAttachment1(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["AttachmentV1alpha1UcApi.externalTransferAttachment1"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * List attachments of the current user uploaded.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
     * @param {string} [keyword] Keyword for searching.
     * @param {Array<string>} [accepts] Acceptable media types.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listMyAttachments(s, n, l, r, t, o, c, p, h) {
      var x, w;
      const i = await a.listMyAttachments(s, n, l, r, t, o, c, p, h), d = (e == null ? void 0 : e.serverIndex) ?? 0, b = (w = (x = y["AttachmentV1alpha1UcApi.listMyAttachments"]) == null ? void 0 : x[d]) == null ? void 0 : w.url;
      return (T, F) => A(i, m, V, e)(T, b || F);
    },
    /**
     * Upload attachment to user center storage.
     * @param {File} file 
     * @param {UcUploadRequestFormData} [formData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async uploadUcAttachment(s, n, l) {
      var c, p;
      const r = await a.uploadUcAttachment(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["AttachmentV1alpha1UcApi.uploadUcAttachment"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, jc = function(e, a, s) {
  const n = ha(e);
  return {
    /**
     * Create attachment for the given post.
     * @param {AttachmentV1alpha1UcApiCreateAttachmentForPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAttachmentForPost(l, r) {
      return n.createAttachmentForPost(l.file, l.waitForPermalink, l.postName, l.singlePageName, r).then((t) => t(s, a));
    },
    /**
     * Upload attachment from the given URL.
     * @param {AttachmentV1alpha1UcApiExternalTransferAttachment1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    externalTransferAttachment1(l, r) {
      return n.externalTransferAttachment1(l.uploadFromUrlRequest, l.waitForPermalink, r).then((t) => t(s, a));
    },
    /**
     * List attachments of the current user uploaded.
     * @param {AttachmentV1alpha1UcApiListMyAttachmentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMyAttachments(l = {}, r) {
      return n.listMyAttachments(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.ungrouped, l.keyword, l.accepts, r).then((t) => t(s, a));
    },
    /**
     * Upload attachment to user center storage.
     * @param {AttachmentV1alpha1UcApiUploadUcAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadUcAttachment(l, r) {
      return n.uploadUcAttachment(l.file, l.formData, r).then((t) => t(s, a));
    }
  };
};
class Tr extends U {
  /**
   * Create attachment for the given post.
   * @param {AttachmentV1alpha1UcApiCreateAttachmentForPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1UcApi
   */
  createAttachmentForPost(a, s) {
    return ha(this.configuration).createAttachmentForPost(a.file, a.waitForPermalink, a.postName, a.singlePageName, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Upload attachment from the given URL.
   * @param {AttachmentV1alpha1UcApiExternalTransferAttachment1Request} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1UcApi
   */
  externalTransferAttachment1(a, s) {
    return ha(this.configuration).externalTransferAttachment1(a.uploadFromUrlRequest, a.waitForPermalink, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List attachments of the current user uploaded.
   * @param {AttachmentV1alpha1UcApiListMyAttachmentsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1UcApi
   */
  listMyAttachments(a = {}, s) {
    return ha(this.configuration).listMyAttachments(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.ungrouped, a.keyword, a.accepts, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Upload attachment to user center storage.
   * @param {AttachmentV1alpha1UcApiUploadUcAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttachmentV1alpha1UcApi
   */
  uploadUcAttachment(a, s) {
    return ha(this.configuration).uploadUcAttachment(a.file, a.formData, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ir = function(e) {
  return {
    /**
     * Create AuthProvider
     * @param {AuthProvider} [authProvider] Fresh authprovider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAuthProvider: async (a, s = {}) => {
      const n = "/apis/auth.halo.run/v1alpha1/authproviders", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete AuthProvider
     * @param {string} name Name of authprovider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAuthProvider: async (a, s = {}) => {
      R("deleteAuthProvider", "name", a);
      const n = "/apis/auth.halo.run/v1alpha1/authproviders/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get AuthProvider
     * @param {string} name Name of authprovider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAuthProvider: async (a, s = {}) => {
      R("getAuthProvider", "name", a);
      const n = "/apis/auth.halo.run/v1alpha1/authproviders/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List AuthProvider
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAuthProvider: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/auth.halo.run/v1alpha1/authproviders", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch AuthProvider
     * @param {string} name Name of authprovider
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAuthProvider: async (a, s, n = {}) => {
      R("patchAuthProvider", "name", a);
      const l = "/apis/auth.halo.run/v1alpha1/authproviders/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update AuthProvider
     * @param {string} name Name of authprovider
     * @param {AuthProvider} [authProvider] Updated authprovider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAuthProvider: async (a, s, n = {}) => {
      R("updateAuthProvider", "name", a);
      const l = "/apis/auth.halo.run/v1alpha1/authproviders/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, se = function(e) {
  const a = Ir(e);
  return {
    /**
     * Create AuthProvider
     * @param {AuthProvider} [authProvider] Fresh authprovider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createAuthProvider(s, n) {
      var o, c;
      const l = await a.createAuthProvider(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AuthProviderV1alpha1Api.createAuthProvider"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete AuthProvider
     * @param {string} name Name of authprovider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAuthProvider(s, n) {
      var o, c;
      const l = await a.deleteAuthProvider(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AuthProviderV1alpha1Api.deleteAuthProvider"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get AuthProvider
     * @param {string} name Name of authprovider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAuthProvider(s, n) {
      var o, c;
      const l = await a.getAuthProvider(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AuthProviderV1alpha1Api.getAuthProvider"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List AuthProvider
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAuthProvider(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listAuthProvider(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["AuthProviderV1alpha1Api.listAuthProvider"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch AuthProvider
     * @param {string} name Name of authprovider
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchAuthProvider(s, n, l) {
      var c, p;
      const r = await a.patchAuthProvider(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["AuthProviderV1alpha1Api.patchAuthProvider"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update AuthProvider
     * @param {string} name Name of authprovider
     * @param {AuthProvider} [authProvider] Updated authprovider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateAuthProvider(s, n, l) {
      var c, p;
      const r = await a.updateAuthProvider(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["AuthProviderV1alpha1Api.updateAuthProvider"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Lc = function(e, a, s) {
  const n = se(e);
  return {
    /**
     * Create AuthProvider
     * @param {AuthProviderV1alpha1ApiCreateAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAuthProvider(l = {}, r) {
      return n.createAuthProvider(l.authProvider, r).then((t) => t(s, a));
    },
    /**
     * Delete AuthProvider
     * @param {AuthProviderV1alpha1ApiDeleteAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAuthProvider(l, r) {
      return n.deleteAuthProvider(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get AuthProvider
     * @param {AuthProviderV1alpha1ApiGetAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAuthProvider(l, r) {
      return n.getAuthProvider(l.name, r).then((t) => t(s, a));
    },
    /**
     * List AuthProvider
     * @param {AuthProviderV1alpha1ApiListAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAuthProvider(l = {}, r) {
      return n.listAuthProvider(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch AuthProvider
     * @param {AuthProviderV1alpha1ApiPatchAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchAuthProvider(l, r) {
      return n.patchAuthProvider(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update AuthProvider
     * @param {AuthProviderV1alpha1ApiUpdateAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAuthProvider(l, r) {
      return n.updateAuthProvider(l.name, l.authProvider, r).then((t) => t(s, a));
    }
  };
};
class Br extends U {
  /**
   * Create AuthProvider
   * @param {AuthProviderV1alpha1ApiCreateAuthProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1Api
   */
  createAuthProvider(a = {}, s) {
    return se(this.configuration).createAuthProvider(a.authProvider, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete AuthProvider
   * @param {AuthProviderV1alpha1ApiDeleteAuthProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1Api
   */
  deleteAuthProvider(a, s) {
    return se(this.configuration).deleteAuthProvider(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get AuthProvider
   * @param {AuthProviderV1alpha1ApiGetAuthProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1Api
   */
  getAuthProvider(a, s) {
    return se(this.configuration).getAuthProvider(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List AuthProvider
   * @param {AuthProviderV1alpha1ApiListAuthProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1Api
   */
  listAuthProvider(a = {}, s) {
    return se(this.configuration).listAuthProvider(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch AuthProvider
   * @param {AuthProviderV1alpha1ApiPatchAuthProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1Api
   */
  patchAuthProvider(a, s) {
    return se(this.configuration).patchAuthProvider(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update AuthProvider
   * @param {AuthProviderV1alpha1ApiUpdateAuthProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1Api
   */
  updateAuthProvider(a, s) {
    return se(this.configuration).updateAuthProvider(a.name, a.authProvider, s).then((n) => n(this.axios, this.basePath));
  }
}
const Fr = function(e) {
  return {
    /**
     * Disables an auth provider
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    disableAuthProvider: async (a, s = {}) => {
      R("disableAuthProvider", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/auth-providers/{name}/disable".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Enables an auth provider
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    enableAuthProvider: async (a, s = {}) => {
      R("enableAuthProvider", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/auth-providers/{name}/enable".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Lists all auth providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAuthProviders: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/auth-providers", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    }
  };
}, Ra = function(e) {
  const a = Fr(e);
  return {
    /**
     * Disables an auth provider
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async disableAuthProvider(s, n) {
      var o, c;
      const l = await a.disableAuthProvider(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AuthProviderV1alpha1ConsoleApi.disableAuthProvider"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Enables an auth provider
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async enableAuthProvider(s, n) {
      var o, c;
      const l = await a.enableAuthProvider(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["AuthProviderV1alpha1ConsoleApi.enableAuthProvider"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Lists all auth providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listAuthProviders(s) {
      var t, o;
      const n = await a.listAuthProviders(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["AuthProviderV1alpha1ConsoleApi.listAuthProviders"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    }
  };
}, Dc = function(e, a, s) {
  const n = Ra(e);
  return {
    /**
     * Disables an auth provider
     * @param {AuthProviderV1alpha1ConsoleApiDisableAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    disableAuthProvider(l, r) {
      return n.disableAuthProvider(l.name, r).then((t) => t(s, a));
    },
    /**
     * Enables an auth provider
     * @param {AuthProviderV1alpha1ConsoleApiEnableAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    enableAuthProvider(l, r) {
      return n.enableAuthProvider(l.name, r).then((t) => t(s, a));
    },
    /**
     * Lists all auth providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAuthProviders(l) {
      return n.listAuthProviders(l).then((r) => r(s, a));
    }
  };
};
class Er extends U {
  /**
   * Disables an auth provider
   * @param {AuthProviderV1alpha1ConsoleApiDisableAuthProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1ConsoleApi
   */
  disableAuthProvider(a, s) {
    return Ra(this.configuration).disableAuthProvider(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Enables an auth provider
   * @param {AuthProviderV1alpha1ConsoleApiEnableAuthProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1ConsoleApi
   */
  enableAuthProvider(a, s) {
    return Ra(this.configuration).enableAuthProvider(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Lists all auth providers
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthProviderV1alpha1ConsoleApi
   */
  listAuthProviders(a) {
    return Ra(this.configuration).listAuthProviders(a).then((s) => s(this.axios, this.basePath));
  }
}
const jr = function(e) {
  return {
    /**
     * Create Backup
     * @param {Backup} [backup] Fresh backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBackup: async (a, s = {}) => {
      const n = "/apis/migration.halo.run/v1alpha1/backups", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Backup
     * @param {string} name Name of backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBackup: async (a, s = {}) => {
      R("deleteBackup", "name", a);
      const n = "/apis/migration.halo.run/v1alpha1/backups/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Backup
     * @param {string} name Name of backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackup: async (a, s = {}) => {
      R("getBackup", "name", a);
      const n = "/apis/migration.halo.run/v1alpha1/backups/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Backup
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBackup: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/migration.halo.run/v1alpha1/backups", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Backup
     * @param {string} name Name of backup
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchBackup: async (a, s, n = {}) => {
      R("patchBackup", "name", a);
      const l = "/apis/migration.halo.run/v1alpha1/backups/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Backup
     * @param {string} name Name of backup
     * @param {Backup} [backup] Updated backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateBackup: async (a, s, n = {}) => {
      R("updateBackup", "name", a);
      const l = "/apis/migration.halo.run/v1alpha1/backups/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, le = function(e) {
  const a = jr(e);
  return {
    /**
     * Create Backup
     * @param {Backup} [backup] Fresh backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createBackup(s, n) {
      var o, c;
      const l = await a.createBackup(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["BackupV1alpha1Api.createBackup"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Backup
     * @param {string} name Name of backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteBackup(s, n) {
      var o, c;
      const l = await a.deleteBackup(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["BackupV1alpha1Api.deleteBackup"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Backup
     * @param {string} name Name of backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBackup(s, n) {
      var o, c;
      const l = await a.getBackup(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["BackupV1alpha1Api.getBackup"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Backup
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listBackup(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listBackup(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["BackupV1alpha1Api.listBackup"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Backup
     * @param {string} name Name of backup
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchBackup(s, n, l) {
      var c, p;
      const r = await a.patchBackup(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["BackupV1alpha1Api.patchBackup"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Backup
     * @param {string} name Name of backup
     * @param {Backup} [backup] Updated backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateBackup(s, n, l) {
      var c, p;
      const r = await a.updateBackup(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["BackupV1alpha1Api.updateBackup"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Nc = function(e, a, s) {
  const n = le(e);
  return {
    /**
     * Create Backup
     * @param {BackupV1alpha1ApiCreateBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBackup(l = {}, r) {
      return n.createBackup(l.backup, r).then((t) => t(s, a));
    },
    /**
     * Delete Backup
     * @param {BackupV1alpha1ApiDeleteBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBackup(l, r) {
      return n.deleteBackup(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Backup
     * @param {BackupV1alpha1ApiGetBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackup(l, r) {
      return n.getBackup(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Backup
     * @param {BackupV1alpha1ApiListBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBackup(l = {}, r) {
      return n.listBackup(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Backup
     * @param {BackupV1alpha1ApiPatchBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchBackup(l, r) {
      return n.patchBackup(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Backup
     * @param {BackupV1alpha1ApiUpdateBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateBackup(l, r) {
      return n.updateBackup(l.name, l.backup, r).then((t) => t(s, a));
    }
  };
};
class Lr extends U {
  /**
   * Create Backup
   * @param {BackupV1alpha1ApiCreateBackupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BackupV1alpha1Api
   */
  createBackup(a = {}, s) {
    return le(this.configuration).createBackup(a.backup, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Backup
   * @param {BackupV1alpha1ApiDeleteBackupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BackupV1alpha1Api
   */
  deleteBackup(a, s) {
    return le(this.configuration).deleteBackup(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Backup
   * @param {BackupV1alpha1ApiGetBackupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BackupV1alpha1Api
   */
  getBackup(a, s) {
    return le(this.configuration).getBackup(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Backup
   * @param {BackupV1alpha1ApiListBackupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BackupV1alpha1Api
   */
  listBackup(a = {}, s) {
    return le(this.configuration).listBackup(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Backup
   * @param {BackupV1alpha1ApiPatchBackupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BackupV1alpha1Api
   */
  patchBackup(a, s) {
    return le(this.configuration).patchBackup(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Backup
   * @param {BackupV1alpha1ApiUpdateBackupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BackupV1alpha1Api
   */
  updateBackup(a, s) {
    return le(this.configuration).updateBackup(a.name, a.backup, s).then((n) => n(this.axios, this.basePath));
  }
}
const Dr = function(e) {
  return {
    /**
     * Create Category
     * @param {Category} [category] Fresh category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCategory: async (a, s = {}) => {
      const n = "/apis/content.halo.run/v1alpha1/categories", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Category
     * @param {string} name Name of category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCategory: async (a, s = {}) => {
      R("deleteCategory", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/categories/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Category
     * @param {string} name Name of category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategory: async (a, s = {}) => {
      R("getCategory", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/categories/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Category
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategory: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/content.halo.run/v1alpha1/categories", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Category
     * @param {string} name Name of category
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchCategory: async (a, s, n = {}) => {
      R("patchCategory", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/categories/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Category
     * @param {string} name Name of category
     * @param {Category} [category] Updated category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCategory: async (a, s, n = {}) => {
      R("updateCategory", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/categories/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, ne = function(e) {
  const a = Dr(e);
  return {
    /**
     * Create Category
     * @param {Category} [category] Fresh category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCategory(s, n) {
      var o, c;
      const l = await a.createCategory(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CategoryV1alpha1Api.createCategory"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Category
     * @param {string} name Name of category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteCategory(s, n) {
      var o, c;
      const l = await a.deleteCategory(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CategoryV1alpha1Api.deleteCategory"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Category
     * @param {string} name Name of category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCategory(s, n) {
      var o, c;
      const l = await a.getCategory(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CategoryV1alpha1Api.getCategory"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Category
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listCategory(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listCategory(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["CategoryV1alpha1Api.listCategory"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Category
     * @param {string} name Name of category
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchCategory(s, n, l) {
      var c, p;
      const r = await a.patchCategory(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["CategoryV1alpha1Api.patchCategory"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Category
     * @param {string} name Name of category
     * @param {Category} [category] Updated category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCategory(s, n, l) {
      var c, p;
      const r = await a.updateCategory(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["CategoryV1alpha1Api.updateCategory"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Hc = function(e, a, s) {
  const n = ne(e);
  return {
    /**
     * Create Category
     * @param {CategoryV1alpha1ApiCreateCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCategory(l = {}, r) {
      return n.createCategory(l.category, r).then((t) => t(s, a));
    },
    /**
     * Delete Category
     * @param {CategoryV1alpha1ApiDeleteCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCategory(l, r) {
      return n.deleteCategory(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Category
     * @param {CategoryV1alpha1ApiGetCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCategory(l, r) {
      return n.getCategory(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Category
     * @param {CategoryV1alpha1ApiListCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategory(l = {}, r) {
      return n.listCategory(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Category
     * @param {CategoryV1alpha1ApiPatchCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchCategory(l, r) {
      return n.patchCategory(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Category
     * @param {CategoryV1alpha1ApiUpdateCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCategory(l, r) {
      return n.updateCategory(l.name, l.category, r).then((t) => t(s, a));
    }
  };
};
class Nr extends U {
  /**
   * Create Category
   * @param {CategoryV1alpha1ApiCreateCategoryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1Api
   */
  createCategory(a = {}, s) {
    return ne(this.configuration).createCategory(a.category, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Category
   * @param {CategoryV1alpha1ApiDeleteCategoryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1Api
   */
  deleteCategory(a, s) {
    return ne(this.configuration).deleteCategory(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Category
   * @param {CategoryV1alpha1ApiGetCategoryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1Api
   */
  getCategory(a, s) {
    return ne(this.configuration).getCategory(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Category
   * @param {CategoryV1alpha1ApiListCategoryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1Api
   */
  listCategory(a = {}, s) {
    return ne(this.configuration).listCategory(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Category
   * @param {CategoryV1alpha1ApiPatchCategoryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1Api
   */
  patchCategory(a, s) {
    return ne(this.configuration).patchCategory(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Category
   * @param {CategoryV1alpha1ApiUpdateCategoryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1Api
   */
  updateCategory(a, s) {
    return ne(this.configuration).updateCategory(a.name, a.category, s).then((n) => n(this.axios, this.basePath));
  }
}
const Hr = function(e) {
  return {
    /**
     * Lists categories.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategories: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/api.content.halo.run/v1alpha1/categories", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Gets category by name.
     * @param {string} name Category name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoryByName: async (a, s = {}) => {
      R("queryCategoryByName", "name", a);
      const n = "/apis/api.content.halo.run/v1alpha1/categories/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Lists posts by category name.
     * @param {string} name Category name
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPostsByCategoryName: async (a, s, n, l, r, t, o = {}) => {
      R("queryPostsByCategoryName", "name", a);
      const c = "/apis/api.content.halo.run/v1alpha1/categories/{name}/posts".replace("{name}", encodeURIComponent(String(a))), p = new URL(c, O);
      let h;
      e && (h = e.baseOptions);
      const i = { method: "GET", ...h, ...o }, d = {}, b = {};
      P(i, e), await u(d, e), s !== void 0 && (b.page = s), n !== void 0 && (b.size = n), l && (b.labelSelector = l), r && (b.fieldSelector = r), t && (b.sort = t), v(p, b);
      let x = h && h.headers ? h.headers : {};
      return i.headers = { ...d, ...x, ...o.headers }, {
        url: S(p),
        options: i
      };
    }
  };
}, xa = function(e) {
  const a = Hr(e);
  return {
    /**
     * Lists categories.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryCategories(s, n, l, r, t, o) {
      var i, d;
      const c = await a.queryCategories(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["CategoryV1alpha1PublicApi.queryCategories"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Gets category by name.
     * @param {string} name Category name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryCategoryByName(s, n) {
      var o, c;
      const l = await a.queryCategoryByName(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CategoryV1alpha1PublicApi.queryCategoryByName"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Lists posts by category name.
     * @param {string} name Category name
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryPostsByCategoryName(s, n, l, r, t, o, c) {
      var d, b;
      const p = await a.queryPostsByCategoryName(s, n, l, r, t, o, c), h = (e == null ? void 0 : e.serverIndex) ?? 0, i = (b = (d = y["CategoryV1alpha1PublicApi.queryPostsByCategoryName"]) == null ? void 0 : d[h]) == null ? void 0 : b.url;
      return (x, w) => A(p, m, V, e)(x, i || w);
    }
  };
}, Mc = function(e, a, s) {
  const n = xa(e);
  return {
    /**
     * Lists categories.
     * @param {CategoryV1alpha1PublicApiQueryCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategories(l = {}, r) {
      return n.queryCategories(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Gets category by name.
     * @param {CategoryV1alpha1PublicApiQueryCategoryByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoryByName(l, r) {
      return n.queryCategoryByName(l.name, r).then((t) => t(s, a));
    },
    /**
     * Lists posts by category name.
     * @param {CategoryV1alpha1PublicApiQueryPostsByCategoryNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPostsByCategoryName(l, r) {
      return n.queryPostsByCategoryName(l.name, l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    }
  };
};
class Qc extends U {
  /**
   * Lists categories.
   * @param {CategoryV1alpha1PublicApiQueryCategoriesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1PublicApi
   */
  queryCategories(a = {}, s) {
    return xa(this.configuration).queryCategories(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Gets category by name.
   * @param {CategoryV1alpha1PublicApiQueryCategoryByNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1PublicApi
   */
  queryCategoryByName(a, s) {
    return xa(this.configuration).queryCategoryByName(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Lists posts by category name.
   * @param {CategoryV1alpha1PublicApiQueryPostsByCategoryNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryV1alpha1PublicApi
   */
  queryPostsByCategoryName(a, s) {
    return xa(this.configuration).queryPostsByCategoryName(a.name, a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
}
const Mr = function(e) {
  return {
    /**
     * Create Comment
     * @param {Comment} [comment] Fresh comment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createComment: async (a, s = {}) => {
      const n = "/apis/content.halo.run/v1alpha1/comments", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Comment
     * @param {string} name Name of comment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteComment: async (a, s = {}) => {
      R("deleteComment", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/comments/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Comment
     * @param {string} name Name of comment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getComment: async (a, s = {}) => {
      R("getComment", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/comments/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Comment
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComment: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/content.halo.run/v1alpha1/comments", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Comment
     * @param {string} name Name of comment
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchComment: async (a, s, n = {}) => {
      R("patchComment", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/comments/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Comment
     * @param {string} name Name of comment
     * @param {Comment} [comment] Updated comment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateComment: async (a, s, n = {}) => {
      R("updateComment", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/comments/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, oe = function(e) {
  const a = Mr(e);
  return {
    /**
     * Create Comment
     * @param {Comment} [comment] Fresh comment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createComment(s, n) {
      var o, c;
      const l = await a.createComment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CommentV1alpha1Api.createComment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Comment
     * @param {string} name Name of comment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteComment(s, n) {
      var o, c;
      const l = await a.deleteComment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CommentV1alpha1Api.deleteComment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Comment
     * @param {string} name Name of comment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getComment(s, n) {
      var o, c;
      const l = await a.getComment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CommentV1alpha1Api.getComment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Comment
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listComment(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listComment(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["CommentV1alpha1Api.listComment"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Comment
     * @param {string} name Name of comment
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchComment(s, n, l) {
      var c, p;
      const r = await a.patchComment(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["CommentV1alpha1Api.patchComment"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Comment
     * @param {string} name Name of comment
     * @param {Comment} [comment] Updated comment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateComment(s, n, l) {
      var c, p;
      const r = await a.updateComment(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["CommentV1alpha1Api.updateComment"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, kc = function(e, a, s) {
  const n = oe(e);
  return {
    /**
     * Create Comment
     * @param {CommentV1alpha1ApiCreateCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createComment(l = {}, r) {
      return n.createComment(l.comment, r).then((t) => t(s, a));
    },
    /**
     * Delete Comment
     * @param {CommentV1alpha1ApiDeleteCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteComment(l, r) {
      return n.deleteComment(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Comment
     * @param {CommentV1alpha1ApiGetCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getComment(l, r) {
      return n.getComment(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Comment
     * @param {CommentV1alpha1ApiListCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComment(l = {}, r) {
      return n.listComment(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Comment
     * @param {CommentV1alpha1ApiPatchCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchComment(l, r) {
      return n.patchComment(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Comment
     * @param {CommentV1alpha1ApiUpdateCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateComment(l, r) {
      return n.updateComment(l.name, l.comment, r).then((t) => t(s, a));
    }
  };
};
class Qr extends U {
  /**
   * Create Comment
   * @param {CommentV1alpha1ApiCreateCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1Api
   */
  createComment(a = {}, s) {
    return oe(this.configuration).createComment(a.comment, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Comment
   * @param {CommentV1alpha1ApiDeleteCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1Api
   */
  deleteComment(a, s) {
    return oe(this.configuration).deleteComment(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Comment
   * @param {CommentV1alpha1ApiGetCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1Api
   */
  getComment(a, s) {
    return oe(this.configuration).getComment(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Comment
   * @param {CommentV1alpha1ApiListCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1Api
   */
  listComment(a = {}, s) {
    return oe(this.configuration).listComment(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Comment
   * @param {CommentV1alpha1ApiPatchCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1Api
   */
  patchComment(a, s) {
    return oe(this.configuration).patchComment(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Comment
   * @param {CommentV1alpha1ApiUpdateCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1Api
   */
  updateComment(a, s) {
    return oe(this.configuration).updateComment(a.name, a.comment, s).then((n) => n(this.axios, this.basePath));
  }
}
const kr = function(e) {
  return {
    /**
     * Create a comment.
     * @param {CommentRequest} commentRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createComment: async (a, s = {}) => {
      R("createComment", "commentRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/comments", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Create a reply.
     * @param {string} name 
     * @param {ReplyRequest} replyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReply: async (a, s, n = {}) => {
      R("createReply", "name", a), R("createReply", "replyRequest", s);
      const l = "/apis/api.console.halo.run/v1alpha1/comments/{name}/reply".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * List comments.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [keyword] Comments filtered by keyword.
     * @param {string} [ownerKind] Commenter kind.
     * @param {string} [ownerName] Commenter name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComments: async (a, s, n, l, r, t, o, c, p = {}) => {
      const h = "/apis/api.console.halo.run/v1alpha1/comments", i = new URL(h, O);
      let d;
      e && (d = e.baseOptions);
      const b = { method: "GET", ...d, ...p }, x = {}, w = {};
      P(b, e), await u(x, e), a !== void 0 && (w.page = a), s !== void 0 && (w.size = s), n && (w.labelSelector = n), l && (w.fieldSelector = l), r && (w.sort = r), t !== void 0 && (w.keyword = t), o !== void 0 && (w.ownerKind = o), c !== void 0 && (w.ownerName = c), v(i, w);
      let T = d && d.headers ? d.headers : {};
      return b.headers = { ...x, ...T, ...p.headers }, {
        url: S(i),
        options: b
      };
    }
  };
}, Ca = function(e) {
  const a = kr(e);
  return {
    /**
     * Create a comment.
     * @param {CommentRequest} commentRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createComment(s, n) {
      var o, c;
      const l = await a.createComment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CommentV1alpha1ConsoleApi.createComment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Create a reply.
     * @param {string} name 
     * @param {ReplyRequest} replyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReply(s, n, l) {
      var c, p;
      const r = await a.createReply(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["CommentV1alpha1ConsoleApi.createReply"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * List comments.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [keyword] Comments filtered by keyword.
     * @param {string} [ownerKind] Commenter kind.
     * @param {string} [ownerName] Commenter name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listComments(s, n, l, r, t, o, c, p, h) {
      var x, w;
      const i = await a.listComments(s, n, l, r, t, o, c, p, h), d = (e == null ? void 0 : e.serverIndex) ?? 0, b = (w = (x = y["CommentV1alpha1ConsoleApi.listComments"]) == null ? void 0 : x[d]) == null ? void 0 : w.url;
      return (T, F) => A(i, m, V, e)(T, b || F);
    }
  };
}, $c = function(e, a, s) {
  const n = Ca(e);
  return {
    /**
     * Create a comment.
     * @param {CommentV1alpha1ConsoleApiCreateCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createComment(l, r) {
      return n.createComment(l.commentRequest, r).then((t) => t(s, a));
    },
    /**
     * Create a reply.
     * @param {CommentV1alpha1ConsoleApiCreateReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReply(l, r) {
      return n.createReply(l.name, l.replyRequest, r).then((t) => t(s, a));
    },
    /**
     * List comments.
     * @param {CommentV1alpha1ConsoleApiListCommentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComments(l = {}, r) {
      return n.listComments(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.keyword, l.ownerKind, l.ownerName, r).then((t) => t(s, a));
    }
  };
};
class $r extends U {
  /**
   * Create a comment.
   * @param {CommentV1alpha1ConsoleApiCreateCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1ConsoleApi
   */
  createComment(a, s) {
    return Ca(this.configuration).createComment(a.commentRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Create a reply.
   * @param {CommentV1alpha1ConsoleApiCreateReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1ConsoleApi
   */
  createReply(a, s) {
    return Ca(this.configuration).createReply(a.name, a.replyRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List comments.
   * @param {CommentV1alpha1ConsoleApiListCommentsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1ConsoleApi
   */
  listComments(a = {}, s) {
    return Ca(this.configuration).listComments(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.keyword, a.ownerKind, a.ownerName, s).then((n) => n(this.axios, this.basePath));
  }
}
const Gr = function(e) {
  return {
    /**
     * Create a comment.
     * @param {CommentRequest} commentRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createComment1: async (a, s = {}) => {
      R("createComment1", "commentRequest", a);
      const n = "/apis/api.halo.run/v1alpha1/comments", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Create a reply.
     * @param {string} name 
     * @param {ReplyRequest} replyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReply1: async (a, s, n = {}) => {
      R("createReply1", "name", a), R("createReply1", "replyRequest", s);
      const l = "/apis/api.halo.run/v1alpha1/comments/{name}/reply".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Get a comment.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getComment: async (a, s = {}) => {
      R("getComment", "name", a);
      const n = "/apis/api.halo.run/v1alpha1/comments/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List comment replies.
     * @param {string} name 
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCommentReplies: async (a, s, n, l = {}) => {
      R("listCommentReplies", "name", a);
      const r = "/apis/api.halo.run/v1alpha1/comments/{name}/reply".replace("{name}", encodeURIComponent(String(a))), t = new URL(r, O);
      let o;
      e && (o = e.baseOptions);
      const c = { method: "GET", ...o, ...l }, p = {}, h = {};
      P(c, e), await u(p, e), s !== void 0 && (h.page = s), n !== void 0 && (h.size = n), v(t, h);
      let i = o && o.headers ? o.headers : {};
      return c.headers = { ...p, ...i, ...l.headers }, {
        url: S(t),
        options: c
      };
    },
    /**
     * List comments.
     * @param {string} version The comment subject version.
     * @param {string} kind The comment subject kind.
     * @param {string} name The comment subject name.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [group] The comment subject group.
     * @param {boolean} [withReplies] Whether to include replies. Default is false.
     * @param {number} [replySize] Reply size of the comment, default is 10, only works when withReplies is true.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComments1: async (a, s, n, l, r, t, o, c, p, h = {}) => {
      R("listComments1", "version", a), R("listComments1", "kind", s), R("listComments1", "name", n);
      const i = "/apis/api.halo.run/v1alpha1/comments", d = new URL(i, O);
      let b;
      e && (b = e.baseOptions);
      const x = { method: "GET", ...b, ...h }, w = {}, T = {};
      P(x, e), await u(w, e), l !== void 0 && (T.page = l), r !== void 0 && (T.size = r), t && (T.sort = t), o !== void 0 && (T.group = o), a !== void 0 && (T.version = a), s !== void 0 && (T.kind = s), n !== void 0 && (T.name = n), c !== void 0 && (T.withReplies = c), p !== void 0 && (T.replySize = p), v(d, T);
      let F = b && b.headers ? b.headers : {};
      return x.headers = { ...w, ...F, ...h.headers }, {
        url: S(d),
        options: x
      };
    }
  };
}, fe = function(e) {
  const a = Gr(e);
  return {
    /**
     * Create a comment.
     * @param {CommentRequest} commentRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createComment1(s, n) {
      var o, c;
      const l = await a.createComment1(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CommentV1alpha1PublicApi.createComment1"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Create a reply.
     * @param {string} name 
     * @param {ReplyRequest} replyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReply1(s, n, l) {
      var c, p;
      const r = await a.createReply1(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["CommentV1alpha1PublicApi.createReply1"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Get a comment.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getComment(s, n) {
      var o, c;
      const l = await a.getComment(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CommentV1alpha1PublicApi.getComment"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List comment replies.
     * @param {string} name 
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listCommentReplies(s, n, l, r) {
      var p, h;
      const t = await a.listCommentReplies(s, n, l, r), o = (e == null ? void 0 : e.serverIndex) ?? 0, c = (h = (p = y["CommentV1alpha1PublicApi.listCommentReplies"]) == null ? void 0 : p[o]) == null ? void 0 : h.url;
      return (i, d) => A(t, m, V, e)(i, c || d);
    },
    /**
     * List comments.
     * @param {string} version The comment subject version.
     * @param {string} kind The comment subject kind.
     * @param {string} name The comment subject name.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [group] The comment subject group.
     * @param {boolean} [withReplies] Whether to include replies. Default is false.
     * @param {number} [replySize] Reply size of the comment, default is 10, only works when withReplies is true.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listComments1(s, n, l, r, t, o, c, p, h, i) {
      var w, T;
      const d = await a.listComments1(s, n, l, r, t, o, c, p, h, i), b = (e == null ? void 0 : e.serverIndex) ?? 0, x = (T = (w = y["CommentV1alpha1PublicApi.listComments1"]) == null ? void 0 : w[b]) == null ? void 0 : T.url;
      return (F, k) => A(d, m, V, e)(F, x || k);
    }
  };
}, Gc = function(e, a, s) {
  const n = fe(e);
  return {
    /**
     * Create a comment.
     * @param {CommentV1alpha1PublicApiCreateComment1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createComment1(l, r) {
      return n.createComment1(l.commentRequest, r).then((t) => t(s, a));
    },
    /**
     * Create a reply.
     * @param {CommentV1alpha1PublicApiCreateReply1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReply1(l, r) {
      return n.createReply1(l.name, l.replyRequest, r).then((t) => t(s, a));
    },
    /**
     * Get a comment.
     * @param {CommentV1alpha1PublicApiGetCommentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getComment(l, r) {
      return n.getComment(l.name, r).then((t) => t(s, a));
    },
    /**
     * List comment replies.
     * @param {CommentV1alpha1PublicApiListCommentRepliesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCommentReplies(l, r) {
      return n.listCommentReplies(l.name, l.page, l.size, r).then((t) => t(s, a));
    },
    /**
     * List comments.
     * @param {CommentV1alpha1PublicApiListComments1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listComments1(l, r) {
      return n.listComments1(l.version, l.kind, l.name, l.page, l.size, l.sort, l.group, l.withReplies, l.replySize, r).then((t) => t(s, a));
    }
  };
};
class zr extends U {
  /**
   * Create a comment.
   * @param {CommentV1alpha1PublicApiCreateComment1Request} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1PublicApi
   */
  createComment1(a, s) {
    return fe(this.configuration).createComment1(a.commentRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Create a reply.
   * @param {CommentV1alpha1PublicApiCreateReply1Request} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1PublicApi
   */
  createReply1(a, s) {
    return fe(this.configuration).createReply1(a.name, a.replyRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get a comment.
   * @param {CommentV1alpha1PublicApiGetCommentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1PublicApi
   */
  getComment(a, s) {
    return fe(this.configuration).getComment(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List comment replies.
   * @param {CommentV1alpha1PublicApiListCommentRepliesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1PublicApi
   */
  listCommentReplies(a, s) {
    return fe(this.configuration).listCommentReplies(a.name, a.page, a.size, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List comments.
   * @param {CommentV1alpha1PublicApiListComments1Request} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CommentV1alpha1PublicApi
   */
  listComments1(a, s) {
    return fe(this.configuration).listComments1(a.version, a.kind, a.name, a.page, a.size, a.sort, a.group, a.withReplies, a.replySize, s).then((n) => n(this.axios, this.basePath));
  }
}
const _r = function(e) {
  return {
    /**
     * Create ConfigMap
     * @param {ConfigMap} [configMap] Fresh configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createConfigMap: async (a, s = {}) => {
      const n = "/api/v1alpha1/configmaps", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete ConfigMap
     * @param {string} name Name of configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteConfigMap: async (a, s = {}) => {
      R("deleteConfigMap", "name", a);
      const n = "/api/v1alpha1/configmaps/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get ConfigMap
     * @param {string} name Name of configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigMap: async (a, s = {}) => {
      R("getConfigMap", "name", a);
      const n = "/api/v1alpha1/configmaps/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List ConfigMap
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listConfigMap: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/configmaps", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch ConfigMap
     * @param {string} name Name of configmap
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchConfigMap: async (a, s, n = {}) => {
      R("patchConfigMap", "name", a);
      const l = "/api/v1alpha1/configmaps/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update ConfigMap
     * @param {string} name Name of configmap
     * @param {ConfigMap} [configMap] Updated configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateConfigMap: async (a, s, n = {}) => {
      R("updateConfigMap", "name", a);
      const l = "/api/v1alpha1/configmaps/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, ce = function(e) {
  const a = _r(e);
  return {
    /**
     * Create ConfigMap
     * @param {ConfigMap} [configMap] Fresh configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createConfigMap(s, n) {
      var o, c;
      const l = await a.createConfigMap(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ConfigMapV1alpha1Api.createConfigMap"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete ConfigMap
     * @param {string} name Name of configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteConfigMap(s, n) {
      var o, c;
      const l = await a.deleteConfigMap(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ConfigMapV1alpha1Api.deleteConfigMap"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get ConfigMap
     * @param {string} name Name of configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getConfigMap(s, n) {
      var o, c;
      const l = await a.getConfigMap(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ConfigMapV1alpha1Api.getConfigMap"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List ConfigMap
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listConfigMap(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listConfigMap(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ConfigMapV1alpha1Api.listConfigMap"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch ConfigMap
     * @param {string} name Name of configmap
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchConfigMap(s, n, l) {
      var c, p;
      const r = await a.patchConfigMap(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ConfigMapV1alpha1Api.patchConfigMap"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update ConfigMap
     * @param {string} name Name of configmap
     * @param {ConfigMap} [configMap] Updated configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateConfigMap(s, n, l) {
      var c, p;
      const r = await a.updateConfigMap(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ConfigMapV1alpha1Api.updateConfigMap"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, zc = function(e, a, s) {
  const n = ce(e);
  return {
    /**
     * Create ConfigMap
     * @param {ConfigMapV1alpha1ApiCreateConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createConfigMap(l = {}, r) {
      return n.createConfigMap(l.configMap, r).then((t) => t(s, a));
    },
    /**
     * Delete ConfigMap
     * @param {ConfigMapV1alpha1ApiDeleteConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteConfigMap(l, r) {
      return n.deleteConfigMap(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get ConfigMap
     * @param {ConfigMapV1alpha1ApiGetConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getConfigMap(l, r) {
      return n.getConfigMap(l.name, r).then((t) => t(s, a));
    },
    /**
     * List ConfigMap
     * @param {ConfigMapV1alpha1ApiListConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listConfigMap(l = {}, r) {
      return n.listConfigMap(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch ConfigMap
     * @param {ConfigMapV1alpha1ApiPatchConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchConfigMap(l, r) {
      return n.patchConfigMap(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update ConfigMap
     * @param {ConfigMapV1alpha1ApiUpdateConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateConfigMap(l, r) {
      return n.updateConfigMap(l.name, l.configMap, r).then((t) => t(s, a));
    }
  };
};
class Jr extends U {
  /**
   * Create ConfigMap
   * @param {ConfigMapV1alpha1ApiCreateConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigMapV1alpha1Api
   */
  createConfigMap(a = {}, s) {
    return ce(this.configuration).createConfigMap(a.configMap, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete ConfigMap
   * @param {ConfigMapV1alpha1ApiDeleteConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigMapV1alpha1Api
   */
  deleteConfigMap(a, s) {
    return ce(this.configuration).deleteConfigMap(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get ConfigMap
   * @param {ConfigMapV1alpha1ApiGetConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigMapV1alpha1Api
   */
  getConfigMap(a, s) {
    return ce(this.configuration).getConfigMap(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List ConfigMap
   * @param {ConfigMapV1alpha1ApiListConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigMapV1alpha1Api
   */
  listConfigMap(a = {}, s) {
    return ce(this.configuration).listConfigMap(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch ConfigMap
   * @param {ConfigMapV1alpha1ApiPatchConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigMapV1alpha1Api
   */
  patchConfigMap(a, s) {
    return ce(this.configuration).patchConfigMap(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update ConfigMap
   * @param {ConfigMapV1alpha1ApiUpdateConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigMapV1alpha1Api
   */
  updateConfigMap(a, s) {
    return ce(this.configuration).updateConfigMap(a.name, a.configMap, s).then((n) => n(this.axios, this.basePath));
  }
}
const Wr = function(e) {
  return {
    /**
     * Create Counter
     * @param {Counter} [counter] Fresh counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCounter: async (a, s = {}) => {
      const n = "/apis/metrics.halo.run/v1alpha1/counters", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Counter
     * @param {string} name Name of counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCounter: async (a, s = {}) => {
      R("deleteCounter", "name", a);
      const n = "/apis/metrics.halo.run/v1alpha1/counters/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Counter
     * @param {string} name Name of counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCounter: async (a, s = {}) => {
      R("getCounter", "name", a);
      const n = "/apis/metrics.halo.run/v1alpha1/counters/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Counter
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCounter: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/metrics.halo.run/v1alpha1/counters", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Counter
     * @param {string} name Name of counter
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchCounter: async (a, s, n = {}) => {
      R("patchCounter", "name", a);
      const l = "/apis/metrics.halo.run/v1alpha1/counters/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Counter
     * @param {string} name Name of counter
     * @param {Counter} [counter] Updated counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCounter: async (a, s, n = {}) => {
      R("updateCounter", "name", a);
      const l = "/apis/metrics.halo.run/v1alpha1/counters/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, pe = function(e) {
  const a = Wr(e);
  return {
    /**
     * Create Counter
     * @param {Counter} [counter] Fresh counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCounter(s, n) {
      var o, c;
      const l = await a.createCounter(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CounterV1alpha1Api.createCounter"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Counter
     * @param {string} name Name of counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteCounter(s, n) {
      var o, c;
      const l = await a.deleteCounter(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CounterV1alpha1Api.deleteCounter"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Counter
     * @param {string} name Name of counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCounter(s, n) {
      var o, c;
      const l = await a.getCounter(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["CounterV1alpha1Api.getCounter"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Counter
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listCounter(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listCounter(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["CounterV1alpha1Api.listCounter"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Counter
     * @param {string} name Name of counter
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchCounter(s, n, l) {
      var c, p;
      const r = await a.patchCounter(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["CounterV1alpha1Api.patchCounter"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Counter
     * @param {string} name Name of counter
     * @param {Counter} [counter] Updated counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCounter(s, n, l) {
      var c, p;
      const r = await a.updateCounter(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["CounterV1alpha1Api.updateCounter"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, _c = function(e, a, s) {
  const n = pe(e);
  return {
    /**
     * Create Counter
     * @param {CounterV1alpha1ApiCreateCounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCounter(l = {}, r) {
      return n.createCounter(l.counter, r).then((t) => t(s, a));
    },
    /**
     * Delete Counter
     * @param {CounterV1alpha1ApiDeleteCounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCounter(l, r) {
      return n.deleteCounter(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Counter
     * @param {CounterV1alpha1ApiGetCounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCounter(l, r) {
      return n.getCounter(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Counter
     * @param {CounterV1alpha1ApiListCounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCounter(l = {}, r) {
      return n.listCounter(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Counter
     * @param {CounterV1alpha1ApiPatchCounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchCounter(l, r) {
      return n.patchCounter(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Counter
     * @param {CounterV1alpha1ApiUpdateCounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCounter(l, r) {
      return n.updateCounter(l.name, l.counter, r).then((t) => t(s, a));
    }
  };
};
class Kr extends U {
  /**
   * Create Counter
   * @param {CounterV1alpha1ApiCreateCounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CounterV1alpha1Api
   */
  createCounter(a = {}, s) {
    return pe(this.configuration).createCounter(a.counter, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Counter
   * @param {CounterV1alpha1ApiDeleteCounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CounterV1alpha1Api
   */
  deleteCounter(a, s) {
    return pe(this.configuration).deleteCounter(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Counter
   * @param {CounterV1alpha1ApiGetCounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CounterV1alpha1Api
   */
  getCounter(a, s) {
    return pe(this.configuration).getCounter(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Counter
   * @param {CounterV1alpha1ApiListCounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CounterV1alpha1Api
   */
  listCounter(a = {}, s) {
    return pe(this.configuration).listCounter(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Counter
   * @param {CounterV1alpha1ApiPatchCounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CounterV1alpha1Api
   */
  patchCounter(a, s) {
    return pe(this.configuration).patchCounter(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Counter
   * @param {CounterV1alpha1ApiUpdateCounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CounterV1alpha1Api
   */
  updateCounter(a, s) {
    return pe(this.configuration).updateCounter(a.name, a.counter, s).then((n) => n(this.axios, this.basePath));
  }
}
const Xr = function(e) {
  return {
    /**
     * Create Device
     * @param {Device} [device] Fresh device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDevice: async (a, s = {}) => {
      const n = "/apis/security.halo.run/v1alpha1/devices", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Device
     * @param {string} name Name of device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDevice: async (a, s = {}) => {
      R("deleteDevice", "name", a);
      const n = "/apis/security.halo.run/v1alpha1/devices/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Device
     * @param {string} name Name of device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDevice: async (a, s = {}) => {
      R("getDevice", "name", a);
      const n = "/apis/security.halo.run/v1alpha1/devices/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Device
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDevice: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/security.halo.run/v1alpha1/devices", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Device
     * @param {string} name Name of device
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchDevice: async (a, s, n = {}) => {
      R("patchDevice", "name", a);
      const l = "/apis/security.halo.run/v1alpha1/devices/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Device
     * @param {string} name Name of device
     * @param {Device} [device] Updated device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDevice: async (a, s, n = {}) => {
      R("updateDevice", "name", a);
      const l = "/apis/security.halo.run/v1alpha1/devices/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, he = function(e) {
  const a = Xr(e);
  return {
    /**
     * Create Device
     * @param {Device} [device] Fresh device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createDevice(s, n) {
      var o, c;
      const l = await a.createDevice(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["DeviceV1alpha1Api.createDevice"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Device
     * @param {string} name Name of device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteDevice(s, n) {
      var o, c;
      const l = await a.deleteDevice(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["DeviceV1alpha1Api.deleteDevice"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Device
     * @param {string} name Name of device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDevice(s, n) {
      var o, c;
      const l = await a.getDevice(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["DeviceV1alpha1Api.getDevice"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Device
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listDevice(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listDevice(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["DeviceV1alpha1Api.listDevice"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Device
     * @param {string} name Name of device
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchDevice(s, n, l) {
      var c, p;
      const r = await a.patchDevice(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["DeviceV1alpha1Api.patchDevice"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Device
     * @param {string} name Name of device
     * @param {Device} [device] Updated device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDevice(s, n, l) {
      var c, p;
      const r = await a.updateDevice(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["DeviceV1alpha1Api.updateDevice"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Jc = function(e, a, s) {
  const n = he(e);
  return {
    /**
     * Create Device
     * @param {DeviceV1alpha1ApiCreateDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDevice(l = {}, r) {
      return n.createDevice(l.device, r).then((t) => t(s, a));
    },
    /**
     * Delete Device
     * @param {DeviceV1alpha1ApiDeleteDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDevice(l, r) {
      return n.deleteDevice(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Device
     * @param {DeviceV1alpha1ApiGetDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDevice(l, r) {
      return n.getDevice(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Device
     * @param {DeviceV1alpha1ApiListDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDevice(l = {}, r) {
      return n.listDevice(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Device
     * @param {DeviceV1alpha1ApiPatchDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchDevice(l, r) {
      return n.patchDevice(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Device
     * @param {DeviceV1alpha1ApiUpdateDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDevice(l, r) {
      return n.updateDevice(l.name, l.device, r).then((t) => t(s, a));
    }
  };
};
class Wc extends U {
  /**
   * Create Device
   * @param {DeviceV1alpha1ApiCreateDeviceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeviceV1alpha1Api
   */
  createDevice(a = {}, s) {
    return he(this.configuration).createDevice(a.device, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Device
   * @param {DeviceV1alpha1ApiDeleteDeviceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeviceV1alpha1Api
   */
  deleteDevice(a, s) {
    return he(this.configuration).deleteDevice(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Device
   * @param {DeviceV1alpha1ApiGetDeviceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeviceV1alpha1Api
   */
  getDevice(a, s) {
    return he(this.configuration).getDevice(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Device
   * @param {DeviceV1alpha1ApiListDeviceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeviceV1alpha1Api
   */
  listDevice(a = {}, s) {
    return he(this.configuration).listDevice(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Device
   * @param {DeviceV1alpha1ApiPatchDeviceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeviceV1alpha1Api
   */
  patchDevice(a, s) {
    return he(this.configuration).patchDevice(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Device
   * @param {DeviceV1alpha1ApiUpdateDeviceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeviceV1alpha1Api
   */
  updateDevice(a, s) {
    return he(this.configuration).updateDevice(a.name, a.device, s).then((n) => n(this.axios, this.basePath));
  }
}
const Yr = function(e) {
  return {
    /**
     * List all user devices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDevices: async (a = {}) => {
      const s = "/apis/uc.api.security.halo.run/v1alpha1/devices", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Revoke a own device
     * @param {string} deviceId Device ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokeDevice: async (a, s = {}) => {
      R("revokeDevice", "deviceId", a);
      const n = "/apis/uc.api.security.halo.run/v1alpha1/devices/{deviceId}".replace("{deviceId}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    }
  };
}, ga = function(e) {
  const a = Yr(e);
  return {
    /**
     * List all user devices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listDevices(s) {
      var t, o;
      const n = await a.listDevices(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["DeviceV1alpha1UcApi.listDevices"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Revoke a own device
     * @param {string} deviceId Device ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async revokeDevice(s, n) {
      var o, c;
      const l = await a.revokeDevice(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["DeviceV1alpha1UcApi.revokeDevice"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    }
  };
}, Kc = function(e, a, s) {
  const n = ga(e);
  return {
    /**
     * List all user devices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDevices(l) {
      return n.listDevices(l).then((r) => r(s, a));
    },
    /**
     * Revoke a own device
     * @param {DeviceV1alpha1UcApiRevokeDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokeDevice(l, r) {
      return n.revokeDevice(l.deviceId, r).then((t) => t(s, a));
    }
  };
};
class Zr extends U {
  /**
   * List all user devices
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeviceV1alpha1UcApi
   */
  listDevices(a) {
    return ga(this.configuration).listDevices(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Revoke a own device
   * @param {DeviceV1alpha1UcApiRevokeDeviceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DeviceV1alpha1UcApi
   */
  revokeDevice(a, s) {
    return ga(this.configuration).revokeDevice(a.deviceId, s).then((n) => n(this.axios, this.basePath));
  }
}
const qr = function(e) {
  return {
    /**
     * Create ExtensionDefinition
     * @param {ExtensionDefinition} [extensionDefinition] Fresh extensiondefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createExtensionDefinition: async (a, s = {}) => {
      const n = "/apis/plugin.halo.run/v1alpha1/extensiondefinitions", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete ExtensionDefinition
     * @param {string} name Name of extensiondefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteExtensionDefinition: async (a, s = {}) => {
      R("deleteExtensionDefinition", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/extensiondefinitions/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get ExtensionDefinition
     * @param {string} name Name of extensiondefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExtensionDefinition: async (a, s = {}) => {
      R("getExtensionDefinition", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/extensiondefinitions/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List ExtensionDefinition
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listExtensionDefinition: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/plugin.halo.run/v1alpha1/extensiondefinitions", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch ExtensionDefinition
     * @param {string} name Name of extensiondefinition
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchExtensionDefinition: async (a, s, n = {}) => {
      R("patchExtensionDefinition", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/extensiondefinitions/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update ExtensionDefinition
     * @param {string} name Name of extensiondefinition
     * @param {ExtensionDefinition} [extensionDefinition] Updated extensiondefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateExtensionDefinition: async (a, s, n = {}) => {
      R("updateExtensionDefinition", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/extensiondefinitions/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, ie = function(e) {
  const a = qr(e);
  return {
    /**
     * Create ExtensionDefinition
     * @param {ExtensionDefinition} [extensionDefinition] Fresh extensiondefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createExtensionDefinition(s, n) {
      var o, c;
      const l = await a.createExtensionDefinition(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ExtensionDefinitionV1alpha1Api.createExtensionDefinition"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete ExtensionDefinition
     * @param {string} name Name of extensiondefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteExtensionDefinition(s, n) {
      var o, c;
      const l = await a.deleteExtensionDefinition(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ExtensionDefinitionV1alpha1Api.deleteExtensionDefinition"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get ExtensionDefinition
     * @param {string} name Name of extensiondefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getExtensionDefinition(s, n) {
      var o, c;
      const l = await a.getExtensionDefinition(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ExtensionDefinitionV1alpha1Api.getExtensionDefinition"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List ExtensionDefinition
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listExtensionDefinition(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listExtensionDefinition(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ExtensionDefinitionV1alpha1Api.listExtensionDefinition"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch ExtensionDefinition
     * @param {string} name Name of extensiondefinition
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchExtensionDefinition(s, n, l) {
      var c, p;
      const r = await a.patchExtensionDefinition(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ExtensionDefinitionV1alpha1Api.patchExtensionDefinition"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update ExtensionDefinition
     * @param {string} name Name of extensiondefinition
     * @param {ExtensionDefinition} [extensionDefinition] Updated extensiondefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateExtensionDefinition(s, n, l) {
      var c, p;
      const r = await a.updateExtensionDefinition(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ExtensionDefinitionV1alpha1Api.updateExtensionDefinition"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Xc = function(e, a, s) {
  const n = ie(e);
  return {
    /**
     * Create ExtensionDefinition
     * @param {ExtensionDefinitionV1alpha1ApiCreateExtensionDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createExtensionDefinition(l = {}, r) {
      return n.createExtensionDefinition(l.extensionDefinition, r).then((t) => t(s, a));
    },
    /**
     * Delete ExtensionDefinition
     * @param {ExtensionDefinitionV1alpha1ApiDeleteExtensionDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteExtensionDefinition(l, r) {
      return n.deleteExtensionDefinition(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get ExtensionDefinition
     * @param {ExtensionDefinitionV1alpha1ApiGetExtensionDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExtensionDefinition(l, r) {
      return n.getExtensionDefinition(l.name, r).then((t) => t(s, a));
    },
    /**
     * List ExtensionDefinition
     * @param {ExtensionDefinitionV1alpha1ApiListExtensionDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listExtensionDefinition(l = {}, r) {
      return n.listExtensionDefinition(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch ExtensionDefinition
     * @param {ExtensionDefinitionV1alpha1ApiPatchExtensionDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchExtensionDefinition(l, r) {
      return n.patchExtensionDefinition(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update ExtensionDefinition
     * @param {ExtensionDefinitionV1alpha1ApiUpdateExtensionDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateExtensionDefinition(l, r) {
      return n.updateExtensionDefinition(l.name, l.extensionDefinition, r).then((t) => t(s, a));
    }
  };
};
class gr extends U {
  /**
   * Create ExtensionDefinition
   * @param {ExtensionDefinitionV1alpha1ApiCreateExtensionDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionDefinitionV1alpha1Api
   */
  createExtensionDefinition(a = {}, s) {
    return ie(this.configuration).createExtensionDefinition(a.extensionDefinition, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete ExtensionDefinition
   * @param {ExtensionDefinitionV1alpha1ApiDeleteExtensionDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionDefinitionV1alpha1Api
   */
  deleteExtensionDefinition(a, s) {
    return ie(this.configuration).deleteExtensionDefinition(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get ExtensionDefinition
   * @param {ExtensionDefinitionV1alpha1ApiGetExtensionDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionDefinitionV1alpha1Api
   */
  getExtensionDefinition(a, s) {
    return ie(this.configuration).getExtensionDefinition(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List ExtensionDefinition
   * @param {ExtensionDefinitionV1alpha1ApiListExtensionDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionDefinitionV1alpha1Api
   */
  listExtensionDefinition(a = {}, s) {
    return ie(this.configuration).listExtensionDefinition(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch ExtensionDefinition
   * @param {ExtensionDefinitionV1alpha1ApiPatchExtensionDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionDefinitionV1alpha1Api
   */
  patchExtensionDefinition(a, s) {
    return ie(this.configuration).patchExtensionDefinition(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update ExtensionDefinition
   * @param {ExtensionDefinitionV1alpha1ApiUpdateExtensionDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionDefinitionV1alpha1Api
   */
  updateExtensionDefinition(a, s) {
    return ie(this.configuration).updateExtensionDefinition(a.name, a.extensionDefinition, s).then((n) => n(this.axios, this.basePath));
  }
}
const fr = function(e) {
  return {
    /**
     * Create ExtensionPointDefinition
     * @param {ExtensionPointDefinition} [extensionPointDefinition] Fresh extensionpointdefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createExtensionPointDefinition: async (a, s = {}) => {
      const n = "/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete ExtensionPointDefinition
     * @param {string} name Name of extensionpointdefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteExtensionPointDefinition: async (a, s = {}) => {
      R("deleteExtensionPointDefinition", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get ExtensionPointDefinition
     * @param {string} name Name of extensionpointdefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExtensionPointDefinition: async (a, s = {}) => {
      R("getExtensionPointDefinition", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List ExtensionPointDefinition
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listExtensionPointDefinition: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch ExtensionPointDefinition
     * @param {string} name Name of extensionpointdefinition
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchExtensionPointDefinition: async (a, s, n = {}) => {
      R("patchExtensionPointDefinition", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update ExtensionPointDefinition
     * @param {string} name Name of extensionpointdefinition
     * @param {ExtensionPointDefinition} [extensionPointDefinition] Updated extensionpointdefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateExtensionPointDefinition: async (a, s, n = {}) => {
      R("updateExtensionPointDefinition", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, de = function(e) {
  const a = fr(e);
  return {
    /**
     * Create ExtensionPointDefinition
     * @param {ExtensionPointDefinition} [extensionPointDefinition] Fresh extensionpointdefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createExtensionPointDefinition(s, n) {
      var o, c;
      const l = await a.createExtensionPointDefinition(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ExtensionPointDefinitionV1alpha1Api.createExtensionPointDefinition"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete ExtensionPointDefinition
     * @param {string} name Name of extensionpointdefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteExtensionPointDefinition(s, n) {
      var o, c;
      const l = await a.deleteExtensionPointDefinition(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ExtensionPointDefinitionV1alpha1Api.deleteExtensionPointDefinition"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get ExtensionPointDefinition
     * @param {string} name Name of extensionpointdefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getExtensionPointDefinition(s, n) {
      var o, c;
      const l = await a.getExtensionPointDefinition(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ExtensionPointDefinitionV1alpha1Api.getExtensionPointDefinition"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List ExtensionPointDefinition
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listExtensionPointDefinition(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listExtensionPointDefinition(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ExtensionPointDefinitionV1alpha1Api.listExtensionPointDefinition"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch ExtensionPointDefinition
     * @param {string} name Name of extensionpointdefinition
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchExtensionPointDefinition(s, n, l) {
      var c, p;
      const r = await a.patchExtensionPointDefinition(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ExtensionPointDefinitionV1alpha1Api.patchExtensionPointDefinition"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update ExtensionPointDefinition
     * @param {string} name Name of extensionpointdefinition
     * @param {ExtensionPointDefinition} [extensionPointDefinition] Updated extensionpointdefinition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateExtensionPointDefinition(s, n, l) {
      var c, p;
      const r = await a.updateExtensionPointDefinition(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ExtensionPointDefinitionV1alpha1Api.updateExtensionPointDefinition"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Yc = function(e, a, s) {
  const n = de(e);
  return {
    /**
     * Create ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createExtensionPointDefinition(l = {}, r) {
      return n.createExtensionPointDefinition(l.extensionPointDefinition, r).then((t) => t(s, a));
    },
    /**
     * Delete ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteExtensionPointDefinition(l, r) {
      return n.deleteExtensionPointDefinition(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExtensionPointDefinition(l, r) {
      return n.getExtensionPointDefinition(l.name, r).then((t) => t(s, a));
    },
    /**
     * List ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listExtensionPointDefinition(l = {}, r) {
      return n.listExtensionPointDefinition(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchExtensionPointDefinition(l, r) {
      return n.patchExtensionPointDefinition(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateExtensionPointDefinition(l, r) {
      return n.updateExtensionPointDefinition(l.name, l.extensionPointDefinition, r).then((t) => t(s, a));
    }
  };
};
class es extends U {
  /**
   * Create ExtensionPointDefinition
   * @param {ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionPointDefinitionV1alpha1Api
   */
  createExtensionPointDefinition(a = {}, s) {
    return de(this.configuration).createExtensionPointDefinition(a.extensionPointDefinition, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete ExtensionPointDefinition
   * @param {ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionPointDefinitionV1alpha1Api
   */
  deleteExtensionPointDefinition(a, s) {
    return de(this.configuration).deleteExtensionPointDefinition(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get ExtensionPointDefinition
   * @param {ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionPointDefinitionV1alpha1Api
   */
  getExtensionPointDefinition(a, s) {
    return de(this.configuration).getExtensionPointDefinition(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List ExtensionPointDefinition
   * @param {ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionPointDefinitionV1alpha1Api
   */
  listExtensionPointDefinition(a = {}, s) {
    return de(this.configuration).listExtensionPointDefinition(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch ExtensionPointDefinition
   * @param {ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionPointDefinitionV1alpha1Api
   */
  patchExtensionPointDefinition(a, s) {
    return de(this.configuration).patchExtensionPointDefinition(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update ExtensionPointDefinition
   * @param {ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinitionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ExtensionPointDefinitionV1alpha1Api
   */
  updateExtensionPointDefinition(a, s) {
    return de(this.configuration).updateExtensionPointDefinition(a.name, a.extensionPointDefinition, s).then((n) => n(this.axios, this.basePath));
  }
}
const as = function(e) {
  return {
    /**
     * Create Group
     * @param {Group} [group] Fresh group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createGroup: async (a, s = {}) => {
      const n = "/apis/storage.halo.run/v1alpha1/groups", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Group
     * @param {string} name Name of group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteGroup: async (a, s = {}) => {
      R("deleteGroup", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/groups/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Group
     * @param {string} name Name of group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGroup: async (a, s = {}) => {
      R("getGroup", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/groups/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Group
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listGroup: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/storage.halo.run/v1alpha1/groups", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Group
     * @param {string} name Name of group
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchGroup: async (a, s, n = {}) => {
      R("patchGroup", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/groups/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Group
     * @param {string} name Name of group
     * @param {Group} [group] Updated group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateGroup: async (a, s, n = {}) => {
      R("updateGroup", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/groups/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, me = function(e) {
  const a = as(e);
  return {
    /**
     * Create Group
     * @param {Group} [group] Fresh group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createGroup(s, n) {
      var o, c;
      const l = await a.createGroup(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["GroupV1alpha1Api.createGroup"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Group
     * @param {string} name Name of group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteGroup(s, n) {
      var o, c;
      const l = await a.deleteGroup(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["GroupV1alpha1Api.deleteGroup"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Group
     * @param {string} name Name of group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getGroup(s, n) {
      var o, c;
      const l = await a.getGroup(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["GroupV1alpha1Api.getGroup"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Group
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listGroup(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listGroup(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["GroupV1alpha1Api.listGroup"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Group
     * @param {string} name Name of group
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchGroup(s, n, l) {
      var c, p;
      const r = await a.patchGroup(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["GroupV1alpha1Api.patchGroup"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Group
     * @param {string} name Name of group
     * @param {Group} [group] Updated group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateGroup(s, n, l) {
      var c, p;
      const r = await a.updateGroup(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["GroupV1alpha1Api.updateGroup"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Zc = function(e, a, s) {
  const n = me(e);
  return {
    /**
     * Create Group
     * @param {GroupV1alpha1ApiCreateGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createGroup(l = {}, r) {
      return n.createGroup(l.group, r).then((t) => t(s, a));
    },
    /**
     * Delete Group
     * @param {GroupV1alpha1ApiDeleteGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteGroup(l, r) {
      return n.deleteGroup(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Group
     * @param {GroupV1alpha1ApiGetGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGroup(l, r) {
      return n.getGroup(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Group
     * @param {GroupV1alpha1ApiListGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listGroup(l = {}, r) {
      return n.listGroup(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Group
     * @param {GroupV1alpha1ApiPatchGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchGroup(l, r) {
      return n.patchGroup(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Group
     * @param {GroupV1alpha1ApiUpdateGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateGroup(l, r) {
      return n.updateGroup(l.name, l.group, r).then((t) => t(s, a));
    }
  };
};
class ts extends U {
  /**
   * Create Group
   * @param {GroupV1alpha1ApiCreateGroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GroupV1alpha1Api
   */
  createGroup(a = {}, s) {
    return me(this.configuration).createGroup(a.group, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Group
   * @param {GroupV1alpha1ApiDeleteGroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GroupV1alpha1Api
   */
  deleteGroup(a, s) {
    return me(this.configuration).deleteGroup(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Group
   * @param {GroupV1alpha1ApiGetGroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GroupV1alpha1Api
   */
  getGroup(a, s) {
    return me(this.configuration).getGroup(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Group
   * @param {GroupV1alpha1ApiListGroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GroupV1alpha1Api
   */
  listGroup(a = {}, s) {
    return me(this.configuration).listGroup(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Group
   * @param {GroupV1alpha1ApiPatchGroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GroupV1alpha1Api
   */
  patchGroup(a, s) {
    return me(this.configuration).patchGroup(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Group
   * @param {GroupV1alpha1ApiUpdateGroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GroupV1alpha1Api
   */
  updateGroup(a, s) {
    return me(this.configuration).updateGroup(a.name, a.group, s).then((n) => n(this.axios, this.basePath));
  }
}
const rs = function(e) {
  return {
    /**
     * Search indices.
     * @param {SearchOption} [searchOption] Please note that the \&quot;filterPublished\&quot;, \&quot;filterExposed\&quot; and \&quot;filterRecycled\&quot; fields are ignored in this endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indicesSearch: async (a, s = {}) => {
      const n = "/apis/api.halo.run/v1alpha1/indices/-/search", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Search posts with fuzzy query. This method is deprecated, please use POST /indices/-/search instead.
     * @param {string} keyword Keyword to search
     * @param {number} [limit] Limit of search results
     * @param {string} [highlightPreTag] Highlight pre tag
     * @param {string} [highlightPostTag] Highlight post tag
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    searchPost: async (a, s, n, l, r = {}) => {
      R("searchPost", "keyword", a);
      const t = "/apis/api.halo.run/v1alpha1/indices/post", o = new URL(t, O);
      let c;
      e && (c = e.baseOptions);
      const p = { method: "GET", ...c, ...r }, h = {}, i = {};
      P(p, e), await u(h, e), a !== void 0 && (i.keyword = a), s !== void 0 && (i.limit = s), n !== void 0 && (i.highlightPreTag = n), l !== void 0 && (i.highlightPostTag = l), v(o, i);
      let d = c && c.headers ? c.headers : {};
      return p.headers = { ...h, ...d, ...r.headers }, {
        url: S(o),
        options: p
      };
    }
  };
}, fa = function(e) {
  const a = rs(e);
  return {
    /**
     * Search indices.
     * @param {SearchOption} [searchOption] Please note that the \&quot;filterPublished\&quot;, \&quot;filterExposed\&quot; and \&quot;filterRecycled\&quot; fields are ignored in this endpoint.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async indicesSearch(s, n) {
      var o, c;
      const l = await a.indicesSearch(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["IndexV1alpha1PublicApi.indicesSearch"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Search posts with fuzzy query. This method is deprecated, please use POST /indices/-/search instead.
     * @param {string} keyword Keyword to search
     * @param {number} [limit] Limit of search results
     * @param {string} [highlightPreTag] Highlight pre tag
     * @param {string} [highlightPostTag] Highlight post tag
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async searchPost(s, n, l, r, t) {
      var h, i;
      const o = await a.searchPost(s, n, l, r, t), c = (e == null ? void 0 : e.serverIndex) ?? 0, p = (i = (h = y["IndexV1alpha1PublicApi.searchPost"]) == null ? void 0 : h[c]) == null ? void 0 : i.url;
      return (d, b) => A(o, m, V, e)(d, p || b);
    }
  };
}, qc = function(e, a, s) {
  const n = fa(e);
  return {
    /**
     * Search indices.
     * @param {IndexV1alpha1PublicApiIndicesSearchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    indicesSearch(l = {}, r) {
      return n.indicesSearch(l.searchOption, r).then((t) => t(s, a));
    },
    /**
     * Search posts with fuzzy query. This method is deprecated, please use POST /indices/-/search instead.
     * @param {IndexV1alpha1PublicApiSearchPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    searchPost(l, r) {
      return n.searchPost(l.keyword, l.limit, l.highlightPreTag, l.highlightPostTag, r).then((t) => t(s, a));
    }
  };
};
class gc extends U {
  /**
   * Search indices.
   * @param {IndexV1alpha1PublicApiIndicesSearchRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IndexV1alpha1PublicApi
   */
  indicesSearch(a = {}, s) {
    return fa(this.configuration).indicesSearch(a.searchOption, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Search posts with fuzzy query. This method is deprecated, please use POST /indices/-/search instead.
   * @param {IndexV1alpha1PublicApiSearchPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @deprecated
   * @throws {RequiredError}
   * @memberof IndexV1alpha1PublicApi
   */
  searchPost(a, s) {
    return fa(this.configuration).searchPost(a.keyword, a.limit, a.highlightPreTag, a.highlightPostTag, s).then((n) => n(this.axios, this.basePath));
  }
}
const ss = function(e) {
  return {
    /**
     * Build or rebuild post indices for full text search. This method is deprecated, please use POST /indices/-/rebuild instead.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    buildPostIndices: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/indices/post", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "POST", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Rebuild all indices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rebuildAllIndices: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/indices/-/rebuild", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "POST", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    }
  };
}, et = function(e) {
  const a = ss(e);
  return {
    /**
     * Build or rebuild post indices for full text search. This method is deprecated, please use POST /indices/-/rebuild instead.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async buildPostIndices(s) {
      var t, o;
      const n = await a.buildPostIndices(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["IndicesV1alpha1ConsoleApi.buildPostIndices"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Rebuild all indices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async rebuildAllIndices(s) {
      var t, o;
      const n = await a.rebuildAllIndices(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["IndicesV1alpha1ConsoleApi.rebuildAllIndices"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    }
  };
}, fc = function(e, a, s) {
  const n = et(e);
  return {
    /**
     * Build or rebuild post indices for full text search. This method is deprecated, please use POST /indices/-/rebuild instead.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    buildPostIndices(l) {
      return n.buildPostIndices(l).then((r) => r(s, a));
    },
    /**
     * Rebuild all indices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rebuildAllIndices(l) {
      return n.rebuildAllIndices(l).then((r) => r(s, a));
    }
  };
};
class ls extends U {
  /**
   * Build or rebuild post indices for full text search. This method is deprecated, please use POST /indices/-/rebuild instead.
   * @param {*} [options] Override http request option.
   * @deprecated
   * @throws {RequiredError}
   * @memberof IndicesV1alpha1ConsoleApi
   */
  buildPostIndices(a) {
    return et(this.configuration).buildPostIndices(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Rebuild all indices
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IndicesV1alpha1ConsoleApi
   */
  rebuildAllIndices(a) {
    return et(this.configuration).rebuildAllIndices(a).then((s) => s(this.axios, this.basePath));
  }
}
const ns = function(e) {
  return {
    /**
     * Create LocalThumbnail
     * @param {LocalThumbnail} [localThumbnail] Fresh localthumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLocalThumbnail: async (a, s = {}) => {
      const n = "/apis/storage.halo.run/v1alpha1/localthumbnails", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete LocalThumbnail
     * @param {string} name Name of localthumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLocalThumbnail: async (a, s = {}) => {
      R("deleteLocalThumbnail", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/localthumbnails/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get LocalThumbnail
     * @param {string} name Name of localthumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLocalThumbnail: async (a, s = {}) => {
      R("getLocalThumbnail", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/localthumbnails/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List LocalThumbnail
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLocalThumbnail: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/storage.halo.run/v1alpha1/localthumbnails", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch LocalThumbnail
     * @param {string} name Name of localthumbnail
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchLocalThumbnail: async (a, s, n = {}) => {
      R("patchLocalThumbnail", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/localthumbnails/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update LocalThumbnail
     * @param {string} name Name of localthumbnail
     * @param {LocalThumbnail} [localThumbnail] Updated localthumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLocalThumbnail: async (a, s, n = {}) => {
      R("updateLocalThumbnail", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/localthumbnails/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Ve = function(e) {
  const a = ns(e);
  return {
    /**
     * Create LocalThumbnail
     * @param {LocalThumbnail} [localThumbnail] Fresh localthumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createLocalThumbnail(s, n) {
      var o, c;
      const l = await a.createLocalThumbnail(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["LocalThumbnailV1alpha1Api.createLocalThumbnail"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete LocalThumbnail
     * @param {string} name Name of localthumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteLocalThumbnail(s, n) {
      var o, c;
      const l = await a.deleteLocalThumbnail(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["LocalThumbnailV1alpha1Api.deleteLocalThumbnail"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get LocalThumbnail
     * @param {string} name Name of localthumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLocalThumbnail(s, n) {
      var o, c;
      const l = await a.getLocalThumbnail(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["LocalThumbnailV1alpha1Api.getLocalThumbnail"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List LocalThumbnail
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listLocalThumbnail(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listLocalThumbnail(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["LocalThumbnailV1alpha1Api.listLocalThumbnail"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch LocalThumbnail
     * @param {string} name Name of localthumbnail
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchLocalThumbnail(s, n, l) {
      var c, p;
      const r = await a.patchLocalThumbnail(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["LocalThumbnailV1alpha1Api.patchLocalThumbnail"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update LocalThumbnail
     * @param {string} name Name of localthumbnail
     * @param {LocalThumbnail} [localThumbnail] Updated localthumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateLocalThumbnail(s, n, l) {
      var c, p;
      const r = await a.updateLocalThumbnail(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["LocalThumbnailV1alpha1Api.updateLocalThumbnail"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, ep = function(e, a, s) {
  const n = Ve(e);
  return {
    /**
     * Create LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiCreateLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createLocalThumbnail(l = {}, r) {
      return n.createLocalThumbnail(l.localThumbnail, r).then((t) => t(s, a));
    },
    /**
     * Delete LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiDeleteLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteLocalThumbnail(l, r) {
      return n.deleteLocalThumbnail(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiGetLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLocalThumbnail(l, r) {
      return n.getLocalThumbnail(l.name, r).then((t) => t(s, a));
    },
    /**
     * List LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiListLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLocalThumbnail(l = {}, r) {
      return n.listLocalThumbnail(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiPatchLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchLocalThumbnail(l, r) {
      return n.patchLocalThumbnail(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiUpdateLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateLocalThumbnail(l, r) {
      return n.updateLocalThumbnail(l.name, l.localThumbnail, r).then((t) => t(s, a));
    }
  };
};
class ap extends U {
  /**
   * Create LocalThumbnail
   * @param {LocalThumbnailV1alpha1ApiCreateLocalThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocalThumbnailV1alpha1Api
   */
  createLocalThumbnail(a = {}, s) {
    return Ve(this.configuration).createLocalThumbnail(a.localThumbnail, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete LocalThumbnail
   * @param {LocalThumbnailV1alpha1ApiDeleteLocalThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocalThumbnailV1alpha1Api
   */
  deleteLocalThumbnail(a, s) {
    return Ve(this.configuration).deleteLocalThumbnail(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get LocalThumbnail
   * @param {LocalThumbnailV1alpha1ApiGetLocalThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocalThumbnailV1alpha1Api
   */
  getLocalThumbnail(a, s) {
    return Ve(this.configuration).getLocalThumbnail(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List LocalThumbnail
   * @param {LocalThumbnailV1alpha1ApiListLocalThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocalThumbnailV1alpha1Api
   */
  listLocalThumbnail(a = {}, s) {
    return Ve(this.configuration).listLocalThumbnail(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch LocalThumbnail
   * @param {LocalThumbnailV1alpha1ApiPatchLocalThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocalThumbnailV1alpha1Api
   */
  patchLocalThumbnail(a, s) {
    return Ve(this.configuration).patchLocalThumbnail(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update LocalThumbnail
   * @param {LocalThumbnailV1alpha1ApiUpdateLocalThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocalThumbnailV1alpha1Api
   */
  updateLocalThumbnail(a, s) {
    return Ve(this.configuration).updateLocalThumbnail(a.name, a.localThumbnail, s).then((n) => n(this.axios, this.basePath));
  }
}
const os = function(e) {
  return {
    /**
     * Create MenuItem
     * @param {MenuItem} [menuItem] Fresh menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMenuItem: async (a, s = {}) => {
      const n = "/api/v1alpha1/menuitems", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete MenuItem
     * @param {string} name Name of menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMenuItem: async (a, s = {}) => {
      R("deleteMenuItem", "name", a);
      const n = "/api/v1alpha1/menuitems/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get MenuItem
     * @param {string} name Name of menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMenuItem: async (a, s = {}) => {
      R("getMenuItem", "name", a);
      const n = "/api/v1alpha1/menuitems/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List MenuItem
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMenuItem: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/menuitems", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch MenuItem
     * @param {string} name Name of menuitem
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchMenuItem: async (a, s, n = {}) => {
      R("patchMenuItem", "name", a);
      const l = "/api/v1alpha1/menuitems/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update MenuItem
     * @param {string} name Name of menuitem
     * @param {MenuItem} [menuItem] Updated menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMenuItem: async (a, s, n = {}) => {
      R("updateMenuItem", "name", a);
      const l = "/api/v1alpha1/menuitems/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, ye = function(e) {
  const a = os(e);
  return {
    /**
     * Create MenuItem
     * @param {MenuItem} [menuItem] Fresh menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createMenuItem(s, n) {
      var o, c;
      const l = await a.createMenuItem(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MenuItemV1alpha1Api.createMenuItem"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete MenuItem
     * @param {string} name Name of menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteMenuItem(s, n) {
      var o, c;
      const l = await a.deleteMenuItem(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MenuItemV1alpha1Api.deleteMenuItem"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get MenuItem
     * @param {string} name Name of menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMenuItem(s, n) {
      var o, c;
      const l = await a.getMenuItem(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MenuItemV1alpha1Api.getMenuItem"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List MenuItem
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listMenuItem(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listMenuItem(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["MenuItemV1alpha1Api.listMenuItem"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch MenuItem
     * @param {string} name Name of menuitem
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchMenuItem(s, n, l) {
      var c, p;
      const r = await a.patchMenuItem(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["MenuItemV1alpha1Api.patchMenuItem"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update MenuItem
     * @param {string} name Name of menuitem
     * @param {MenuItem} [menuItem] Updated menuitem
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateMenuItem(s, n, l) {
      var c, p;
      const r = await a.updateMenuItem(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["MenuItemV1alpha1Api.updateMenuItem"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, tp = function(e, a, s) {
  const n = ye(e);
  return {
    /**
     * Create MenuItem
     * @param {MenuItemV1alpha1ApiCreateMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMenuItem(l = {}, r) {
      return n.createMenuItem(l.menuItem, r).then((t) => t(s, a));
    },
    /**
     * Delete MenuItem
     * @param {MenuItemV1alpha1ApiDeleteMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMenuItem(l, r) {
      return n.deleteMenuItem(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get MenuItem
     * @param {MenuItemV1alpha1ApiGetMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMenuItem(l, r) {
      return n.getMenuItem(l.name, r).then((t) => t(s, a));
    },
    /**
     * List MenuItem
     * @param {MenuItemV1alpha1ApiListMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMenuItem(l = {}, r) {
      return n.listMenuItem(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch MenuItem
     * @param {MenuItemV1alpha1ApiPatchMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchMenuItem(l, r) {
      return n.patchMenuItem(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update MenuItem
     * @param {MenuItemV1alpha1ApiUpdateMenuItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMenuItem(l, r) {
      return n.updateMenuItem(l.name, l.menuItem, r).then((t) => t(s, a));
    }
  };
};
class cs extends U {
  /**
   * Create MenuItem
   * @param {MenuItemV1alpha1ApiCreateMenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuItemV1alpha1Api
   */
  createMenuItem(a = {}, s) {
    return ye(this.configuration).createMenuItem(a.menuItem, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete MenuItem
   * @param {MenuItemV1alpha1ApiDeleteMenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuItemV1alpha1Api
   */
  deleteMenuItem(a, s) {
    return ye(this.configuration).deleteMenuItem(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get MenuItem
   * @param {MenuItemV1alpha1ApiGetMenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuItemV1alpha1Api
   */
  getMenuItem(a, s) {
    return ye(this.configuration).getMenuItem(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List MenuItem
   * @param {MenuItemV1alpha1ApiListMenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuItemV1alpha1Api
   */
  listMenuItem(a = {}, s) {
    return ye(this.configuration).listMenuItem(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch MenuItem
   * @param {MenuItemV1alpha1ApiPatchMenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuItemV1alpha1Api
   */
  patchMenuItem(a, s) {
    return ye(this.configuration).patchMenuItem(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update MenuItem
   * @param {MenuItemV1alpha1ApiUpdateMenuItemRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuItemV1alpha1Api
   */
  updateMenuItem(a, s) {
    return ye(this.configuration).updateMenuItem(a.name, a.menuItem, s).then((n) => n(this.axios, this.basePath));
  }
}
const ps = function(e) {
  return {
    /**
     * Create Menu
     * @param {Menu} [menu] Fresh menu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMenu: async (a, s = {}) => {
      const n = "/api/v1alpha1/menus", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Menu
     * @param {string} name Name of menu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMenu: async (a, s = {}) => {
      R("deleteMenu", "name", a);
      const n = "/api/v1alpha1/menus/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Menu
     * @param {string} name Name of menu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMenu: async (a, s = {}) => {
      R("getMenu", "name", a);
      const n = "/api/v1alpha1/menus/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Menu
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMenu: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/menus", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Menu
     * @param {string} name Name of menu
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchMenu: async (a, s, n = {}) => {
      R("patchMenu", "name", a);
      const l = "/api/v1alpha1/menus/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Menu
     * @param {string} name Name of menu
     * @param {Menu} [menu] Updated menu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMenu: async (a, s, n = {}) => {
      R("updateMenu", "name", a);
      const l = "/api/v1alpha1/menus/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Oe = function(e) {
  const a = ps(e);
  return {
    /**
     * Create Menu
     * @param {Menu} [menu] Fresh menu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createMenu(s, n) {
      var o, c;
      const l = await a.createMenu(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MenuV1alpha1Api.createMenu"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Menu
     * @param {string} name Name of menu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteMenu(s, n) {
      var o, c;
      const l = await a.deleteMenu(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MenuV1alpha1Api.deleteMenu"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Menu
     * @param {string} name Name of menu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMenu(s, n) {
      var o, c;
      const l = await a.getMenu(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MenuV1alpha1Api.getMenu"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Menu
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listMenu(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listMenu(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["MenuV1alpha1Api.listMenu"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Menu
     * @param {string} name Name of menu
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchMenu(s, n, l) {
      var c, p;
      const r = await a.patchMenu(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["MenuV1alpha1Api.patchMenu"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Menu
     * @param {string} name Name of menu
     * @param {Menu} [menu] Updated menu
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateMenu(s, n, l) {
      var c, p;
      const r = await a.updateMenu(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["MenuV1alpha1Api.updateMenu"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, rp = function(e, a, s) {
  const n = Oe(e);
  return {
    /**
     * Create Menu
     * @param {MenuV1alpha1ApiCreateMenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMenu(l = {}, r) {
      return n.createMenu(l.menu, r).then((t) => t(s, a));
    },
    /**
     * Delete Menu
     * @param {MenuV1alpha1ApiDeleteMenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMenu(l, r) {
      return n.deleteMenu(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Menu
     * @param {MenuV1alpha1ApiGetMenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMenu(l, r) {
      return n.getMenu(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Menu
     * @param {MenuV1alpha1ApiListMenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMenu(l = {}, r) {
      return n.listMenu(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Menu
     * @param {MenuV1alpha1ApiPatchMenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchMenu(l, r) {
      return n.patchMenu(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Menu
     * @param {MenuV1alpha1ApiUpdateMenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMenu(l, r) {
      return n.updateMenu(l.name, l.menu, r).then((t) => t(s, a));
    }
  };
};
class hs extends U {
  /**
   * Create Menu
   * @param {MenuV1alpha1ApiCreateMenuRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuV1alpha1Api
   */
  createMenu(a = {}, s) {
    return Oe(this.configuration).createMenu(a.menu, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Menu
   * @param {MenuV1alpha1ApiDeleteMenuRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuV1alpha1Api
   */
  deleteMenu(a, s) {
    return Oe(this.configuration).deleteMenu(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Menu
   * @param {MenuV1alpha1ApiGetMenuRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuV1alpha1Api
   */
  getMenu(a, s) {
    return Oe(this.configuration).getMenu(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Menu
   * @param {MenuV1alpha1ApiListMenuRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuV1alpha1Api
   */
  listMenu(a = {}, s) {
    return Oe(this.configuration).listMenu(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Menu
   * @param {MenuV1alpha1ApiPatchMenuRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuV1alpha1Api
   */
  patchMenu(a, s) {
    return Oe(this.configuration).patchMenu(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Menu
   * @param {MenuV1alpha1ApiUpdateMenuRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuV1alpha1Api
   */
  updateMenu(a, s) {
    return Oe(this.configuration).updateMenu(a.name, a.menu, s).then((n) => n(this.axios, this.basePath));
  }
}
const is = function(e) {
  return {
    /**
     * Gets menu by name.
     * @param {string} name Menu name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryMenuByName: async (a, s = {}) => {
      R("queryMenuByName", "name", a);
      const n = "/apis/api.halo.run/v1alpha1/menus/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Gets primary menu.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPrimaryMenu: async (a = {}) => {
      const s = "/apis/api.halo.run/v1alpha1/menus/-", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    }
  };
}, at = function(e) {
  const a = is(e);
  return {
    /**
     * Gets menu by name.
     * @param {string} name Menu name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryMenuByName(s, n) {
      var o, c;
      const l = await a.queryMenuByName(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MenuV1alpha1PublicApi.queryMenuByName"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Gets primary menu.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryPrimaryMenu(s) {
      var t, o;
      const n = await a.queryPrimaryMenu(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["MenuV1alpha1PublicApi.queryPrimaryMenu"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    }
  };
}, sp = function(e, a, s) {
  const n = at(e);
  return {
    /**
     * Gets menu by name.
     * @param {MenuV1alpha1PublicApiQueryMenuByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryMenuByName(l, r) {
      return n.queryMenuByName(l.name, r).then((t) => t(s, a));
    },
    /**
     * Gets primary menu.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPrimaryMenu(l) {
      return n.queryPrimaryMenu(l).then((r) => r(s, a));
    }
  };
};
class ds extends U {
  /**
   * Gets menu by name.
   * @param {MenuV1alpha1PublicApiQueryMenuByNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuV1alpha1PublicApi
   */
  queryMenuByName(a, s) {
    return at(this.configuration).queryMenuByName(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Gets primary menu.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MenuV1alpha1PublicApi
   */
  queryPrimaryMenu(a) {
    return at(this.configuration).queryPrimaryMenu(a).then((s) => s(this.axios, this.basePath));
  }
}
const ms = function(e) {
  return {
    /**
     * Count an extension resource visits.
     * @param {CounterRequest} counterRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    count: async (a, s = {}) => {
      R("count", "counterRequest", a);
      const n = "/apis/api.halo.run/v1alpha1/trackers/counter", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Downvote an extension resource.
     * @param {VoteRequest} voteRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downvote: async (a, s = {}) => {
      R("downvote", "voteRequest", a);
      const n = "/apis/api.halo.run/v1alpha1/trackers/downvote", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Upvote an extension resource.
     * @param {VoteRequest} voteRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upvote: async (a, s = {}) => {
      R("upvote", "voteRequest", a);
      const n = "/apis/api.halo.run/v1alpha1/trackers/upvote", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    }
  };
}, wa = function(e) {
  const a = ms(e);
  return {
    /**
     * Count an extension resource visits.
     * @param {CounterRequest} counterRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async count(s, n) {
      var o, c;
      const l = await a.count(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MetricsV1alpha1PublicApi.count"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Downvote an extension resource.
     * @param {VoteRequest} voteRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async downvote(s, n) {
      var o, c;
      const l = await a.downvote(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MetricsV1alpha1PublicApi.downvote"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Upvote an extension resource.
     * @param {VoteRequest} voteRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async upvote(s, n) {
      var o, c;
      const l = await a.upvote(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["MetricsV1alpha1PublicApi.upvote"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    }
  };
}, lp = function(e, a, s) {
  const n = wa(e);
  return {
    /**
     * Count an extension resource visits.
     * @param {MetricsV1alpha1PublicApiCountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    count(l, r) {
      return n.count(l.counterRequest, r).then((t) => t(s, a));
    },
    /**
     * Downvote an extension resource.
     * @param {MetricsV1alpha1PublicApiDownvoteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downvote(l, r) {
      return n.downvote(l.voteRequest, r).then((t) => t(s, a));
    },
    /**
     * Upvote an extension resource.
     * @param {MetricsV1alpha1PublicApiUpvoteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upvote(l, r) {
      return n.upvote(l.voteRequest, r).then((t) => t(s, a));
    }
  };
};
class Vs extends U {
  /**
   * Count an extension resource visits.
   * @param {MetricsV1alpha1PublicApiCountRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MetricsV1alpha1PublicApi
   */
  count(a, s) {
    return wa(this.configuration).count(a.counterRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Downvote an extension resource.
   * @param {MetricsV1alpha1PublicApiDownvoteRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MetricsV1alpha1PublicApi
   */
  downvote(a, s) {
    return wa(this.configuration).downvote(a.voteRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Upvote an extension resource.
   * @param {MetricsV1alpha1PublicApiUpvoteRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MetricsV1alpha1PublicApi
   */
  upvote(a, s) {
    return wa(this.configuration).upvote(a.voteRequest, s).then((n) => n(this.axios, this.basePath));
  }
}
const ys = function(e) {
  return {
    /**
     * 
     * @param {string} name Backup name.
     * @param {string} filename Backup filename.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadBackups: async (a, s, n = {}) => {
      R("downloadBackups", "name", a), R("downloadBackups", "filename", s);
      const l = "/apis/console.api.migration.halo.run/v1alpha1/backups/{name}/files/{filename}".replace("{name}", encodeURIComponent(String(a))).replace("{filename}", encodeURIComponent(String(s))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "GET", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    },
    /**
     * Get backup files from backup root.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackupFiles: async (a = {}) => {
      const s = "/apis/console.api.migration.halo.run/v1alpha1/backup-files", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Restore backup by uploading file or providing download link or backup name.
     * @param {string} [backupName] Backup metadata name.
     * @param {string} [downloadUrl] Remote backup HTTP URL.
     * @param {File} [file] 
     * @param {string} [filename] Filename of backup file in backups root.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    restoreBackup: async (a, s, n, l, r = {}) => {
      const t = "/apis/console.api.migration.halo.run/v1alpha1/restorations", o = new URL(t, O);
      let c;
      e && (c = e.baseOptions);
      const p = { method: "POST", ...c, ...r }, h = {}, i = {}, d = new (e && e.formDataCtor || FormData)();
      P(p, e), await u(h, e), a !== void 0 && d.append("backupName", a), s !== void 0 && d.append("downloadUrl", s), n !== void 0 && d.append("file", n), l !== void 0 && d.append("filename", l), h["Content-Type"] = "multipart/form-data", v(o, i);
      let b = c && c.headers ? c.headers : {};
      return p.headers = { ...h, ...b, ...r.headers }, p.data = d, {
        url: S(o),
        options: p
      };
    }
  };
}, Ua = function(e) {
  const a = ys(e);
  return {
    /**
     * 
     * @param {string} name Backup name.
     * @param {string} filename Backup filename.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async downloadBackups(s, n, l) {
      var c, p;
      const r = await a.downloadBackups(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["MigrationV1alpha1ConsoleApi.downloadBackups"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Get backup files from backup root.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBackupFiles(s) {
      var t, o;
      const n = await a.getBackupFiles(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["MigrationV1alpha1ConsoleApi.getBackupFiles"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Restore backup by uploading file or providing download link or backup name.
     * @param {string} [backupName] Backup metadata name.
     * @param {string} [downloadUrl] Remote backup HTTP URL.
     * @param {File} [file] 
     * @param {string} [filename] Filename of backup file in backups root.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async restoreBackup(s, n, l, r, t) {
      var h, i;
      const o = await a.restoreBackup(s, n, l, r, t), c = (e == null ? void 0 : e.serverIndex) ?? 0, p = (i = (h = y["MigrationV1alpha1ConsoleApi.restoreBackup"]) == null ? void 0 : h[c]) == null ? void 0 : i.url;
      return (d, b) => A(o, m, V, e)(d, p || b);
    }
  };
}, np = function(e, a, s) {
  const n = Ua(e);
  return {
    /**
     * 
     * @param {MigrationV1alpha1ConsoleApiDownloadBackupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadBackups(l, r) {
      return n.downloadBackups(l.name, l.filename, r).then((t) => t(s, a));
    },
    /**
     * Get backup files from backup root.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackupFiles(l) {
      return n.getBackupFiles(l).then((r) => r(s, a));
    },
    /**
     * Restore backup by uploading file or providing download link or backup name.
     * @param {MigrationV1alpha1ConsoleApiRestoreBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    restoreBackup(l = {}, r) {
      return n.restoreBackup(l.backupName, l.downloadUrl, l.file, l.filename, r).then((t) => t(s, a));
    }
  };
};
class Os extends U {
  /**
   * 
   * @param {MigrationV1alpha1ConsoleApiDownloadBackupsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MigrationV1alpha1ConsoleApi
   */
  downloadBackups(a, s) {
    return Ua(this.configuration).downloadBackups(a.name, a.filename, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get backup files from backup root.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MigrationV1alpha1ConsoleApi
   */
  getBackupFiles(a) {
    return Ua(this.configuration).getBackupFiles(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Restore backup by uploading file or providing download link or backup name.
   * @param {MigrationV1alpha1ConsoleApiRestoreBackupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MigrationV1alpha1ConsoleApi
   */
  restoreBackup(a = {}, s) {
    return Ua(this.configuration).restoreBackup(a.backupName, a.downloadUrl, a.file, a.filename, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ps = function(e) {
  return {
    /**
     * Create NotificationTemplate
     * @param {NotificationTemplate} [notificationTemplate] Fresh notificationtemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createNotificationTemplate: async (a, s = {}) => {
      const n = "/apis/notification.halo.run/v1alpha1/notificationtemplates", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete NotificationTemplate
     * @param {string} name Name of notificationtemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNotificationTemplate: async (a, s = {}) => {
      R("deleteNotificationTemplate", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/notificationtemplates/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get NotificationTemplate
     * @param {string} name Name of notificationtemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNotificationTemplate: async (a, s = {}) => {
      R("getNotificationTemplate", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/notificationtemplates/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List NotificationTemplate
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNotificationTemplate: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/notification.halo.run/v1alpha1/notificationtemplates", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch NotificationTemplate
     * @param {string} name Name of notificationtemplate
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchNotificationTemplate: async (a, s, n = {}) => {
      R("patchNotificationTemplate", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/notificationtemplates/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update NotificationTemplate
     * @param {string} name Name of notificationtemplate
     * @param {NotificationTemplate} [notificationTemplate] Updated notificationtemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNotificationTemplate: async (a, s, n = {}) => {
      R("updateNotificationTemplate", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/notificationtemplates/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Pe = function(e) {
  const a = Ps(e);
  return {
    /**
     * Create NotificationTemplate
     * @param {NotificationTemplate} [notificationTemplate] Fresh notificationtemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createNotificationTemplate(s, n) {
      var o, c;
      const l = await a.createNotificationTemplate(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotificationTemplateV1alpha1Api.createNotificationTemplate"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete NotificationTemplate
     * @param {string} name Name of notificationtemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteNotificationTemplate(s, n) {
      var o, c;
      const l = await a.deleteNotificationTemplate(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotificationTemplateV1alpha1Api.deleteNotificationTemplate"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get NotificationTemplate
     * @param {string} name Name of notificationtemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNotificationTemplate(s, n) {
      var o, c;
      const l = await a.getNotificationTemplate(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotificationTemplateV1alpha1Api.getNotificationTemplate"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List NotificationTemplate
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listNotificationTemplate(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listNotificationTemplate(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["NotificationTemplateV1alpha1Api.listNotificationTemplate"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch NotificationTemplate
     * @param {string} name Name of notificationtemplate
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchNotificationTemplate(s, n, l) {
      var c, p;
      const r = await a.patchNotificationTemplate(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotificationTemplateV1alpha1Api.patchNotificationTemplate"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update NotificationTemplate
     * @param {string} name Name of notificationtemplate
     * @param {NotificationTemplate} [notificationTemplate] Updated notificationtemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateNotificationTemplate(s, n, l) {
      var c, p;
      const r = await a.updateNotificationTemplate(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotificationTemplateV1alpha1Api.updateNotificationTemplate"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, op = function(e, a, s) {
  const n = Pe(e);
  return {
    /**
     * Create NotificationTemplate
     * @param {NotificationTemplateV1alpha1ApiCreateNotificationTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createNotificationTemplate(l = {}, r) {
      return n.createNotificationTemplate(l.notificationTemplate, r).then((t) => t(s, a));
    },
    /**
     * Delete NotificationTemplate
     * @param {NotificationTemplateV1alpha1ApiDeleteNotificationTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNotificationTemplate(l, r) {
      return n.deleteNotificationTemplate(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get NotificationTemplate
     * @param {NotificationTemplateV1alpha1ApiGetNotificationTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNotificationTemplate(l, r) {
      return n.getNotificationTemplate(l.name, r).then((t) => t(s, a));
    },
    /**
     * List NotificationTemplate
     * @param {NotificationTemplateV1alpha1ApiListNotificationTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNotificationTemplate(l = {}, r) {
      return n.listNotificationTemplate(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch NotificationTemplate
     * @param {NotificationTemplateV1alpha1ApiPatchNotificationTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchNotificationTemplate(l, r) {
      return n.patchNotificationTemplate(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update NotificationTemplate
     * @param {NotificationTemplateV1alpha1ApiUpdateNotificationTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNotificationTemplate(l, r) {
      return n.updateNotificationTemplate(l.name, l.notificationTemplate, r).then((t) => t(s, a));
    }
  };
};
class us extends U {
  /**
   * Create NotificationTemplate
   * @param {NotificationTemplateV1alpha1ApiCreateNotificationTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationTemplateV1alpha1Api
   */
  createNotificationTemplate(a = {}, s) {
    return Pe(this.configuration).createNotificationTemplate(a.notificationTemplate, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete NotificationTemplate
   * @param {NotificationTemplateV1alpha1ApiDeleteNotificationTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationTemplateV1alpha1Api
   */
  deleteNotificationTemplate(a, s) {
    return Pe(this.configuration).deleteNotificationTemplate(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get NotificationTemplate
   * @param {NotificationTemplateV1alpha1ApiGetNotificationTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationTemplateV1alpha1Api
   */
  getNotificationTemplate(a, s) {
    return Pe(this.configuration).getNotificationTemplate(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List NotificationTemplate
   * @param {NotificationTemplateV1alpha1ApiListNotificationTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationTemplateV1alpha1Api
   */
  listNotificationTemplate(a = {}, s) {
    return Pe(this.configuration).listNotificationTemplate(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch NotificationTemplate
   * @param {NotificationTemplateV1alpha1ApiPatchNotificationTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationTemplateV1alpha1Api
   */
  patchNotificationTemplate(a, s) {
    return Pe(this.configuration).patchNotificationTemplate(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update NotificationTemplate
   * @param {NotificationTemplateV1alpha1ApiUpdateNotificationTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationTemplateV1alpha1Api
   */
  updateNotificationTemplate(a, s) {
    return Pe(this.configuration).updateNotificationTemplate(a.name, a.notificationTemplate, s).then((n) => n(this.axios, this.basePath));
  }
}
const vs = function(e) {
  return {
    /**
     * Create Notification
     * @param {Notification} [notification] Fresh notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createNotification: async (a, s = {}) => {
      const n = "/apis/notification.halo.run/v1alpha1/notifications", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Notification
     * @param {string} name Name of notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNotification: async (a, s = {}) => {
      R("deleteNotification", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/notifications/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Notification
     * @param {string} name Name of notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNotification: async (a, s = {}) => {
      R("getNotification", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/notifications/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Notification
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNotification: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/notification.halo.run/v1alpha1/notifications", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Notification
     * @param {string} name Name of notification
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchNotification: async (a, s, n = {}) => {
      R("patchNotification", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/notifications/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Notification
     * @param {string} name Name of notification
     * @param {Notification} [notification] Updated notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNotification: async (a, s, n = {}) => {
      R("updateNotification", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/notifications/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, ue = function(e) {
  const a = vs(e);
  return {
    /**
     * Create Notification
     * @param {Notification} [notification] Fresh notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createNotification(s, n) {
      var o, c;
      const l = await a.createNotification(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotificationV1alpha1Api.createNotification"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Notification
     * @param {string} name Name of notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteNotification(s, n) {
      var o, c;
      const l = await a.deleteNotification(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotificationV1alpha1Api.deleteNotification"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Notification
     * @param {string} name Name of notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNotification(s, n) {
      var o, c;
      const l = await a.getNotification(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotificationV1alpha1Api.getNotification"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Notification
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listNotification(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listNotification(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["NotificationV1alpha1Api.listNotification"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Notification
     * @param {string} name Name of notification
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchNotification(s, n, l) {
      var c, p;
      const r = await a.patchNotification(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotificationV1alpha1Api.patchNotification"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Notification
     * @param {string} name Name of notification
     * @param {Notification} [notification] Updated notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateNotification(s, n, l) {
      var c, p;
      const r = await a.updateNotification(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotificationV1alpha1Api.updateNotification"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, cp = function(e, a, s) {
  const n = ue(e);
  return {
    /**
     * Create Notification
     * @param {NotificationV1alpha1ApiCreateNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createNotification(l = {}, r) {
      return n.createNotification(l.notification, r).then((t) => t(s, a));
    },
    /**
     * Delete Notification
     * @param {NotificationV1alpha1ApiDeleteNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNotification(l, r) {
      return n.deleteNotification(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Notification
     * @param {NotificationV1alpha1ApiGetNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNotification(l, r) {
      return n.getNotification(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Notification
     * @param {NotificationV1alpha1ApiListNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNotification(l = {}, r) {
      return n.listNotification(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Notification
     * @param {NotificationV1alpha1ApiPatchNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchNotification(l, r) {
      return n.patchNotification(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Notification
     * @param {NotificationV1alpha1ApiUpdateNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNotification(l, r) {
      return n.updateNotification(l.name, l.notification, r).then((t) => t(s, a));
    }
  };
};
class Ss extends U {
  /**
   * Create Notification
   * @param {NotificationV1alpha1ApiCreateNotificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1Api
   */
  createNotification(a = {}, s) {
    return ue(this.configuration).createNotification(a.notification, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Notification
   * @param {NotificationV1alpha1ApiDeleteNotificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1Api
   */
  deleteNotification(a, s) {
    return ue(this.configuration).deleteNotification(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Notification
   * @param {NotificationV1alpha1ApiGetNotificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1Api
   */
  getNotification(a, s) {
    return ue(this.configuration).getNotification(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Notification
   * @param {NotificationV1alpha1ApiListNotificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1Api
   */
  listNotification(a = {}, s) {
    return ue(this.configuration).listNotification(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Notification
   * @param {NotificationV1alpha1ApiPatchNotificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1Api
   */
  patchNotification(a, s) {
    return ue(this.configuration).patchNotification(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Notification
   * @param {NotificationV1alpha1ApiUpdateNotificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1Api
   */
  updateNotification(a, s) {
    return ue(this.configuration).updateNotification(a.name, a.notification, s).then((n) => n(this.axios, this.basePath));
  }
}
const As = function(e) {
  return {
    /**
     * Delete the specified notification.
     * @param {string} username Username
     * @param {string} name Notification name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSpecifiedNotification: async (a, s, n = {}) => {
      R("deleteSpecifiedNotification", "username", a), R("deleteSpecifiedNotification", "name", s);
      const l = "/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notifications/{name}".replace("{username}", encodeURIComponent(String(a))).replace("{name}", encodeURIComponent(String(s))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "DELETE", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    },
    /**
     * List notification preferences for the authenticated user.
     * @param {string} username Username
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUserNotificationPreferences: async (a, s = {}) => {
      R("listUserNotificationPreferences", "username", a);
      const n = "/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notification-preferences".replace("{username}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List notifications for the authenticated user.
     * @param {string} username Username
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUserNotifications: async (a, s, n, l, r, t, o = {}) => {
      R("listUserNotifications", "username", a);
      const c = "/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notifications".replace("{username}", encodeURIComponent(String(a))), p = new URL(c, O);
      let h;
      e && (h = e.baseOptions);
      const i = { method: "GET", ...h, ...o }, d = {}, b = {};
      P(i, e), await u(d, e), s !== void 0 && (b.page = s), n !== void 0 && (b.size = n), l && (b.labelSelector = l), r && (b.fieldSelector = r), t && (b.sort = t), v(p, b);
      let x = h && h.headers ? h.headers : {};
      return i.headers = { ...d, ...x, ...o.headers }, {
        url: S(p),
        options: i
      };
    },
    /**
     * Mark the specified notification as read.
     * @param {string} username Username
     * @param {string} name Notification name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markNotificationAsRead: async (a, s, n = {}) => {
      R("markNotificationAsRead", "username", a), R("markNotificationAsRead", "name", s);
      const l = "/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notifications/{name}/mark-as-read".replace("{username}", encodeURIComponent(String(a))).replace("{name}", encodeURIComponent(String(s))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    },
    /**
     * Mark the specified notifications as read.
     * @param {string} username Username
     * @param {MarkSpecifiedRequest} markSpecifiedRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markNotificationsAsRead: async (a, s, n = {}) => {
      R("markNotificationsAsRead", "username", a), R("markNotificationsAsRead", "markSpecifiedRequest", s);
      const l = "/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notifications/-/mark-specified-as-read".replace("{username}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Save notification preferences for the authenticated user.
     * @param {string} username Username
     * @param {ReasonTypeNotifierCollectionRequest} [reasonTypeNotifierCollectionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    saveUserNotificationPreferences: async (a, s, n = {}) => {
      R("saveUserNotificationPreferences", "username", a);
      const l = "/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notification-preferences".replace("{username}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, ve = function(e) {
  const a = As(e);
  return {
    /**
     * Delete the specified notification.
     * @param {string} username Username
     * @param {string} name Notification name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSpecifiedNotification(s, n, l) {
      var c, p;
      const r = await a.deleteSpecifiedNotification(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotificationV1alpha1UcApi.deleteSpecifiedNotification"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * List notification preferences for the authenticated user.
     * @param {string} username Username
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listUserNotificationPreferences(s, n) {
      var o, c;
      const l = await a.listUserNotificationPreferences(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotificationV1alpha1UcApi.listUserNotificationPreferences"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List notifications for the authenticated user.
     * @param {string} username Username
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listUserNotifications(s, n, l, r, t, o, c) {
      var d, b;
      const p = await a.listUserNotifications(s, n, l, r, t, o, c), h = (e == null ? void 0 : e.serverIndex) ?? 0, i = (b = (d = y["NotificationV1alpha1UcApi.listUserNotifications"]) == null ? void 0 : d[h]) == null ? void 0 : b.url;
      return (x, w) => A(p, m, V, e)(x, i || w);
    },
    /**
     * Mark the specified notification as read.
     * @param {string} username Username
     * @param {string} name Notification name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async markNotificationAsRead(s, n, l) {
      var c, p;
      const r = await a.markNotificationAsRead(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotificationV1alpha1UcApi.markNotificationAsRead"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Mark the specified notifications as read.
     * @param {string} username Username
     * @param {MarkSpecifiedRequest} markSpecifiedRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async markNotificationsAsRead(s, n, l) {
      var c, p;
      const r = await a.markNotificationsAsRead(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotificationV1alpha1UcApi.markNotificationsAsRead"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Save notification preferences for the authenticated user.
     * @param {string} username Username
     * @param {ReasonTypeNotifierCollectionRequest} [reasonTypeNotifierCollectionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async saveUserNotificationPreferences(s, n, l) {
      var c, p;
      const r = await a.saveUserNotificationPreferences(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotificationV1alpha1UcApi.saveUserNotificationPreferences"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, pp = function(e, a, s) {
  const n = ve(e);
  return {
    /**
     * Delete the specified notification.
     * @param {NotificationV1alpha1UcApiDeleteSpecifiedNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSpecifiedNotification(l, r) {
      return n.deleteSpecifiedNotification(l.username, l.name, r).then((t) => t(s, a));
    },
    /**
     * List notification preferences for the authenticated user.
     * @param {NotificationV1alpha1UcApiListUserNotificationPreferencesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUserNotificationPreferences(l, r) {
      return n.listUserNotificationPreferences(l.username, r).then((t) => t(s, a));
    },
    /**
     * List notifications for the authenticated user.
     * @param {NotificationV1alpha1UcApiListUserNotificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUserNotifications(l, r) {
      return n.listUserNotifications(l.username, l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Mark the specified notification as read.
     * @param {NotificationV1alpha1UcApiMarkNotificationAsReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markNotificationAsRead(l, r) {
      return n.markNotificationAsRead(l.username, l.name, r).then((t) => t(s, a));
    },
    /**
     * Mark the specified notifications as read.
     * @param {NotificationV1alpha1UcApiMarkNotificationsAsReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    markNotificationsAsRead(l, r) {
      return n.markNotificationsAsRead(l.username, l.markSpecifiedRequest, r).then((t) => t(s, a));
    },
    /**
     * Save notification preferences for the authenticated user.
     * @param {NotificationV1alpha1UcApiSaveUserNotificationPreferencesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    saveUserNotificationPreferences(l, r) {
      return n.saveUserNotificationPreferences(l.username, l.reasonTypeNotifierCollectionRequest, r).then((t) => t(s, a));
    }
  };
};
class bs extends U {
  /**
   * Delete the specified notification.
   * @param {NotificationV1alpha1UcApiDeleteSpecifiedNotificationRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1UcApi
   */
  deleteSpecifiedNotification(a, s) {
    return ve(this.configuration).deleteSpecifiedNotification(a.username, a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List notification preferences for the authenticated user.
   * @param {NotificationV1alpha1UcApiListUserNotificationPreferencesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1UcApi
   */
  listUserNotificationPreferences(a, s) {
    return ve(this.configuration).listUserNotificationPreferences(a.username, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List notifications for the authenticated user.
   * @param {NotificationV1alpha1UcApiListUserNotificationsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1UcApi
   */
  listUserNotifications(a, s) {
    return ve(this.configuration).listUserNotifications(a.username, a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Mark the specified notification as read.
   * @param {NotificationV1alpha1UcApiMarkNotificationAsReadRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1UcApi
   */
  markNotificationAsRead(a, s) {
    return ve(this.configuration).markNotificationAsRead(a.username, a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Mark the specified notifications as read.
   * @param {NotificationV1alpha1UcApiMarkNotificationsAsReadRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1UcApi
   */
  markNotificationsAsRead(a, s) {
    return ve(this.configuration).markNotificationsAsRead(a.username, a.markSpecifiedRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Save notification preferences for the authenticated user.
   * @param {NotificationV1alpha1UcApiSaveUserNotificationPreferencesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationV1alpha1UcApi
   */
  saveUserNotificationPreferences(a, s) {
    return ve(this.configuration).saveUserNotificationPreferences(a.username, a.reasonTypeNotifierCollectionRequest, s).then((n) => n(this.axios, this.basePath));
  }
}
const Rs = function(e) {
  return {
    /**
     * Create NotifierDescriptor
     * @param {NotifierDescriptor} [notifierDescriptor] Fresh notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createNotifierDescriptor: async (a, s = {}) => {
      const n = "/apis/notification.halo.run/v1alpha1/notifierDescriptors", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNotifierDescriptor: async (a, s = {}) => {
      R("deleteNotifierDescriptor", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNotifierDescriptor: async (a, s = {}) => {
      R("getNotifierDescriptor", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List NotifierDescriptor
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNotifierDescriptor: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/notification.halo.run/v1alpha1/notifierDescriptors", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchNotifierDescriptor: async (a, s, n = {}) => {
      R("patchNotifierDescriptor", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {NotifierDescriptor} [notifierDescriptor] Updated notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNotifierDescriptor: async (a, s, n = {}) => {
      R("updateNotifierDescriptor", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Se = function(e) {
  const a = Rs(e);
  return {
    /**
     * Create NotifierDescriptor
     * @param {NotifierDescriptor} [notifierDescriptor] Fresh notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createNotifierDescriptor(s, n) {
      var o, c;
      const l = await a.createNotifierDescriptor(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotifierDescriptorV1alpha1Api.createNotifierDescriptor"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteNotifierDescriptor(s, n) {
      var o, c;
      const l = await a.deleteNotifierDescriptor(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotifierDescriptorV1alpha1Api.deleteNotifierDescriptor"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNotifierDescriptor(s, n) {
      var o, c;
      const l = await a.getNotifierDescriptor(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotifierDescriptorV1alpha1Api.getNotifierDescriptor"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List NotifierDescriptor
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listNotifierDescriptor(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listNotifierDescriptor(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["NotifierDescriptorV1alpha1Api.listNotifierDescriptor"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchNotifierDescriptor(s, n, l) {
      var c, p;
      const r = await a.patchNotifierDescriptor(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotifierDescriptorV1alpha1Api.patchNotifierDescriptor"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {NotifierDescriptor} [notifierDescriptor] Updated notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateNotifierDescriptor(s, n, l) {
      var c, p;
      const r = await a.updateNotifierDescriptor(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotifierDescriptorV1alpha1Api.updateNotifierDescriptor"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, hp = function(e, a, s) {
  const n = Se(e);
  return {
    /**
     * Create NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiCreateNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createNotifierDescriptor(l = {}, r) {
      return n.createNotifierDescriptor(l.notifierDescriptor, r).then((t) => t(s, a));
    },
    /**
     * Delete NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNotifierDescriptor(l, r) {
      return n.deleteNotifierDescriptor(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiGetNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNotifierDescriptor(l, r) {
      return n.getNotifierDescriptor(l.name, r).then((t) => t(s, a));
    },
    /**
     * List NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiListNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNotifierDescriptor(l = {}, r) {
      return n.listNotifierDescriptor(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiPatchNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchNotifierDescriptor(l, r) {
      return n.patchNotifierDescriptor(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update NotifierDescriptor
     * @param {NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNotifierDescriptor(l, r) {
      return n.updateNotifierDescriptor(l.name, l.notifierDescriptor, r).then((t) => t(s, a));
    }
  };
};
class xs extends U {
  /**
   * Create NotifierDescriptor
   * @param {NotifierDescriptorV1alpha1ApiCreateNotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierDescriptorV1alpha1Api
   */
  createNotifierDescriptor(a = {}, s) {
    return Se(this.configuration).createNotifierDescriptor(a.notifierDescriptor, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete NotifierDescriptor
   * @param {NotifierDescriptorV1alpha1ApiDeleteNotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierDescriptorV1alpha1Api
   */
  deleteNotifierDescriptor(a, s) {
    return Se(this.configuration).deleteNotifierDescriptor(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get NotifierDescriptor
   * @param {NotifierDescriptorV1alpha1ApiGetNotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierDescriptorV1alpha1Api
   */
  getNotifierDescriptor(a, s) {
    return Se(this.configuration).getNotifierDescriptor(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List NotifierDescriptor
   * @param {NotifierDescriptorV1alpha1ApiListNotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierDescriptorV1alpha1Api
   */
  listNotifierDescriptor(a = {}, s) {
    return Se(this.configuration).listNotifierDescriptor(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch NotifierDescriptor
   * @param {NotifierDescriptorV1alpha1ApiPatchNotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierDescriptorV1alpha1Api
   */
  patchNotifierDescriptor(a, s) {
    return Se(this.configuration).patchNotifierDescriptor(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update NotifierDescriptor
   * @param {NotifierDescriptorV1alpha1ApiUpdateNotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierDescriptorV1alpha1Api
   */
  updateNotifierDescriptor(a, s) {
    return Se(this.configuration).updateNotifierDescriptor(a.name, a.notifierDescriptor, s).then((n) => n(this.axios, this.basePath));
  }
}
const Cs = function(e) {
  return {
    /**
     * Fetch sender config of notifier
     * @param {string} name Notifier name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchSenderConfig: async (a, s = {}) => {
      R("fetchSenderConfig", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/notifiers/{name}/sender-config".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Save sender config of notifier
     * @param {string} name Notifier name
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    saveSenderConfig: async (a, s, n = {}) => {
      R("saveSenderConfig", "name", a), R("saveSenderConfig", "body", s);
      const l = "/apis/api.console.halo.run/v1alpha1/notifiers/{name}/sender-config".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Verify email sender config.
     * @param {EmailConfigValidationRequest} emailConfigValidationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyEmailSenderConfig: async (a, s = {}) => {
      R("verifyEmailSenderConfig", "emailConfigValidationRequest", a);
      const n = "/apis/console.api.notification.halo.run/v1alpha1/notifiers/default-email-notifier/verify-connection", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    }
  };
}, Ta = function(e) {
  const a = Cs(e);
  return {
    /**
     * Fetch sender config of notifier
     * @param {string} name Notifier name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchSenderConfig(s, n) {
      var o, c;
      const l = await a.fetchSenderConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotifierV1alpha1ConsoleApi.fetchSenderConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Save sender config of notifier
     * @param {string} name Notifier name
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async saveSenderConfig(s, n, l) {
      var c, p;
      const r = await a.saveSenderConfig(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotifierV1alpha1ConsoleApi.saveSenderConfig"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Verify email sender config.
     * @param {EmailConfigValidationRequest} emailConfigValidationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verifyEmailSenderConfig(s, n) {
      var o, c;
      const l = await a.verifyEmailSenderConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotifierV1alpha1ConsoleApi.verifyEmailSenderConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    }
  };
}, ip = function(e, a, s) {
  const n = Ta(e);
  return {
    /**
     * Fetch sender config of notifier
     * @param {NotifierV1alpha1ConsoleApiFetchSenderConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchSenderConfig(l, r) {
      return n.fetchSenderConfig(l.name, r).then((t) => t(s, a));
    },
    /**
     * Save sender config of notifier
     * @param {NotifierV1alpha1ConsoleApiSaveSenderConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    saveSenderConfig(l, r) {
      return n.saveSenderConfig(l.name, l.body, r).then((t) => t(s, a));
    },
    /**
     * Verify email sender config.
     * @param {NotifierV1alpha1ConsoleApiVerifyEmailSenderConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyEmailSenderConfig(l, r) {
      return n.verifyEmailSenderConfig(l.emailConfigValidationRequest, r).then((t) => t(s, a));
    }
  };
};
class ws extends U {
  /**
   * Fetch sender config of notifier
   * @param {NotifierV1alpha1ConsoleApiFetchSenderConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierV1alpha1ConsoleApi
   */
  fetchSenderConfig(a, s) {
    return Ta(this.configuration).fetchSenderConfig(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Save sender config of notifier
   * @param {NotifierV1alpha1ConsoleApiSaveSenderConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierV1alpha1ConsoleApi
   */
  saveSenderConfig(a, s) {
    return Ta(this.configuration).saveSenderConfig(a.name, a.body, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Verify email sender config.
   * @param {NotifierV1alpha1ConsoleApiVerifyEmailSenderConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierV1alpha1ConsoleApi
   */
  verifyEmailSenderConfig(a, s) {
    return Ta(this.configuration).verifyEmailSenderConfig(a.emailConfigValidationRequest, s).then((n) => n(this.axios, this.basePath));
  }
}
const Us = function(e) {
  return {
    /**
     * Fetch receiver config of notifier
     * @param {string} name Notifier name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchReceiverConfig: async (a, s = {}) => {
      R("fetchReceiverConfig", "name", a);
      const n = "/apis/api.notification.halo.run/v1alpha1/notifiers/{name}/receiver-config".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Save receiver config of notifier
     * @param {string} name Notifier name
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    saveReceiverConfig: async (a, s, n = {}) => {
      R("saveReceiverConfig", "name", a), R("saveReceiverConfig", "body", s);
      const l = "/apis/api.notification.halo.run/v1alpha1/notifiers/{name}/receiver-config".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, tt = function(e) {
  const a = Us(e);
  return {
    /**
     * Fetch receiver config of notifier
     * @param {string} name Notifier name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchReceiverConfig(s, n) {
      var o, c;
      const l = await a.fetchReceiverConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["NotifierV1alpha1UcApi.fetchReceiverConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Save receiver config of notifier
     * @param {string} name Notifier name
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async saveReceiverConfig(s, n, l) {
      var c, p;
      const r = await a.saveReceiverConfig(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["NotifierV1alpha1UcApi.saveReceiverConfig"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, dp = function(e, a, s) {
  const n = tt(e);
  return {
    /**
     * Fetch receiver config of notifier
     * @param {NotifierV1alpha1UcApiFetchReceiverConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchReceiverConfig(l, r) {
      return n.fetchReceiverConfig(l.name, r).then((t) => t(s, a));
    },
    /**
     * Save receiver config of notifier
     * @param {NotifierV1alpha1UcApiSaveReceiverConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    saveReceiverConfig(l, r) {
      return n.saveReceiverConfig(l.name, l.body, r).then((t) => t(s, a));
    }
  };
};
class mp extends U {
  /**
   * Fetch receiver config of notifier
   * @param {NotifierV1alpha1UcApiFetchReceiverConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierV1alpha1UcApi
   */
  fetchReceiverConfig(a, s) {
    return tt(this.configuration).fetchReceiverConfig(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Save receiver config of notifier
   * @param {NotifierV1alpha1UcApiSaveReceiverConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifierV1alpha1UcApi
   */
  saveReceiverConfig(a, s) {
    return tt(this.configuration).saveReceiverConfig(a.name, a.body, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ts = function(e) {
  return {
    /**
     * Create PersonalAccessToken
     * @param {PersonalAccessToken} [personalAccessToken] Fresh personalaccesstoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPersonalAccessToken: async (a, s = {}) => {
      const n = "/apis/security.halo.run/v1alpha1/personalaccesstokens", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete PersonalAccessToken
     * @param {string} name Name of personalaccesstoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePersonalAccessToken: async (a, s = {}) => {
      R("deletePersonalAccessToken", "name", a);
      const n = "/apis/security.halo.run/v1alpha1/personalaccesstokens/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get PersonalAccessToken
     * @param {string} name Name of personalaccesstoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPersonalAccessToken: async (a, s = {}) => {
      R("getPersonalAccessToken", "name", a);
      const n = "/apis/security.halo.run/v1alpha1/personalaccesstokens/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List PersonalAccessToken
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPersonalAccessToken: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/security.halo.run/v1alpha1/personalaccesstokens", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch PersonalAccessToken
     * @param {string} name Name of personalaccesstoken
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPersonalAccessToken: async (a, s, n = {}) => {
      R("patchPersonalAccessToken", "name", a);
      const l = "/apis/security.halo.run/v1alpha1/personalaccesstokens/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update PersonalAccessToken
     * @param {string} name Name of personalaccesstoken
     * @param {PersonalAccessToken} [personalAccessToken] Updated personalaccesstoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePersonalAccessToken: async (a, s, n = {}) => {
      R("updatePersonalAccessToken", "name", a);
      const l = "/apis/security.halo.run/v1alpha1/personalaccesstokens/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Ae = function(e) {
  const a = Ts(e);
  return {
    /**
     * Create PersonalAccessToken
     * @param {PersonalAccessToken} [personalAccessToken] Fresh personalaccesstoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createPersonalAccessToken(s, n) {
      var o, c;
      const l = await a.createPersonalAccessToken(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PersonalAccessTokenV1alpha1Api.createPersonalAccessToken"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete PersonalAccessToken
     * @param {string} name Name of personalaccesstoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletePersonalAccessToken(s, n) {
      var o, c;
      const l = await a.deletePersonalAccessToken(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PersonalAccessTokenV1alpha1Api.deletePersonalAccessToken"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get PersonalAccessToken
     * @param {string} name Name of personalaccesstoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPersonalAccessToken(s, n) {
      var o, c;
      const l = await a.getPersonalAccessToken(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PersonalAccessTokenV1alpha1Api.getPersonalAccessToken"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List PersonalAccessToken
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPersonalAccessToken(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listPersonalAccessToken(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["PersonalAccessTokenV1alpha1Api.listPersonalAccessToken"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch PersonalAccessToken
     * @param {string} name Name of personalaccesstoken
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchPersonalAccessToken(s, n, l) {
      var c, p;
      const r = await a.patchPersonalAccessToken(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PersonalAccessTokenV1alpha1Api.patchPersonalAccessToken"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update PersonalAccessToken
     * @param {string} name Name of personalaccesstoken
     * @param {PersonalAccessToken} [personalAccessToken] Updated personalaccesstoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatePersonalAccessToken(s, n, l) {
      var c, p;
      const r = await a.updatePersonalAccessToken(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PersonalAccessTokenV1alpha1Api.updatePersonalAccessToken"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Vp = function(e, a, s) {
  const n = Ae(e);
  return {
    /**
     * Create PersonalAccessToken
     * @param {PersonalAccessTokenV1alpha1ApiCreatePersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPersonalAccessToken(l = {}, r) {
      return n.createPersonalAccessToken(l.personalAccessToken, r).then((t) => t(s, a));
    },
    /**
     * Delete PersonalAccessToken
     * @param {PersonalAccessTokenV1alpha1ApiDeletePersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePersonalAccessToken(l, r) {
      return n.deletePersonalAccessToken(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get PersonalAccessToken
     * @param {PersonalAccessTokenV1alpha1ApiGetPersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPersonalAccessToken(l, r) {
      return n.getPersonalAccessToken(l.name, r).then((t) => t(s, a));
    },
    /**
     * List PersonalAccessToken
     * @param {PersonalAccessTokenV1alpha1ApiListPersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPersonalAccessToken(l = {}, r) {
      return n.listPersonalAccessToken(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch PersonalAccessToken
     * @param {PersonalAccessTokenV1alpha1ApiPatchPersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPersonalAccessToken(l, r) {
      return n.patchPersonalAccessToken(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update PersonalAccessToken
     * @param {PersonalAccessTokenV1alpha1ApiUpdatePersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePersonalAccessToken(l, r) {
      return n.updatePersonalAccessToken(l.name, l.personalAccessToken, r).then((t) => t(s, a));
    }
  };
};
class Is extends U {
  /**
   * Create PersonalAccessToken
   * @param {PersonalAccessTokenV1alpha1ApiCreatePersonalAccessTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1Api
   */
  createPersonalAccessToken(a = {}, s) {
    return Ae(this.configuration).createPersonalAccessToken(a.personalAccessToken, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete PersonalAccessToken
   * @param {PersonalAccessTokenV1alpha1ApiDeletePersonalAccessTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1Api
   */
  deletePersonalAccessToken(a, s) {
    return Ae(this.configuration).deletePersonalAccessToken(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get PersonalAccessToken
   * @param {PersonalAccessTokenV1alpha1ApiGetPersonalAccessTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1Api
   */
  getPersonalAccessToken(a, s) {
    return Ae(this.configuration).getPersonalAccessToken(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List PersonalAccessToken
   * @param {PersonalAccessTokenV1alpha1ApiListPersonalAccessTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1Api
   */
  listPersonalAccessToken(a = {}, s) {
    return Ae(this.configuration).listPersonalAccessToken(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch PersonalAccessToken
   * @param {PersonalAccessTokenV1alpha1ApiPatchPersonalAccessTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1Api
   */
  patchPersonalAccessToken(a, s) {
    return Ae(this.configuration).patchPersonalAccessToken(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update PersonalAccessToken
   * @param {PersonalAccessTokenV1alpha1ApiUpdatePersonalAccessTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1Api
   */
  updatePersonalAccessToken(a, s) {
    return Ae(this.configuration).updatePersonalAccessToken(a.name, a.personalAccessToken, s).then((n) => n(this.axios, this.basePath));
  }
}
const Bs = function(e) {
  return {
    /**
     * Delete a PAT
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePat: async (a, s = {}) => {
      R("deletePat", "name", a);
      const n = "/apis/uc.api.security.halo.run/v1alpha1/personalaccesstokens/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Generate a PAT.
     * @param {PersonalAccessToken} personalAccessToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generatePat: async (a, s = {}) => {
      R("generatePat", "personalAccessToken", a);
      const n = "/apis/uc.api.security.halo.run/v1alpha1/personalaccesstokens", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Obtain a PAT.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    obtainPat: async (a, s = {}) => {
      R("obtainPat", "name", a);
      const n = "/apis/uc.api.security.halo.run/v1alpha1/personalaccesstokens/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Obtain PAT list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    obtainPats: async (a = {}) => {
      const s = "/apis/uc.api.security.halo.run/v1alpha1/personalaccesstokens", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Restore a PAT.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    restorePat: async (a, s = {}) => {
      R("restorePat", "name", a);
      const n = "/apis/uc.api.security.halo.run/v1alpha1/personalaccesstokens/{name}/actions/restoration".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Revoke a PAT
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokePat: async (a, s = {}) => {
      R("revokePat", "name", a);
      const n = "/apis/uc.api.security.halo.run/v1alpha1/personalaccesstokens/{name}/actions/revocation".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    }
  };
}, be = function(e) {
  const a = Bs(e);
  return {
    /**
     * Delete a PAT
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletePat(s, n) {
      var o, c;
      const l = await a.deletePat(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PersonalAccessTokenV1alpha1UcApi.deletePat"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Generate a PAT.
     * @param {PersonalAccessToken} personalAccessToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async generatePat(s, n) {
      var o, c;
      const l = await a.generatePat(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PersonalAccessTokenV1alpha1UcApi.generatePat"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Obtain a PAT.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async obtainPat(s, n) {
      var o, c;
      const l = await a.obtainPat(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PersonalAccessTokenV1alpha1UcApi.obtainPat"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Obtain PAT list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async obtainPats(s) {
      var t, o;
      const n = await a.obtainPats(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["PersonalAccessTokenV1alpha1UcApi.obtainPats"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Restore a PAT.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async restorePat(s, n) {
      var o, c;
      const l = await a.restorePat(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PersonalAccessTokenV1alpha1UcApi.restorePat"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Revoke a PAT
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async revokePat(s, n) {
      var o, c;
      const l = await a.revokePat(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PersonalAccessTokenV1alpha1UcApi.revokePat"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    }
  };
}, yp = function(e, a, s) {
  const n = be(e);
  return {
    /**
     * Delete a PAT
     * @param {PersonalAccessTokenV1alpha1UcApiDeletePatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePat(l, r) {
      return n.deletePat(l.name, r).then((t) => t(s, a));
    },
    /**
     * Generate a PAT.
     * @param {PersonalAccessTokenV1alpha1UcApiGeneratePatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generatePat(l, r) {
      return n.generatePat(l.personalAccessToken, r).then((t) => t(s, a));
    },
    /**
     * Obtain a PAT.
     * @param {PersonalAccessTokenV1alpha1UcApiObtainPatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    obtainPat(l, r) {
      return n.obtainPat(l.name, r).then((t) => t(s, a));
    },
    /**
     * Obtain PAT list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    obtainPats(l) {
      return n.obtainPats(l).then((r) => r(s, a));
    },
    /**
     * Restore a PAT.
     * @param {PersonalAccessTokenV1alpha1UcApiRestorePatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    restorePat(l, r) {
      return n.restorePat(l.name, r).then((t) => t(s, a));
    },
    /**
     * Revoke a PAT
     * @param {PersonalAccessTokenV1alpha1UcApiRevokePatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokePat(l, r) {
      return n.revokePat(l.name, r).then((t) => t(s, a));
    }
  };
};
class Fs extends U {
  /**
   * Delete a PAT
   * @param {PersonalAccessTokenV1alpha1UcApiDeletePatRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1UcApi
   */
  deletePat(a, s) {
    return be(this.configuration).deletePat(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Generate a PAT.
   * @param {PersonalAccessTokenV1alpha1UcApiGeneratePatRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1UcApi
   */
  generatePat(a, s) {
    return be(this.configuration).generatePat(a.personalAccessToken, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Obtain a PAT.
   * @param {PersonalAccessTokenV1alpha1UcApiObtainPatRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1UcApi
   */
  obtainPat(a, s) {
    return be(this.configuration).obtainPat(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Obtain PAT list.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1UcApi
   */
  obtainPats(a) {
    return be(this.configuration).obtainPats(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Restore a PAT.
   * @param {PersonalAccessTokenV1alpha1UcApiRestorePatRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1UcApi
   */
  restorePat(a, s) {
    return be(this.configuration).restorePat(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Revoke a PAT
   * @param {PersonalAccessTokenV1alpha1UcApiRevokePatRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalAccessTokenV1alpha1UcApi
   */
  revokePat(a, s) {
    return be(this.configuration).revokePat(a.name, s).then((n) => n(this.axios, this.basePath));
  }
}
const Es = function(e) {
  return {
    /**
     * Create Plugin
     * @param {Plugin} [plugin] Fresh plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPlugin: async (a, s = {}) => {
      const n = "/apis/plugin.halo.run/v1alpha1/plugins", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Plugin
     * @param {string} name Name of plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePlugin: async (a, s = {}) => {
      R("deletePlugin", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/plugins/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Plugin
     * @param {string} name Name of plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlugin: async (a, s = {}) => {
      R("getPlugin", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/plugins/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Plugin
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPlugin: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/plugin.halo.run/v1alpha1/plugins", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Plugin
     * @param {string} name Name of plugin
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPlugin: async (a, s, n = {}) => {
      R("patchPlugin", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/plugins/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Plugin
     * @param {string} name Name of plugin
     * @param {Plugin} [plugin] Updated plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePlugin: async (a, s, n = {}) => {
      R("updatePlugin", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/plugins/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Re = function(e) {
  const a = Es(e);
  return {
    /**
     * Create Plugin
     * @param {Plugin} [plugin] Fresh plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createPlugin(s, n) {
      var o, c;
      const l = await a.createPlugin(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1Api.createPlugin"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Plugin
     * @param {string} name Name of plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletePlugin(s, n) {
      var o, c;
      const l = await a.deletePlugin(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1Api.deletePlugin"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Plugin
     * @param {string} name Name of plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPlugin(s, n) {
      var o, c;
      const l = await a.getPlugin(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1Api.getPlugin"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Plugin
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPlugin(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listPlugin(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["PluginV1alpha1Api.listPlugin"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Plugin
     * @param {string} name Name of plugin
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchPlugin(s, n, l) {
      var c, p;
      const r = await a.patchPlugin(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PluginV1alpha1Api.patchPlugin"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Plugin
     * @param {string} name Name of plugin
     * @param {Plugin} [plugin] Updated plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatePlugin(s, n, l) {
      var c, p;
      const r = await a.updatePlugin(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PluginV1alpha1Api.updatePlugin"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Op = function(e, a, s) {
  const n = Re(e);
  return {
    /**
     * Create Plugin
     * @param {PluginV1alpha1ApiCreatePluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPlugin(l = {}, r) {
      return n.createPlugin(l.plugin, r).then((t) => t(s, a));
    },
    /**
     * Delete Plugin
     * @param {PluginV1alpha1ApiDeletePluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePlugin(l, r) {
      return n.deletePlugin(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Plugin
     * @param {PluginV1alpha1ApiGetPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlugin(l, r) {
      return n.getPlugin(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Plugin
     * @param {PluginV1alpha1ApiListPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPlugin(l = {}, r) {
      return n.listPlugin(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Plugin
     * @param {PluginV1alpha1ApiPatchPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPlugin(l, r) {
      return n.patchPlugin(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Plugin
     * @param {PluginV1alpha1ApiUpdatePluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePlugin(l, r) {
      return n.updatePlugin(l.name, l.plugin, r).then((t) => t(s, a));
    }
  };
};
class js extends U {
  /**
   * Create Plugin
   * @param {PluginV1alpha1ApiCreatePluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1Api
   */
  createPlugin(a = {}, s) {
    return Re(this.configuration).createPlugin(a.plugin, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Plugin
   * @param {PluginV1alpha1ApiDeletePluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1Api
   */
  deletePlugin(a, s) {
    return Re(this.configuration).deletePlugin(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Plugin
   * @param {PluginV1alpha1ApiGetPluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1Api
   */
  getPlugin(a, s) {
    return Re(this.configuration).getPlugin(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Plugin
   * @param {PluginV1alpha1ApiListPluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1Api
   */
  listPlugin(a = {}, s) {
    return Re(this.configuration).listPlugin(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Plugin
   * @param {PluginV1alpha1ApiPatchPluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1Api
   */
  patchPlugin(a, s) {
    return Re(this.configuration).patchPlugin(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Plugin
   * @param {PluginV1alpha1ApiUpdatePluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1Api
   */
  updatePlugin(a, s) {
    return Re(this.configuration).updatePlugin(a.name, a.plugin, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ls = function(e) {
  return {
    /**
     * Change the running state of a plugin by name.
     * @param {string} name 
     * @param {PluginRunningStateRequest} pluginRunningStateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changePluginRunningState: async (a, s, n = {}) => {
      R("changePluginRunningState", "name", a), R("changePluginRunningState", "pluginRunningStateRequest", s);
      const l = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/plugin-state".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Merge all CSS bundles of enabled plugins into one.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchCssBundle: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/plugins/-/bundle.css", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Merge all JS bundles of enabled plugins into one.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchJsBundle: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/plugins/-/bundle.js", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Fetch configMap of plugin by configured configMapName. it is deprecated since 2.20.0
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPluginConfig: async (a, s = {}) => {
      R("fetchPluginConfig", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/config".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch converted json config of plugin by configured configMapName.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPluginJsonConfig: async (a, s = {}) => {
      R("fetchPluginJsonConfig", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/json-config".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch setting of plugin.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPluginSetting: async (a, s = {}) => {
      R("fetchPluginSetting", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/setting".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Install a plugin by uploading a Jar file.
     * @param {File} [file] 
     * @param {string} [presetName] Plugin preset name. We will find the plugin from plugin presets
     * @param {InstallPluginSourceEnum} [source] Install source. Default is file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installPlugin: async (a, s, n, l = {}) => {
      const r = "/apis/api.console.halo.run/v1alpha1/plugins/install", t = new URL(r, O);
      let o;
      e && (o = e.baseOptions);
      const c = { method: "POST", ...o, ...l }, p = {}, h = {}, i = new (e && e.formDataCtor || FormData)();
      P(c, e), await u(p, e), a !== void 0 && i.append("file", a), s !== void 0 && i.append("presetName", s), n !== void 0 && i.append("source", n), p["Content-Type"] = "multipart/form-data", v(t, h);
      let d = o && o.headers ? o.headers : {};
      return c.headers = { ...p, ...d, ...l.headers }, c.data = i, {
        url: S(t),
        options: c
      };
    },
    /**
     * Install a plugin from uri.
     * @param {InstallFromUriRequest} installFromUriRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installPluginFromUri: async (a, s = {}) => {
      R("installPluginFromUri", "installFromUriRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/plugins/-/install-from-uri", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * List plugins using query criteria and sort params
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [keyword] Keyword of plugin name or description
     * @param {boolean} [enabled] Whether the plugin is enabled
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPlugins: async (a, s, n, l, r, t, o, c = {}) => {
      const p = "/apis/api.console.halo.run/v1alpha1/plugins", h = new URL(p, O);
      let i;
      e && (i = e.baseOptions);
      const d = { method: "GET", ...i, ...c }, b = {}, x = {};
      P(d, e), await u(b, e), a !== void 0 && (x.page = a), s !== void 0 && (x.size = s), n && (x.labelSelector = n), l && (x.fieldSelector = l), r && (x.sort = r), t !== void 0 && (x.keyword = t), o !== void 0 && (x.enabled = o), v(h, x);
      let w = i && i.headers ? i.headers : {};
      return d.headers = { ...b, ...w, ...c.headers }, {
        url: S(h),
        options: d
      };
    },
    /**
     * Reload a plugin by name.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reloadPlugin: async (a, s = {}) => {
      R("reloadPlugin", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/reload".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Reset the configMap of plugin setting.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetPluginConfig: async (a, s = {}) => {
      R("resetPluginConfig", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/reset-config".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Update the configMap of plugin setting, it is deprecated since 2.20.0
     * @param {string} name 
     * @param {ConfigMap} configMap 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    updatePluginConfig: async (a, s, n = {}) => {
      R("updatePluginConfig", "name", a), R("updatePluginConfig", "configMap", s);
      const l = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/config".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update the config of plugin setting.
     * @param {string} name 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePluginJsonConfig: async (a, s, n = {}) => {
      R("updatePluginJsonConfig", "name", a), R("updatePluginJsonConfig", "body", s);
      const l = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/json-config".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Upgrade a plugin by uploading a Jar file
     * @param {string} name 
     * @param {File} [file] 
     * @param {string} [presetName] Plugin preset name. We will find the plugin from plugin presets
     * @param {UpgradePluginSourceEnum} [source] Install source. Default is file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradePlugin: async (a, s, n, l, r = {}) => {
      R("upgradePlugin", "name", a);
      const t = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/upgrade".replace("{name}", encodeURIComponent(String(a))), o = new URL(t, O);
      let c;
      e && (c = e.baseOptions);
      const p = { method: "POST", ...c, ...r }, h = {}, i = {}, d = new (e && e.formDataCtor || FormData)();
      P(p, e), await u(h, e), s !== void 0 && d.append("file", s), n !== void 0 && d.append("presetName", n), l !== void 0 && d.append("source", l), h["Content-Type"] = "multipart/form-data", v(o, i);
      let b = c && c.headers ? c.headers : {};
      return p.headers = { ...h, ...b, ...r.headers }, p.data = d, {
        url: S(o),
        options: p
      };
    },
    /**
     * Upgrade a plugin from uri.
     * @param {string} name 
     * @param {UpgradeFromUriRequest} upgradeFromUriRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradePluginFromUri: async (a, s, n = {}) => {
      R("upgradePluginFromUri", "name", a), R("upgradePluginFromUri", "upgradeFromUriRequest", s);
      const l = "/apis/api.console.halo.run/v1alpha1/plugins/{name}/upgrade-from-uri".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, D = function(e) {
  const a = Ls(e);
  return {
    /**
     * Change the running state of a plugin by name.
     * @param {string} name 
     * @param {PluginRunningStateRequest} pluginRunningStateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async changePluginRunningState(s, n, l) {
      var c, p;
      const r = await a.changePluginRunningState(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PluginV1alpha1ConsoleApi.changePluginRunningState"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Merge all CSS bundles of enabled plugins into one.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchCssBundle(s) {
      var t, o;
      const n = await a.fetchCssBundle(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["PluginV1alpha1ConsoleApi.fetchCssBundle"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Merge all JS bundles of enabled plugins into one.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchJsBundle(s) {
      var t, o;
      const n = await a.fetchJsBundle(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["PluginV1alpha1ConsoleApi.fetchJsBundle"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Fetch configMap of plugin by configured configMapName. it is deprecated since 2.20.0
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchPluginConfig(s, n) {
      var o, c;
      const l = await a.fetchPluginConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1ConsoleApi.fetchPluginConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch converted json config of plugin by configured configMapName.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchPluginJsonConfig(s, n) {
      var o, c;
      const l = await a.fetchPluginJsonConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1ConsoleApi.fetchPluginJsonConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch setting of plugin.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchPluginSetting(s, n) {
      var o, c;
      const l = await a.fetchPluginSetting(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1ConsoleApi.fetchPluginSetting"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Install a plugin by uploading a Jar file.
     * @param {File} [file] 
     * @param {string} [presetName] Plugin preset name. We will find the plugin from plugin presets
     * @param {InstallPluginSourceEnum} [source] Install source. Default is file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async installPlugin(s, n, l, r) {
      var p, h;
      const t = await a.installPlugin(s, n, l, r), o = (e == null ? void 0 : e.serverIndex) ?? 0, c = (h = (p = y["PluginV1alpha1ConsoleApi.installPlugin"]) == null ? void 0 : p[o]) == null ? void 0 : h.url;
      return (i, d) => A(t, m, V, e)(i, c || d);
    },
    /**
     * Install a plugin from uri.
     * @param {InstallFromUriRequest} installFromUriRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async installPluginFromUri(s, n) {
      var o, c;
      const l = await a.installPluginFromUri(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1ConsoleApi.installPluginFromUri"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List plugins using query criteria and sort params
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [keyword] Keyword of plugin name or description
     * @param {boolean} [enabled] Whether the plugin is enabled
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPlugins(s, n, l, r, t, o, c, p) {
      var b, x;
      const h = await a.listPlugins(s, n, l, r, t, o, c, p), i = (e == null ? void 0 : e.serverIndex) ?? 0, d = (x = (b = y["PluginV1alpha1ConsoleApi.listPlugins"]) == null ? void 0 : b[i]) == null ? void 0 : x.url;
      return (w, T) => A(h, m, V, e)(w, d || T);
    },
    /**
     * Reload a plugin by name.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async reloadPlugin(s, n) {
      var o, c;
      const l = await a.reloadPlugin(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1ConsoleApi.reloadPlugin"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Reset the configMap of plugin setting.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async resetPluginConfig(s, n) {
      var o, c;
      const l = await a.resetPluginConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1ConsoleApi.resetPluginConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Update the configMap of plugin setting, it is deprecated since 2.20.0
     * @param {string} name 
     * @param {ConfigMap} configMap 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async updatePluginConfig(s, n, l) {
      var c, p;
      const r = await a.updatePluginConfig(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PluginV1alpha1ConsoleApi.updatePluginConfig"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update the config of plugin setting.
     * @param {string} name 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatePluginJsonConfig(s, n, l) {
      var c, p;
      const r = await a.updatePluginJsonConfig(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PluginV1alpha1ConsoleApi.updatePluginJsonConfig"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Upgrade a plugin by uploading a Jar file
     * @param {string} name 
     * @param {File} [file] 
     * @param {string} [presetName] Plugin preset name. We will find the plugin from plugin presets
     * @param {UpgradePluginSourceEnum} [source] Install source. Default is file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async upgradePlugin(s, n, l, r, t) {
      var h, i;
      const o = await a.upgradePlugin(s, n, l, r, t), c = (e == null ? void 0 : e.serverIndex) ?? 0, p = (i = (h = y["PluginV1alpha1ConsoleApi.upgradePlugin"]) == null ? void 0 : h[c]) == null ? void 0 : i.url;
      return (d, b) => A(o, m, V, e)(d, p || b);
    },
    /**
     * Upgrade a plugin from uri.
     * @param {string} name 
     * @param {UpgradeFromUriRequest} upgradeFromUriRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async upgradePluginFromUri(s, n, l) {
      var c, p;
      const r = await a.upgradePluginFromUri(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PluginV1alpha1ConsoleApi.upgradePluginFromUri"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Pp = function(e, a, s) {
  const n = D(e);
  return {
    /**
     * Change the running state of a plugin by name.
     * @param {PluginV1alpha1ConsoleApiChangePluginRunningStateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changePluginRunningState(l, r) {
      return n.changePluginRunningState(l.name, l.pluginRunningStateRequest, r).then((t) => t(s, a));
    },
    /**
     * Merge all CSS bundles of enabled plugins into one.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchCssBundle(l) {
      return n.fetchCssBundle(l).then((r) => r(s, a));
    },
    /**
     * Merge all JS bundles of enabled plugins into one.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchJsBundle(l) {
      return n.fetchJsBundle(l).then((r) => r(s, a));
    },
    /**
     * Fetch configMap of plugin by configured configMapName. it is deprecated since 2.20.0
     * @param {PluginV1alpha1ConsoleApiFetchPluginConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPluginConfig(l, r) {
      return n.fetchPluginConfig(l.name, r).then((t) => t(s, a));
    },
    /**
     * Fetch converted json config of plugin by configured configMapName.
     * @param {PluginV1alpha1ConsoleApiFetchPluginJsonConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPluginJsonConfig(l, r) {
      return n.fetchPluginJsonConfig(l.name, r).then((t) => t(s, a));
    },
    /**
     * Fetch setting of plugin.
     * @param {PluginV1alpha1ConsoleApiFetchPluginSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPluginSetting(l, r) {
      return n.fetchPluginSetting(l.name, r).then((t) => t(s, a));
    },
    /**
     * Install a plugin by uploading a Jar file.
     * @param {PluginV1alpha1ConsoleApiInstallPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installPlugin(l = {}, r) {
      return n.installPlugin(l.file, l.presetName, l.source, r).then((t) => t(s, a));
    },
    /**
     * Install a plugin from uri.
     * @param {PluginV1alpha1ConsoleApiInstallPluginFromUriRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installPluginFromUri(l, r) {
      return n.installPluginFromUri(l.installFromUriRequest, r).then((t) => t(s, a));
    },
    /**
     * List plugins using query criteria and sort params
     * @param {PluginV1alpha1ConsoleApiListPluginsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPlugins(l = {}, r) {
      return n.listPlugins(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.keyword, l.enabled, r).then((t) => t(s, a));
    },
    /**
     * Reload a plugin by name.
     * @param {PluginV1alpha1ConsoleApiReloadPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reloadPlugin(l, r) {
      return n.reloadPlugin(l.name, r).then((t) => t(s, a));
    },
    /**
     * Reset the configMap of plugin setting.
     * @param {PluginV1alpha1ConsoleApiResetPluginConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetPluginConfig(l, r) {
      return n.resetPluginConfig(l.name, r).then((t) => t(s, a));
    },
    /**
     * Update the configMap of plugin setting, it is deprecated since 2.20.0
     * @param {PluginV1alpha1ConsoleApiUpdatePluginConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    updatePluginConfig(l, r) {
      return n.updatePluginConfig(l.name, l.configMap, r).then((t) => t(s, a));
    },
    /**
     * Update the config of plugin setting.
     * @param {PluginV1alpha1ConsoleApiUpdatePluginJsonConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePluginJsonConfig(l, r) {
      return n.updatePluginJsonConfig(l.name, l.body, r).then((t) => t(s, a));
    },
    /**
     * Upgrade a plugin by uploading a Jar file
     * @param {PluginV1alpha1ConsoleApiUpgradePluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradePlugin(l, r) {
      return n.upgradePlugin(l.name, l.file, l.presetName, l.source, r).then((t) => t(s, a));
    },
    /**
     * Upgrade a plugin from uri.
     * @param {PluginV1alpha1ConsoleApiUpgradePluginFromUriRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradePluginFromUri(l, r) {
      return n.upgradePluginFromUri(l.name, l.upgradeFromUriRequest, r).then((t) => t(s, a));
    }
  };
};
class Ds extends U {
  /**
   * Change the running state of a plugin by name.
   * @param {PluginV1alpha1ConsoleApiChangePluginRunningStateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  changePluginRunningState(a, s) {
    return D(this.configuration).changePluginRunningState(a.name, a.pluginRunningStateRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Merge all CSS bundles of enabled plugins into one.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  fetchCssBundle(a) {
    return D(this.configuration).fetchCssBundle(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Merge all JS bundles of enabled plugins into one.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  fetchJsBundle(a) {
    return D(this.configuration).fetchJsBundle(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Fetch configMap of plugin by configured configMapName. it is deprecated since 2.20.0
   * @param {PluginV1alpha1ConsoleApiFetchPluginConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  fetchPluginConfig(a, s) {
    return D(this.configuration).fetchPluginConfig(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch converted json config of plugin by configured configMapName.
   * @param {PluginV1alpha1ConsoleApiFetchPluginJsonConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  fetchPluginJsonConfig(a, s) {
    return D(this.configuration).fetchPluginJsonConfig(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch setting of plugin.
   * @param {PluginV1alpha1ConsoleApiFetchPluginSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  fetchPluginSetting(a, s) {
    return D(this.configuration).fetchPluginSetting(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Install a plugin by uploading a Jar file.
   * @param {PluginV1alpha1ConsoleApiInstallPluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  installPlugin(a = {}, s) {
    return D(this.configuration).installPlugin(a.file, a.presetName, a.source, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Install a plugin from uri.
   * @param {PluginV1alpha1ConsoleApiInstallPluginFromUriRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  installPluginFromUri(a, s) {
    return D(this.configuration).installPluginFromUri(a.installFromUriRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List plugins using query criteria and sort params
   * @param {PluginV1alpha1ConsoleApiListPluginsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  listPlugins(a = {}, s) {
    return D(this.configuration).listPlugins(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.keyword, a.enabled, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Reload a plugin by name.
   * @param {PluginV1alpha1ConsoleApiReloadPluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  reloadPlugin(a, s) {
    return D(this.configuration).reloadPlugin(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Reset the configMap of plugin setting.
   * @param {PluginV1alpha1ConsoleApiResetPluginConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  resetPluginConfig(a, s) {
    return D(this.configuration).resetPluginConfig(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update the configMap of plugin setting, it is deprecated since 2.20.0
   * @param {PluginV1alpha1ConsoleApiUpdatePluginConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @deprecated
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  updatePluginConfig(a, s) {
    return D(this.configuration).updatePluginConfig(a.name, a.configMap, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update the config of plugin setting.
   * @param {PluginV1alpha1ConsoleApiUpdatePluginJsonConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  updatePluginJsonConfig(a, s) {
    return D(this.configuration).updatePluginJsonConfig(a.name, a.body, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Upgrade a plugin by uploading a Jar file
   * @param {PluginV1alpha1ConsoleApiUpgradePluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  upgradePlugin(a, s) {
    return D(this.configuration).upgradePlugin(a.name, a.file, a.presetName, a.source, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Upgrade a plugin from uri.
   * @param {PluginV1alpha1ConsoleApiUpgradePluginFromUriRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1ConsoleApi
   */
  upgradePluginFromUri(a, s) {
    return D(this.configuration).upgradePluginFromUri(a.name, a.upgradeFromUriRequest, s).then((n) => n(this.axios, this.basePath));
  }
}
const up = {
  File: "FILE",
  Preset: "PRESET",
  Url: "URL"
}, vp = {
  File: "FILE",
  Preset: "PRESET",
  Url: "URL"
}, Ns = function(e) {
  return {
    /**
     * Gets plugin available by name.
     * @param {string} name Plugin name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPluginAvailableByName: async (a, s = {}) => {
      R("queryPluginAvailableByName", "name", a);
      const n = "/apis/api.plugin.halo.run/v1alpha1/plugins/{name}/available".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    }
  };
}, _t = function(e) {
  const a = Ns(e);
  return {
    /**
     * Gets plugin available by name.
     * @param {string} name Plugin name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryPluginAvailableByName(s, n) {
      var o, c;
      const l = await a.queryPluginAvailableByName(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PluginV1alpha1PublicApi.queryPluginAvailableByName"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    }
  };
}, Sp = function(e, a, s) {
  const n = _t(e);
  return {
    /**
     * Gets plugin available by name.
     * @param {PluginV1alpha1PublicApiQueryPluginAvailableByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPluginAvailableByName(l, r) {
      return n.queryPluginAvailableByName(l.name, r).then((t) => t(s, a));
    }
  };
};
class Ap extends U {
  /**
   * Gets plugin available by name.
   * @param {PluginV1alpha1PublicApiQueryPluginAvailableByNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginV1alpha1PublicApi
   */
  queryPluginAvailableByName(a, s) {
    return _t(this.configuration).queryPluginAvailableByName(a.name, s).then((n) => n(this.axios, this.basePath));
  }
}
const Hs = function(e) {
  return {
    /**
     * Create PolicyTemplate
     * @param {PolicyTemplate} [policyTemplate] Fresh policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPolicyTemplate: async (a, s = {}) => {
      const n = "/apis/storage.halo.run/v1alpha1/policytemplates", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePolicyTemplate: async (a, s = {}) => {
      R("deletePolicyTemplate", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/policytemplates/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPolicyTemplate: async (a, s = {}) => {
      R("getPolicyTemplate", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/policytemplates/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List PolicyTemplate
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPolicyTemplate: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/storage.halo.run/v1alpha1/policytemplates", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPolicyTemplate: async (a, s, n = {}) => {
      R("patchPolicyTemplate", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/policytemplates/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {PolicyTemplate} [policyTemplate] Updated policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePolicyTemplate: async (a, s, n = {}) => {
      R("updatePolicyTemplate", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/policytemplates/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, xe = function(e) {
  const a = Hs(e);
  return {
    /**
     * Create PolicyTemplate
     * @param {PolicyTemplate} [policyTemplate] Fresh policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createPolicyTemplate(s, n) {
      var o, c;
      const l = await a.createPolicyTemplate(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PolicyTemplateV1alpha1Api.createPolicyTemplate"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletePolicyTemplate(s, n) {
      var o, c;
      const l = await a.deletePolicyTemplate(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PolicyTemplateV1alpha1Api.deletePolicyTemplate"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPolicyTemplate(s, n) {
      var o, c;
      const l = await a.getPolicyTemplate(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PolicyTemplateV1alpha1Api.getPolicyTemplate"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List PolicyTemplate
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPolicyTemplate(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listPolicyTemplate(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["PolicyTemplateV1alpha1Api.listPolicyTemplate"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchPolicyTemplate(s, n, l) {
      var c, p;
      const r = await a.patchPolicyTemplate(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PolicyTemplateV1alpha1Api.patchPolicyTemplate"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {PolicyTemplate} [policyTemplate] Updated policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatePolicyTemplate(s, n, l) {
      var c, p;
      const r = await a.updatePolicyTemplate(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PolicyTemplateV1alpha1Api.updatePolicyTemplate"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, bp = function(e, a, s) {
  const n = xe(e);
  return {
    /**
     * Create PolicyTemplate
     * @param {PolicyTemplateV1alpha1ApiCreatePolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPolicyTemplate(l = {}, r) {
      return n.createPolicyTemplate(l.policyTemplate, r).then((t) => t(s, a));
    },
    /**
     * Delete PolicyTemplate
     * @param {PolicyTemplateV1alpha1ApiDeletePolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePolicyTemplate(l, r) {
      return n.deletePolicyTemplate(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get PolicyTemplate
     * @param {PolicyTemplateV1alpha1ApiGetPolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPolicyTemplate(l, r) {
      return n.getPolicyTemplate(l.name, r).then((t) => t(s, a));
    },
    /**
     * List PolicyTemplate
     * @param {PolicyTemplateV1alpha1ApiListPolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPolicyTemplate(l = {}, r) {
      return n.listPolicyTemplate(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch PolicyTemplate
     * @param {PolicyTemplateV1alpha1ApiPatchPolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPolicyTemplate(l, r) {
      return n.patchPolicyTemplate(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update PolicyTemplate
     * @param {PolicyTemplateV1alpha1ApiUpdatePolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePolicyTemplate(l, r) {
      return n.updatePolicyTemplate(l.name, l.policyTemplate, r).then((t) => t(s, a));
    }
  };
};
class Ms extends U {
  /**
   * Create PolicyTemplate
   * @param {PolicyTemplateV1alpha1ApiCreatePolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyTemplateV1alpha1Api
   */
  createPolicyTemplate(a = {}, s) {
    return xe(this.configuration).createPolicyTemplate(a.policyTemplate, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete PolicyTemplate
   * @param {PolicyTemplateV1alpha1ApiDeletePolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyTemplateV1alpha1Api
   */
  deletePolicyTemplate(a, s) {
    return xe(this.configuration).deletePolicyTemplate(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get PolicyTemplate
   * @param {PolicyTemplateV1alpha1ApiGetPolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyTemplateV1alpha1Api
   */
  getPolicyTemplate(a, s) {
    return xe(this.configuration).getPolicyTemplate(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List PolicyTemplate
   * @param {PolicyTemplateV1alpha1ApiListPolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyTemplateV1alpha1Api
   */
  listPolicyTemplate(a = {}, s) {
    return xe(this.configuration).listPolicyTemplate(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch PolicyTemplate
   * @param {PolicyTemplateV1alpha1ApiPatchPolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyTemplateV1alpha1Api
   */
  patchPolicyTemplate(a, s) {
    return xe(this.configuration).patchPolicyTemplate(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update PolicyTemplate
   * @param {PolicyTemplateV1alpha1ApiUpdatePolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyTemplateV1alpha1Api
   */
  updatePolicyTemplate(a, s) {
    return xe(this.configuration).updatePolicyTemplate(a.name, a.policyTemplate, s).then((n) => n(this.axios, this.basePath));
  }
}
const Qs = function(e) {
  return {
    /**
     * Create Policy
     * @param {Policy} [policy] Fresh policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPolicy: async (a, s = {}) => {
      const n = "/apis/storage.halo.run/v1alpha1/policies", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePolicy: async (a, s = {}) => {
      R("deletePolicy", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/policies/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPolicy: async (a, s = {}) => {
      R("getPolicy", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/policies/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Policy
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPolicy: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/storage.halo.run/v1alpha1/policies", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Policy
     * @param {string} name Name of policy
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPolicy: async (a, s, n = {}) => {
      R("patchPolicy", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/policies/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Policy
     * @param {string} name Name of policy
     * @param {Policy} [policy] Updated policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePolicy: async (a, s, n = {}) => {
      R("updatePolicy", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/policies/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Ce = function(e) {
  const a = Qs(e);
  return {
    /**
     * Create Policy
     * @param {Policy} [policy] Fresh policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createPolicy(s, n) {
      var o, c;
      const l = await a.createPolicy(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PolicyV1alpha1Api.createPolicy"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletePolicy(s, n) {
      var o, c;
      const l = await a.deletePolicy(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PolicyV1alpha1Api.deletePolicy"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPolicy(s, n) {
      var o, c;
      const l = await a.getPolicy(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PolicyV1alpha1Api.getPolicy"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Policy
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPolicy(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listPolicy(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["PolicyV1alpha1Api.listPolicy"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Policy
     * @param {string} name Name of policy
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchPolicy(s, n, l) {
      var c, p;
      const r = await a.patchPolicy(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PolicyV1alpha1Api.patchPolicy"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Policy
     * @param {string} name Name of policy
     * @param {Policy} [policy] Updated policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatePolicy(s, n, l) {
      var c, p;
      const r = await a.updatePolicy(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PolicyV1alpha1Api.updatePolicy"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Rp = function(e, a, s) {
  const n = Ce(e);
  return {
    /**
     * Create Policy
     * @param {PolicyV1alpha1ApiCreatePolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPolicy(l = {}, r) {
      return n.createPolicy(l.policy, r).then((t) => t(s, a));
    },
    /**
     * Delete Policy
     * @param {PolicyV1alpha1ApiDeletePolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePolicy(l, r) {
      return n.deletePolicy(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Policy
     * @param {PolicyV1alpha1ApiGetPolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPolicy(l, r) {
      return n.getPolicy(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Policy
     * @param {PolicyV1alpha1ApiListPolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPolicy(l = {}, r) {
      return n.listPolicy(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Policy
     * @param {PolicyV1alpha1ApiPatchPolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPolicy(l, r) {
      return n.patchPolicy(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Policy
     * @param {PolicyV1alpha1ApiUpdatePolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePolicy(l, r) {
      return n.updatePolicy(l.name, l.policy, r).then((t) => t(s, a));
    }
  };
};
class ks extends U {
  /**
   * Create Policy
   * @param {PolicyV1alpha1ApiCreatePolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyV1alpha1Api
   */
  createPolicy(a = {}, s) {
    return Ce(this.configuration).createPolicy(a.policy, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Policy
   * @param {PolicyV1alpha1ApiDeletePolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyV1alpha1Api
   */
  deletePolicy(a, s) {
    return Ce(this.configuration).deletePolicy(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Policy
   * @param {PolicyV1alpha1ApiGetPolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyV1alpha1Api
   */
  getPolicy(a, s) {
    return Ce(this.configuration).getPolicy(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Policy
   * @param {PolicyV1alpha1ApiListPolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyV1alpha1Api
   */
  listPolicy(a = {}, s) {
    return Ce(this.configuration).listPolicy(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Policy
   * @param {PolicyV1alpha1ApiPatchPolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyV1alpha1Api
   */
  patchPolicy(a, s) {
    return Ce(this.configuration).patchPolicy(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Policy
   * @param {PolicyV1alpha1ApiUpdatePolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PolicyV1alpha1Api
   */
  updatePolicy(a, s) {
    return Ce(this.configuration).updatePolicy(a.name, a.policy, s).then((n) => n(this.axios, this.basePath));
  }
}
const $s = function(e) {
  return {
    /**
     * Create Post
     * @param {Post} [post] Fresh post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPost: async (a, s = {}) => {
      const n = "/apis/content.halo.run/v1alpha1/posts", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Post
     * @param {string} name Name of post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePost: async (a, s = {}) => {
      R("deletePost", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/posts/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Post
     * @param {string} name Name of post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPost: async (a, s = {}) => {
      R("getPost", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/posts/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Post
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPost: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/content.halo.run/v1alpha1/posts", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Post
     * @param {string} name Name of post
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPost: async (a, s, n = {}) => {
      R("patchPost", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/posts/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Post
     * @param {string} name Name of post
     * @param {Post} [post] Updated post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePost: async (a, s, n = {}) => {
      R("updatePost", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/posts/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, we = function(e) {
  const a = $s(e);
  return {
    /**
     * Create Post
     * @param {Post} [post] Fresh post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createPost(s, n) {
      var o, c;
      const l = await a.createPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1Api.createPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Post
     * @param {string} name Name of post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletePost(s, n) {
      var o, c;
      const l = await a.deletePost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1Api.deletePost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Post
     * @param {string} name Name of post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPost(s, n) {
      var o, c;
      const l = await a.getPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1Api.getPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Post
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPost(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listPost(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["PostV1alpha1Api.listPost"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Post
     * @param {string} name Name of post
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchPost(s, n, l) {
      var c, p;
      const r = await a.patchPost(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1Api.patchPost"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Post
     * @param {string} name Name of post
     * @param {Post} [post] Updated post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatePost(s, n, l) {
      var c, p;
      const r = await a.updatePost(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1Api.updatePost"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, xp = function(e, a, s) {
  const n = we(e);
  return {
    /**
     * Create Post
     * @param {PostV1alpha1ApiCreatePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPost(l = {}, r) {
      return n.createPost(l.post, r).then((t) => t(s, a));
    },
    /**
     * Delete Post
     * @param {PostV1alpha1ApiDeletePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePost(l, r) {
      return n.deletePost(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Post
     * @param {PostV1alpha1ApiGetPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPost(l, r) {
      return n.getPost(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Post
     * @param {PostV1alpha1ApiListPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPost(l = {}, r) {
      return n.listPost(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Post
     * @param {PostV1alpha1ApiPatchPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchPost(l, r) {
      return n.patchPost(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Post
     * @param {PostV1alpha1ApiUpdatePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePost(l, r) {
      return n.updatePost(l.name, l.post, r).then((t) => t(s, a));
    }
  };
};
class Gs extends U {
  /**
   * Create Post
   * @param {PostV1alpha1ApiCreatePostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1Api
   */
  createPost(a = {}, s) {
    return we(this.configuration).createPost(a.post, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Post
   * @param {PostV1alpha1ApiDeletePostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1Api
   */
  deletePost(a, s) {
    return we(this.configuration).deletePost(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Post
   * @param {PostV1alpha1ApiGetPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1Api
   */
  getPost(a, s) {
    return we(this.configuration).getPost(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Post
   * @param {PostV1alpha1ApiListPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1Api
   */
  listPost(a = {}, s) {
    return we(this.configuration).listPost(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Post
   * @param {PostV1alpha1ApiPatchPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1Api
   */
  patchPost(a, s) {
    return we(this.configuration).patchPost(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Post
   * @param {PostV1alpha1ApiUpdatePostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1Api
   */
  updatePost(a, s) {
    return we(this.configuration).updatePost(a.name, a.post, s).then((n) => n(this.axios, this.basePath));
  }
}
const zs = function(e) {
  return {
    /**
     * Delete a content for post.
     * @param {string} name 
     * @param {string} snapshotName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePostContent: async (a, s, n = {}) => {
      R("deletePostContent", "name", a), R("deletePostContent", "snapshotName", s);
      const l = "/apis/api.console.halo.run/v1alpha1/posts/{name}/content".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "DELETE", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), s !== void 0 && (p.snapshotName = s), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    },
    /**
     * Draft a post.
     * @param {PostRequest} postRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftPost: async (a, s = {}) => {
      R("draftPost", "postRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/posts", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch content of post.
     * @param {string} name 
     * @param {string} snapshotName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPostContent: async (a, s, n = {}) => {
      R("fetchPostContent", "name", a), R("fetchPostContent", "snapshotName", s);
      const l = "/apis/api.console.halo.run/v1alpha1/posts/{name}/content".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "GET", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), s !== void 0 && (p.snapshotName = s), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    },
    /**
     * Fetch head content of post.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPostHeadContent: async (a, s = {}) => {
      R("fetchPostHeadContent", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/posts/{name}/head-content".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch release content of post.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPostReleaseContent: async (a, s = {}) => {
      R("fetchPostReleaseContent", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/posts/{name}/release-content".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List all snapshots for post content.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPostSnapshots: async (a, s = {}) => {
      R("listPostSnapshots", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/posts/{name}/snapshot".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List posts.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {ListPostsPublishPhaseEnum} [publishPhase] Posts filtered by publish phase.
     * @param {string} [keyword] Posts filtered by keyword.
     * @param {string} [categoryWithChildren] Posts filtered by category including sub-categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPosts: async (a, s, n, l, r, t, o, c, p = {}) => {
      const h = "/apis/api.console.halo.run/v1alpha1/posts", i = new URL(h, O);
      let d;
      e && (d = e.baseOptions);
      const b = { method: "GET", ...d, ...p }, x = {}, w = {};
      P(b, e), await u(x, e), a !== void 0 && (w.page = a), s !== void 0 && (w.size = s), n && (w.labelSelector = n), l && (w.fieldSelector = l), r && (w.sort = r), t !== void 0 && (w.publishPhase = t), o !== void 0 && (w.keyword = o), c !== void 0 && (w.categoryWithChildren = c), v(i, w);
      let T = d && d.headers ? d.headers : {};
      return b.headers = { ...x, ...T, ...p.headers }, {
        url: S(i),
        options: b
      };
    },
    /**
     * Publish a post.
     * @param {string} name 
     * @param {string} [headSnapshot] Head snapshot name of content.
     * @param {boolean} [async] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishPost: async (a, s, n, l = {}) => {
      R("publishPost", "name", a);
      const r = "/apis/api.console.halo.run/v1alpha1/posts/{name}/publish".replace("{name}", encodeURIComponent(String(a))), t = new URL(r, O);
      let o;
      e && (o = e.baseOptions);
      const c = { method: "PUT", ...o, ...l }, p = {}, h = {};
      P(c, e), await u(p, e), s !== void 0 && (h.headSnapshot = s), n !== void 0 && (h.async = n), v(t, h);
      let i = o && o.headers ? o.headers : {};
      return c.headers = { ...p, ...i, ...l.headers }, {
        url: S(t),
        options: c
      };
    },
    /**
     * Recycle a post.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    recyclePost: async (a, s = {}) => {
      R("recyclePost", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/posts/{name}/recycle".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Revert to specified snapshot for post content.
     * @param {string} name 
     * @param {RevertSnapshotForPostParam} revertSnapshotForPostParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revertToSpecifiedSnapshotForPost: async (a, s, n = {}) => {
      R("revertToSpecifiedSnapshotForPost", "name", a), R("revertToSpecifiedSnapshotForPost", "revertSnapshotForPostParam", s);
      const l = "/apis/api.console.halo.run/v1alpha1/posts/{name}/revert-content".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Publish a post.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpublishPost: async (a, s = {}) => {
      R("unpublishPost", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/posts/{name}/unpublish".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Update a post.
     * @param {string} name 
     * @param {PostRequest} postRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDraftPost: async (a, s, n = {}) => {
      R("updateDraftPost", "name", a), R("updateDraftPost", "postRequest", s);
      const l = "/apis/api.console.halo.run/v1alpha1/posts/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update a post\'s content.
     * @param {string} name 
     * @param {Content} content 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePostContent: async (a, s, n = {}) => {
      R("updatePostContent", "name", a), R("updatePostContent", "content", s);
      const l = "/apis/api.console.halo.run/v1alpha1/posts/{name}/content".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, M = function(e) {
  const a = zs(e);
  return {
    /**
     * Delete a content for post.
     * @param {string} name 
     * @param {string} snapshotName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletePostContent(s, n, l) {
      var c, p;
      const r = await a.deletePostContent(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1ConsoleApi.deletePostContent"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Draft a post.
     * @param {PostRequest} postRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async draftPost(s, n) {
      var o, c;
      const l = await a.draftPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1ConsoleApi.draftPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch content of post.
     * @param {string} name 
     * @param {string} snapshotName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchPostContent(s, n, l) {
      var c, p;
      const r = await a.fetchPostContent(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1ConsoleApi.fetchPostContent"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Fetch head content of post.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchPostHeadContent(s, n) {
      var o, c;
      const l = await a.fetchPostHeadContent(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1ConsoleApi.fetchPostHeadContent"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch release content of post.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchPostReleaseContent(s, n) {
      var o, c;
      const l = await a.fetchPostReleaseContent(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1ConsoleApi.fetchPostReleaseContent"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List all snapshots for post content.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPostSnapshots(s, n) {
      var o, c;
      const l = await a.listPostSnapshots(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1ConsoleApi.listPostSnapshots"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List posts.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {ListPostsPublishPhaseEnum} [publishPhase] Posts filtered by publish phase.
     * @param {string} [keyword] Posts filtered by keyword.
     * @param {string} [categoryWithChildren] Posts filtered by category including sub-categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPosts(s, n, l, r, t, o, c, p, h) {
      var x, w;
      const i = await a.listPosts(s, n, l, r, t, o, c, p, h), d = (e == null ? void 0 : e.serverIndex) ?? 0, b = (w = (x = y["PostV1alpha1ConsoleApi.listPosts"]) == null ? void 0 : x[d]) == null ? void 0 : w.url;
      return (T, F) => A(i, m, V, e)(T, b || F);
    },
    /**
     * Publish a post.
     * @param {string} name 
     * @param {string} [headSnapshot] Head snapshot name of content.
     * @param {boolean} [async] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async publishPost(s, n, l, r) {
      var p, h;
      const t = await a.publishPost(s, n, l, r), o = (e == null ? void 0 : e.serverIndex) ?? 0, c = (h = (p = y["PostV1alpha1ConsoleApi.publishPost"]) == null ? void 0 : p[o]) == null ? void 0 : h.url;
      return (i, d) => A(t, m, V, e)(i, c || d);
    },
    /**
     * Recycle a post.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async recyclePost(s, n) {
      var o, c;
      const l = await a.recyclePost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1ConsoleApi.recyclePost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Revert to specified snapshot for post content.
     * @param {string} name 
     * @param {RevertSnapshotForPostParam} revertSnapshotForPostParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async revertToSpecifiedSnapshotForPost(s, n, l) {
      var c, p;
      const r = await a.revertToSpecifiedSnapshotForPost(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1ConsoleApi.revertToSpecifiedSnapshotForPost"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Publish a post.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async unpublishPost(s, n) {
      var o, c;
      const l = await a.unpublishPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1ConsoleApi.unpublishPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Update a post.
     * @param {string} name 
     * @param {PostRequest} postRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDraftPost(s, n, l) {
      var c, p;
      const r = await a.updateDraftPost(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1ConsoleApi.updateDraftPost"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update a post\'s content.
     * @param {string} name 
     * @param {Content} content 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatePostContent(s, n, l) {
      var c, p;
      const r = await a.updatePostContent(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1ConsoleApi.updatePostContent"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Cp = function(e, a, s) {
  const n = M(e);
  return {
    /**
     * Delete a content for post.
     * @param {PostV1alpha1ConsoleApiDeletePostContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePostContent(l, r) {
      return n.deletePostContent(l.name, l.snapshotName, r).then((t) => t(s, a));
    },
    /**
     * Draft a post.
     * @param {PostV1alpha1ConsoleApiDraftPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftPost(l, r) {
      return n.draftPost(l.postRequest, r).then((t) => t(s, a));
    },
    /**
     * Fetch content of post.
     * @param {PostV1alpha1ConsoleApiFetchPostContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPostContent(l, r) {
      return n.fetchPostContent(l.name, l.snapshotName, r).then((t) => t(s, a));
    },
    /**
     * Fetch head content of post.
     * @param {PostV1alpha1ConsoleApiFetchPostHeadContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPostHeadContent(l, r) {
      return n.fetchPostHeadContent(l.name, r).then((t) => t(s, a));
    },
    /**
     * Fetch release content of post.
     * @param {PostV1alpha1ConsoleApiFetchPostReleaseContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchPostReleaseContent(l, r) {
      return n.fetchPostReleaseContent(l.name, r).then((t) => t(s, a));
    },
    /**
     * List all snapshots for post content.
     * @param {PostV1alpha1ConsoleApiListPostSnapshotsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPostSnapshots(l, r) {
      return n.listPostSnapshots(l.name, r).then((t) => t(s, a));
    },
    /**
     * List posts.
     * @param {PostV1alpha1ConsoleApiListPostsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPosts(l = {}, r) {
      return n.listPosts(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.publishPhase, l.keyword, l.categoryWithChildren, r).then((t) => t(s, a));
    },
    /**
     * Publish a post.
     * @param {PostV1alpha1ConsoleApiPublishPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishPost(l, r) {
      return n.publishPost(l.name, l.headSnapshot, l.async, r).then((t) => t(s, a));
    },
    /**
     * Recycle a post.
     * @param {PostV1alpha1ConsoleApiRecyclePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    recyclePost(l, r) {
      return n.recyclePost(l.name, r).then((t) => t(s, a));
    },
    /**
     * Revert to specified snapshot for post content.
     * @param {PostV1alpha1ConsoleApiRevertToSpecifiedSnapshotForPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revertToSpecifiedSnapshotForPost(l, r) {
      return n.revertToSpecifiedSnapshotForPost(l.name, l.revertSnapshotForPostParam, r).then((t) => t(s, a));
    },
    /**
     * Publish a post.
     * @param {PostV1alpha1ConsoleApiUnpublishPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpublishPost(l, r) {
      return n.unpublishPost(l.name, r).then((t) => t(s, a));
    },
    /**
     * Update a post.
     * @param {PostV1alpha1ConsoleApiUpdateDraftPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDraftPost(l, r) {
      return n.updateDraftPost(l.name, l.postRequest, r).then((t) => t(s, a));
    },
    /**
     * Update a post\'s content.
     * @param {PostV1alpha1ConsoleApiUpdatePostContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePostContent(l, r) {
      return n.updatePostContent(l.name, l.content, r).then((t) => t(s, a));
    }
  };
};
class _s extends U {
  /**
   * Delete a content for post.
   * @param {PostV1alpha1ConsoleApiDeletePostContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  deletePostContent(a, s) {
    return M(this.configuration).deletePostContent(a.name, a.snapshotName, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Draft a post.
   * @param {PostV1alpha1ConsoleApiDraftPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  draftPost(a, s) {
    return M(this.configuration).draftPost(a.postRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch content of post.
   * @param {PostV1alpha1ConsoleApiFetchPostContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  fetchPostContent(a, s) {
    return M(this.configuration).fetchPostContent(a.name, a.snapshotName, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch head content of post.
   * @param {PostV1alpha1ConsoleApiFetchPostHeadContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  fetchPostHeadContent(a, s) {
    return M(this.configuration).fetchPostHeadContent(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch release content of post.
   * @param {PostV1alpha1ConsoleApiFetchPostReleaseContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  fetchPostReleaseContent(a, s) {
    return M(this.configuration).fetchPostReleaseContent(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List all snapshots for post content.
   * @param {PostV1alpha1ConsoleApiListPostSnapshotsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  listPostSnapshots(a, s) {
    return M(this.configuration).listPostSnapshots(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List posts.
   * @param {PostV1alpha1ConsoleApiListPostsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  listPosts(a = {}, s) {
    return M(this.configuration).listPosts(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.publishPhase, a.keyword, a.categoryWithChildren, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Publish a post.
   * @param {PostV1alpha1ConsoleApiPublishPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  publishPost(a, s) {
    return M(this.configuration).publishPost(a.name, a.headSnapshot, a.async, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Recycle a post.
   * @param {PostV1alpha1ConsoleApiRecyclePostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  recyclePost(a, s) {
    return M(this.configuration).recyclePost(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Revert to specified snapshot for post content.
   * @param {PostV1alpha1ConsoleApiRevertToSpecifiedSnapshotForPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  revertToSpecifiedSnapshotForPost(a, s) {
    return M(this.configuration).revertToSpecifiedSnapshotForPost(a.name, a.revertSnapshotForPostParam, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Publish a post.
   * @param {PostV1alpha1ConsoleApiUnpublishPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  unpublishPost(a, s) {
    return M(this.configuration).unpublishPost(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update a post.
   * @param {PostV1alpha1ConsoleApiUpdateDraftPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  updateDraftPost(a, s) {
    return M(this.configuration).updateDraftPost(a.name, a.postRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update a post\'s content.
   * @param {PostV1alpha1ConsoleApiUpdatePostContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1ConsoleApi
   */
  updatePostContent(a, s) {
    return M(this.configuration).updatePostContent(a.name, a.content, s).then((n) => n(this.axios, this.basePath));
  }
}
const wp = {
  Draft: "DRAFT",
  PendingApproval: "PENDING_APPROVAL",
  Published: "PUBLISHED",
  Failed: "FAILED"
}, Js = function(e) {
  return {
    /**
     * Gets a post by name.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPostByName: async (a, s = {}) => {
      R("queryPostByName", "name", a);
      const n = "/apis/api.content.halo.run/v1alpha1/posts/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Gets a post navigation by name.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPostNavigationByName: async (a, s = {}) => {
      R("queryPostNavigationByName", "name", a);
      const n = "/apis/api.content.halo.run/v1alpha1/posts/{name}/navigation".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Lists posts.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPosts: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/api.content.halo.run/v1alpha1/posts", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    }
  };
}, Ia = function(e) {
  const a = Js(e);
  return {
    /**
     * Gets a post by name.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryPostByName(s, n) {
      var o, c;
      const l = await a.queryPostByName(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1PublicApi.queryPostByName"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Gets a post navigation by name.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryPostNavigationByName(s, n) {
      var o, c;
      const l = await a.queryPostNavigationByName(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1PublicApi.queryPostNavigationByName"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Lists posts.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryPosts(s, n, l, r, t, o) {
      var i, d;
      const c = await a.queryPosts(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["PostV1alpha1PublicApi.queryPosts"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    }
  };
}, Up = function(e, a, s) {
  const n = Ia(e);
  return {
    /**
     * Gets a post by name.
     * @param {PostV1alpha1PublicApiQueryPostByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPostByName(l, r) {
      return n.queryPostByName(l.name, r).then((t) => t(s, a));
    },
    /**
     * Gets a post navigation by name.
     * @param {PostV1alpha1PublicApiQueryPostNavigationByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPostNavigationByName(l, r) {
      return n.queryPostNavigationByName(l.name, r).then((t) => t(s, a));
    },
    /**
     * Lists posts.
     * @param {PostV1alpha1PublicApiQueryPostsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPosts(l = {}, r) {
      return n.queryPosts(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    }
  };
};
class Ws extends U {
  /**
   * Gets a post by name.
   * @param {PostV1alpha1PublicApiQueryPostByNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1PublicApi
   */
  queryPostByName(a, s) {
    return Ia(this.configuration).queryPostByName(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Gets a post navigation by name.
   * @param {PostV1alpha1PublicApiQueryPostNavigationByNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1PublicApi
   */
  queryPostNavigationByName(a, s) {
    return Ia(this.configuration).queryPostNavigationByName(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Lists posts.
   * @param {PostV1alpha1PublicApiQueryPostsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1PublicApi
   */
  queryPosts(a = {}, s) {
    return Ia(this.configuration).queryPosts(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ks = function(e) {
  return {
    /**
     * Create my post. If you want to create a post with content, please set  annotation: \"content.halo.run/content-json\" into annotations and refer  to Content for corresponding data type. 
     * @param {Post} [post] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMyPost: async (a, s = {}) => {
      const n = "/apis/uc.api.content.halo.run/v1alpha1/posts", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Get post that belongs to the current user.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyPost: async (a, s = {}) => {
      R("getMyPost", "name", a);
      const n = "/apis/uc.api.content.halo.run/v1alpha1/posts/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get my post draft.
     * @param {string} name Post name
     * @param {boolean} [patched] Should include patched content and raw or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyPostDraft: async (a, s, n = {}) => {
      R("getMyPostDraft", "name", a);
      const l = "/apis/uc.api.content.halo.run/v1alpha1/posts/{name}/draft".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "GET", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), s !== void 0 && (p.patched = s), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    },
    /**
     * List posts owned by the current user.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {ListMyPostsPublishPhaseEnum} [publishPhase] Posts filtered by publish phase.
     * @param {string} [keyword] Posts filtered by keyword.
     * @param {string} [categoryWithChildren] Posts filtered by category including sub-categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMyPosts: async (a, s, n, l, r, t, o, c, p = {}) => {
      const h = "/apis/uc.api.content.halo.run/v1alpha1/posts", i = new URL(h, O);
      let d;
      e && (d = e.baseOptions);
      const b = { method: "GET", ...d, ...p }, x = {}, w = {};
      P(b, e), await u(x, e), a !== void 0 && (w.page = a), s !== void 0 && (w.size = s), n && (w.labelSelector = n), l && (w.fieldSelector = l), r && (w.sort = r), t !== void 0 && (w.publishPhase = t), o !== void 0 && (w.keyword = o), c !== void 0 && (w.categoryWithChildren = c), v(i, w);
      let T = d && d.headers ? d.headers : {};
      return b.headers = { ...x, ...T, ...p.headers }, {
        url: S(i),
        options: b
      };
    },
    /**
     * Publish my post.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishMyPost: async (a, s = {}) => {
      R("publishMyPost", "name", a);
      const n = "/apis/uc.api.content.halo.run/v1alpha1/posts/{name}/publish".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Move my post to recycle bin.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    recycleMyPost: async (a, s = {}) => {
      R("recycleMyPost", "name", a);
      const n = "/apis/uc.api.content.halo.run/v1alpha1/posts/{name}/recycle".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Unpublish my post.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpublishMyPost: async (a, s = {}) => {
      R("unpublishMyPost", "name", a);
      const n = "/apis/uc.api.content.halo.run/v1alpha1/posts/{name}/unpublish".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Update my post.
     * @param {string} name Post name
     * @param {Post} [post] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMyPost: async (a, s, n = {}) => {
      R("updateMyPost", "name", a);
      const l = "/apis/uc.api.content.halo.run/v1alpha1/posts/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update draft of my post. Please make sure set annotation: \"content.halo.run/content-json\" into annotations and refer to Content for corresponding data type. 
     * @param {string} name Post name
     * @param {Snapshot} [snapshot] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMyPostDraft: async (a, s, n = {}) => {
      R("updateMyPostDraft", "name", a);
      const l = "/apis/uc.api.content.halo.run/v1alpha1/posts/{name}/draft".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, _ = function(e) {
  const a = Ks(e);
  return {
    /**
     * Create my post. If you want to create a post with content, please set  annotation: \"content.halo.run/content-json\" into annotations and refer  to Content for corresponding data type. 
     * @param {Post} [post] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createMyPost(s, n) {
      var o, c;
      const l = await a.createMyPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1UcApi.createMyPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get post that belongs to the current user.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMyPost(s, n) {
      var o, c;
      const l = await a.getMyPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1UcApi.getMyPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get my post draft.
     * @param {string} name Post name
     * @param {boolean} [patched] Should include patched content and raw or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMyPostDraft(s, n, l) {
      var c, p;
      const r = await a.getMyPostDraft(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1UcApi.getMyPostDraft"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * List posts owned by the current user.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {ListMyPostsPublishPhaseEnum} [publishPhase] Posts filtered by publish phase.
     * @param {string} [keyword] Posts filtered by keyword.
     * @param {string} [categoryWithChildren] Posts filtered by category including sub-categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listMyPosts(s, n, l, r, t, o, c, p, h) {
      var x, w;
      const i = await a.listMyPosts(s, n, l, r, t, o, c, p, h), d = (e == null ? void 0 : e.serverIndex) ?? 0, b = (w = (x = y["PostV1alpha1UcApi.listMyPosts"]) == null ? void 0 : x[d]) == null ? void 0 : w.url;
      return (T, F) => A(i, m, V, e)(T, b || F);
    },
    /**
     * Publish my post.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async publishMyPost(s, n) {
      var o, c;
      const l = await a.publishMyPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1UcApi.publishMyPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Move my post to recycle bin.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async recycleMyPost(s, n) {
      var o, c;
      const l = await a.recycleMyPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1UcApi.recycleMyPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Unpublish my post.
     * @param {string} name Post name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async unpublishMyPost(s, n) {
      var o, c;
      const l = await a.unpublishMyPost(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["PostV1alpha1UcApi.unpublishMyPost"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Update my post.
     * @param {string} name Post name
     * @param {Post} [post] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateMyPost(s, n, l) {
      var c, p;
      const r = await a.updateMyPost(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1UcApi.updateMyPost"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update draft of my post. Please make sure set annotation: \"content.halo.run/content-json\" into annotations and refer to Content for corresponding data type. 
     * @param {string} name Post name
     * @param {Snapshot} [snapshot] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateMyPostDraft(s, n, l) {
      var c, p;
      const r = await a.updateMyPostDraft(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["PostV1alpha1UcApi.updateMyPostDraft"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Tp = function(e, a, s) {
  const n = _(e);
  return {
    /**
     * Create my post. If you want to create a post with content, please set  annotation: \"content.halo.run/content-json\" into annotations and refer  to Content for corresponding data type. 
     * @param {PostV1alpha1UcApiCreateMyPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMyPost(l = {}, r) {
      return n.createMyPost(l.post, r).then((t) => t(s, a));
    },
    /**
     * Get post that belongs to the current user.
     * @param {PostV1alpha1UcApiGetMyPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyPost(l, r) {
      return n.getMyPost(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get my post draft.
     * @param {PostV1alpha1UcApiGetMyPostDraftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMyPostDraft(l, r) {
      return n.getMyPostDraft(l.name, l.patched, r).then((t) => t(s, a));
    },
    /**
     * List posts owned by the current user.
     * @param {PostV1alpha1UcApiListMyPostsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMyPosts(l = {}, r) {
      return n.listMyPosts(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.publishPhase, l.keyword, l.categoryWithChildren, r).then((t) => t(s, a));
    },
    /**
     * Publish my post.
     * @param {PostV1alpha1UcApiPublishMyPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishMyPost(l, r) {
      return n.publishMyPost(l.name, r).then((t) => t(s, a));
    },
    /**
     * Move my post to recycle bin.
     * @param {PostV1alpha1UcApiRecycleMyPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    recycleMyPost(l, r) {
      return n.recycleMyPost(l.name, r).then((t) => t(s, a));
    },
    /**
     * Unpublish my post.
     * @param {PostV1alpha1UcApiUnpublishMyPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpublishMyPost(l, r) {
      return n.unpublishMyPost(l.name, r).then((t) => t(s, a));
    },
    /**
     * Update my post.
     * @param {PostV1alpha1UcApiUpdateMyPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMyPost(l, r) {
      return n.updateMyPost(l.name, l.post, r).then((t) => t(s, a));
    },
    /**
     * Update draft of my post. Please make sure set annotation: \"content.halo.run/content-json\" into annotations and refer to Content for corresponding data type. 
     * @param {PostV1alpha1UcApiUpdateMyPostDraftRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMyPostDraft(l, r) {
      return n.updateMyPostDraft(l.name, l.snapshot, r).then((t) => t(s, a));
    }
  };
};
class Xs extends U {
  /**
   * Create my post. If you want to create a post with content, please set  annotation: \"content.halo.run/content-json\" into annotations and refer  to Content for corresponding data type. 
   * @param {PostV1alpha1UcApiCreateMyPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  createMyPost(a = {}, s) {
    return _(this.configuration).createMyPost(a.post, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get post that belongs to the current user.
   * @param {PostV1alpha1UcApiGetMyPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  getMyPost(a, s) {
    return _(this.configuration).getMyPost(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get my post draft.
   * @param {PostV1alpha1UcApiGetMyPostDraftRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  getMyPostDraft(a, s) {
    return _(this.configuration).getMyPostDraft(a.name, a.patched, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List posts owned by the current user.
   * @param {PostV1alpha1UcApiListMyPostsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  listMyPosts(a = {}, s) {
    return _(this.configuration).listMyPosts(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.publishPhase, a.keyword, a.categoryWithChildren, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Publish my post.
   * @param {PostV1alpha1UcApiPublishMyPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  publishMyPost(a, s) {
    return _(this.configuration).publishMyPost(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Move my post to recycle bin.
   * @param {PostV1alpha1UcApiRecycleMyPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  recycleMyPost(a, s) {
    return _(this.configuration).recycleMyPost(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Unpublish my post.
   * @param {PostV1alpha1UcApiUnpublishMyPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  unpublishMyPost(a, s) {
    return _(this.configuration).unpublishMyPost(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update my post.
   * @param {PostV1alpha1UcApiUpdateMyPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  updateMyPost(a, s) {
    return _(this.configuration).updateMyPost(a.name, a.post, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update draft of my post. Please make sure set annotation: \"content.halo.run/content-json\" into annotations and refer to Content for corresponding data type. 
   * @param {PostV1alpha1UcApiUpdateMyPostDraftRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PostV1alpha1UcApi
   */
  updateMyPostDraft(a, s) {
    return _(this.configuration).updateMyPostDraft(a.name, a.snapshot, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ip = {
  Draft: "DRAFT",
  PendingApproval: "PENDING_APPROVAL",
  Published: "PUBLISHED",
  Failed: "FAILED"
}, Ys = function(e) {
  return {
    /**
     * Create ReasonType
     * @param {ReasonType} [reasonType] Fresh reasontype
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReasonType: async (a, s = {}) => {
      const n = "/apis/notification.halo.run/v1alpha1/reasontypes", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete ReasonType
     * @param {string} name Name of reasontype
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReasonType: async (a, s = {}) => {
      R("deleteReasonType", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/reasontypes/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get ReasonType
     * @param {string} name Name of reasontype
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReasonType: async (a, s = {}) => {
      R("getReasonType", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/reasontypes/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List ReasonType
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReasonType: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/notification.halo.run/v1alpha1/reasontypes", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch ReasonType
     * @param {string} name Name of reasontype
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchReasonType: async (a, s, n = {}) => {
      R("patchReasonType", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/reasontypes/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update ReasonType
     * @param {string} name Name of reasontype
     * @param {ReasonType} [reasonType] Updated reasontype
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReasonType: async (a, s, n = {}) => {
      R("updateReasonType", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/reasontypes/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Ue = function(e) {
  const a = Ys(e);
  return {
    /**
     * Create ReasonType
     * @param {ReasonType} [reasonType] Fresh reasontype
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReasonType(s, n) {
      var o, c;
      const l = await a.createReasonType(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReasonTypeV1alpha1Api.createReasonType"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete ReasonType
     * @param {string} name Name of reasontype
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteReasonType(s, n) {
      var o, c;
      const l = await a.deleteReasonType(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReasonTypeV1alpha1Api.deleteReasonType"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get ReasonType
     * @param {string} name Name of reasontype
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReasonType(s, n) {
      var o, c;
      const l = await a.getReasonType(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReasonTypeV1alpha1Api.getReasonType"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List ReasonType
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listReasonType(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listReasonType(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ReasonTypeV1alpha1Api.listReasonType"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch ReasonType
     * @param {string} name Name of reasontype
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchReasonType(s, n, l) {
      var c, p;
      const r = await a.patchReasonType(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ReasonTypeV1alpha1Api.patchReasonType"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update ReasonType
     * @param {string} name Name of reasontype
     * @param {ReasonType} [reasonType] Updated reasontype
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateReasonType(s, n, l) {
      var c, p;
      const r = await a.updateReasonType(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ReasonTypeV1alpha1Api.updateReasonType"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Bp = function(e, a, s) {
  const n = Ue(e);
  return {
    /**
     * Create ReasonType
     * @param {ReasonTypeV1alpha1ApiCreateReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReasonType(l = {}, r) {
      return n.createReasonType(l.reasonType, r).then((t) => t(s, a));
    },
    /**
     * Delete ReasonType
     * @param {ReasonTypeV1alpha1ApiDeleteReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReasonType(l, r) {
      return n.deleteReasonType(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get ReasonType
     * @param {ReasonTypeV1alpha1ApiGetReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReasonType(l, r) {
      return n.getReasonType(l.name, r).then((t) => t(s, a));
    },
    /**
     * List ReasonType
     * @param {ReasonTypeV1alpha1ApiListReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReasonType(l = {}, r) {
      return n.listReasonType(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch ReasonType
     * @param {ReasonTypeV1alpha1ApiPatchReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchReasonType(l, r) {
      return n.patchReasonType(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update ReasonType
     * @param {ReasonTypeV1alpha1ApiUpdateReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReasonType(l, r) {
      return n.updateReasonType(l.name, l.reasonType, r).then((t) => t(s, a));
    }
  };
};
class Zs extends U {
  /**
   * Create ReasonType
   * @param {ReasonTypeV1alpha1ApiCreateReasonTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonTypeV1alpha1Api
   */
  createReasonType(a = {}, s) {
    return Ue(this.configuration).createReasonType(a.reasonType, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete ReasonType
   * @param {ReasonTypeV1alpha1ApiDeleteReasonTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonTypeV1alpha1Api
   */
  deleteReasonType(a, s) {
    return Ue(this.configuration).deleteReasonType(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get ReasonType
   * @param {ReasonTypeV1alpha1ApiGetReasonTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonTypeV1alpha1Api
   */
  getReasonType(a, s) {
    return Ue(this.configuration).getReasonType(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List ReasonType
   * @param {ReasonTypeV1alpha1ApiListReasonTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonTypeV1alpha1Api
   */
  listReasonType(a = {}, s) {
    return Ue(this.configuration).listReasonType(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch ReasonType
   * @param {ReasonTypeV1alpha1ApiPatchReasonTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonTypeV1alpha1Api
   */
  patchReasonType(a, s) {
    return Ue(this.configuration).patchReasonType(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update ReasonType
   * @param {ReasonTypeV1alpha1ApiUpdateReasonTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonTypeV1alpha1Api
   */
  updateReasonType(a, s) {
    return Ue(this.configuration).updateReasonType(a.name, a.reasonType, s).then((n) => n(this.axios, this.basePath));
  }
}
const qs = function(e) {
  return {
    /**
     * Create Reason
     * @param {Reason} [reason] Fresh reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReason: async (a, s = {}) => {
      const n = "/apis/notification.halo.run/v1alpha1/reasons", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Reason
     * @param {string} name Name of reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReason: async (a, s = {}) => {
      R("deleteReason", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/reasons/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Reason
     * @param {string} name Name of reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReason: async (a, s = {}) => {
      R("getReason", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/reasons/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Reason
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReason: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/notification.halo.run/v1alpha1/reasons", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Reason
     * @param {string} name Name of reason
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchReason: async (a, s, n = {}) => {
      R("patchReason", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/reasons/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Reason
     * @param {string} name Name of reason
     * @param {Reason} [reason] Updated reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReason: async (a, s, n = {}) => {
      R("updateReason", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/reasons/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Te = function(e) {
  const a = qs(e);
  return {
    /**
     * Create Reason
     * @param {Reason} [reason] Fresh reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReason(s, n) {
      var o, c;
      const l = await a.createReason(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReasonV1alpha1Api.createReason"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Reason
     * @param {string} name Name of reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteReason(s, n) {
      var o, c;
      const l = await a.deleteReason(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReasonV1alpha1Api.deleteReason"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Reason
     * @param {string} name Name of reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReason(s, n) {
      var o, c;
      const l = await a.getReason(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReasonV1alpha1Api.getReason"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Reason
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listReason(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listReason(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ReasonV1alpha1Api.listReason"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Reason
     * @param {string} name Name of reason
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchReason(s, n, l) {
      var c, p;
      const r = await a.patchReason(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ReasonV1alpha1Api.patchReason"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Reason
     * @param {string} name Name of reason
     * @param {Reason} [reason] Updated reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateReason(s, n, l) {
      var c, p;
      const r = await a.updateReason(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ReasonV1alpha1Api.updateReason"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Fp = function(e, a, s) {
  const n = Te(e);
  return {
    /**
     * Create Reason
     * @param {ReasonV1alpha1ApiCreateReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReason(l = {}, r) {
      return n.createReason(l.reason, r).then((t) => t(s, a));
    },
    /**
     * Delete Reason
     * @param {ReasonV1alpha1ApiDeleteReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReason(l, r) {
      return n.deleteReason(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Reason
     * @param {ReasonV1alpha1ApiGetReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReason(l, r) {
      return n.getReason(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Reason
     * @param {ReasonV1alpha1ApiListReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReason(l = {}, r) {
      return n.listReason(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Reason
     * @param {ReasonV1alpha1ApiPatchReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchReason(l, r) {
      return n.patchReason(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Reason
     * @param {ReasonV1alpha1ApiUpdateReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReason(l, r) {
      return n.updateReason(l.name, l.reason, r).then((t) => t(s, a));
    }
  };
};
class gs extends U {
  /**
   * Create Reason
   * @param {ReasonV1alpha1ApiCreateReasonRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonV1alpha1Api
   */
  createReason(a = {}, s) {
    return Te(this.configuration).createReason(a.reason, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Reason
   * @param {ReasonV1alpha1ApiDeleteReasonRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonV1alpha1Api
   */
  deleteReason(a, s) {
    return Te(this.configuration).deleteReason(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Reason
   * @param {ReasonV1alpha1ApiGetReasonRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonV1alpha1Api
   */
  getReason(a, s) {
    return Te(this.configuration).getReason(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Reason
   * @param {ReasonV1alpha1ApiListReasonRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonV1alpha1Api
   */
  listReason(a = {}, s) {
    return Te(this.configuration).listReason(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Reason
   * @param {ReasonV1alpha1ApiPatchReasonRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonV1alpha1Api
   */
  patchReason(a, s) {
    return Te(this.configuration).patchReason(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Reason
   * @param {ReasonV1alpha1ApiUpdateReasonRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReasonV1alpha1Api
   */
  updateReason(a, s) {
    return Te(this.configuration).updateReason(a.name, a.reason, s).then((n) => n(this.axios, this.basePath));
  }
}
const fs = function(e) {
  return {
    /**
     * Create RememberMeToken
     * @param {RememberMeToken} [rememberMeToken] Fresh remembermetoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRememberMeToken: async (a, s = {}) => {
      const n = "/apis/security.halo.run/v1alpha1/remembermetokens", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete RememberMeToken
     * @param {string} name Name of remembermetoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRememberMeToken: async (a, s = {}) => {
      R("deleteRememberMeToken", "name", a);
      const n = "/apis/security.halo.run/v1alpha1/remembermetokens/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get RememberMeToken
     * @param {string} name Name of remembermetoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRememberMeToken: async (a, s = {}) => {
      R("getRememberMeToken", "name", a);
      const n = "/apis/security.halo.run/v1alpha1/remembermetokens/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List RememberMeToken
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRememberMeToken: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/security.halo.run/v1alpha1/remembermetokens", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch RememberMeToken
     * @param {string} name Name of remembermetoken
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRememberMeToken: async (a, s, n = {}) => {
      R("patchRememberMeToken", "name", a);
      const l = "/apis/security.halo.run/v1alpha1/remembermetokens/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update RememberMeToken
     * @param {string} name Name of remembermetoken
     * @param {RememberMeToken} [rememberMeToken] Updated remembermetoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRememberMeToken: async (a, s, n = {}) => {
      R("updateRememberMeToken", "name", a);
      const l = "/apis/security.halo.run/v1alpha1/remembermetokens/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Ie = function(e) {
  const a = fs(e);
  return {
    /**
     * Create RememberMeToken
     * @param {RememberMeToken} [rememberMeToken] Fresh remembermetoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRememberMeToken(s, n) {
      var o, c;
      const l = await a.createRememberMeToken(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RememberMeTokenV1alpha1Api.createRememberMeToken"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete RememberMeToken
     * @param {string} name Name of remembermetoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRememberMeToken(s, n) {
      var o, c;
      const l = await a.deleteRememberMeToken(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RememberMeTokenV1alpha1Api.deleteRememberMeToken"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get RememberMeToken
     * @param {string} name Name of remembermetoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRememberMeToken(s, n) {
      var o, c;
      const l = await a.getRememberMeToken(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RememberMeTokenV1alpha1Api.getRememberMeToken"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List RememberMeToken
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listRememberMeToken(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listRememberMeToken(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["RememberMeTokenV1alpha1Api.listRememberMeToken"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch RememberMeToken
     * @param {string} name Name of remembermetoken
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchRememberMeToken(s, n, l) {
      var c, p;
      const r = await a.patchRememberMeToken(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["RememberMeTokenV1alpha1Api.patchRememberMeToken"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update RememberMeToken
     * @param {string} name Name of remembermetoken
     * @param {RememberMeToken} [rememberMeToken] Updated remembermetoken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRememberMeToken(s, n, l) {
      var c, p;
      const r = await a.updateRememberMeToken(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["RememberMeTokenV1alpha1Api.updateRememberMeToken"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Ep = function(e, a, s) {
  const n = Ie(e);
  return {
    /**
     * Create RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiCreateRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRememberMeToken(l = {}, r) {
      return n.createRememberMeToken(l.rememberMeToken, r).then((t) => t(s, a));
    },
    /**
     * Delete RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiDeleteRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRememberMeToken(l, r) {
      return n.deleteRememberMeToken(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiGetRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRememberMeToken(l, r) {
      return n.getRememberMeToken(l.name, r).then((t) => t(s, a));
    },
    /**
     * List RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiListRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRememberMeToken(l = {}, r) {
      return n.listRememberMeToken(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiPatchRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRememberMeToken(l, r) {
      return n.patchRememberMeToken(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiUpdateRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRememberMeToken(l, r) {
      return n.updateRememberMeToken(l.name, l.rememberMeToken, r).then((t) => t(s, a));
    }
  };
};
class jp extends U {
  /**
   * Create RememberMeToken
   * @param {RememberMeTokenV1alpha1ApiCreateRememberMeTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RememberMeTokenV1alpha1Api
   */
  createRememberMeToken(a = {}, s) {
    return Ie(this.configuration).createRememberMeToken(a.rememberMeToken, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete RememberMeToken
   * @param {RememberMeTokenV1alpha1ApiDeleteRememberMeTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RememberMeTokenV1alpha1Api
   */
  deleteRememberMeToken(a, s) {
    return Ie(this.configuration).deleteRememberMeToken(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get RememberMeToken
   * @param {RememberMeTokenV1alpha1ApiGetRememberMeTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RememberMeTokenV1alpha1Api
   */
  getRememberMeToken(a, s) {
    return Ie(this.configuration).getRememberMeToken(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List RememberMeToken
   * @param {RememberMeTokenV1alpha1ApiListRememberMeTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RememberMeTokenV1alpha1Api
   */
  listRememberMeToken(a = {}, s) {
    return Ie(this.configuration).listRememberMeToken(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch RememberMeToken
   * @param {RememberMeTokenV1alpha1ApiPatchRememberMeTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RememberMeTokenV1alpha1Api
   */
  patchRememberMeToken(a, s) {
    return Ie(this.configuration).patchRememberMeToken(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update RememberMeToken
   * @param {RememberMeTokenV1alpha1ApiUpdateRememberMeTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RememberMeTokenV1alpha1Api
   */
  updateRememberMeToken(a, s) {
    return Ie(this.configuration).updateRememberMeToken(a.name, a.rememberMeToken, s).then((n) => n(this.axios, this.basePath));
  }
}
const el = function(e) {
  return {
    /**
     * Create Reply
     * @param {Reply} [reply] Fresh reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReply: async (a, s = {}) => {
      const n = "/apis/content.halo.run/v1alpha1/replies", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Reply
     * @param {string} name Name of reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReply: async (a, s = {}) => {
      R("deleteReply", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/replies/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Reply
     * @param {string} name Name of reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReply: async (a, s = {}) => {
      R("getReply", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/replies/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Reply
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReply: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/content.halo.run/v1alpha1/replies", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Reply
     * @param {string} name Name of reply
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchReply: async (a, s, n = {}) => {
      R("patchReply", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/replies/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Reply
     * @param {string} name Name of reply
     * @param {Reply} [reply] Updated reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReply: async (a, s, n = {}) => {
      R("updateReply", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/replies/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Be = function(e) {
  const a = el(e);
  return {
    /**
     * Create Reply
     * @param {Reply} [reply] Fresh reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReply(s, n) {
      var o, c;
      const l = await a.createReply(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReplyV1alpha1Api.createReply"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Reply
     * @param {string} name Name of reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteReply(s, n) {
      var o, c;
      const l = await a.deleteReply(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReplyV1alpha1Api.deleteReply"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Reply
     * @param {string} name Name of reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReply(s, n) {
      var o, c;
      const l = await a.getReply(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReplyV1alpha1Api.getReply"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Reply
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listReply(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listReply(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ReplyV1alpha1Api.listReply"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Reply
     * @param {string} name Name of reply
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchReply(s, n, l) {
      var c, p;
      const r = await a.patchReply(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ReplyV1alpha1Api.patchReply"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Reply
     * @param {string} name Name of reply
     * @param {Reply} [reply] Updated reply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateReply(s, n, l) {
      var c, p;
      const r = await a.updateReply(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ReplyV1alpha1Api.updateReply"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Lp = function(e, a, s) {
  const n = Be(e);
  return {
    /**
     * Create Reply
     * @param {ReplyV1alpha1ApiCreateReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReply(l = {}, r) {
      return n.createReply(l.reply, r).then((t) => t(s, a));
    },
    /**
     * Delete Reply
     * @param {ReplyV1alpha1ApiDeleteReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReply(l, r) {
      return n.deleteReply(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Reply
     * @param {ReplyV1alpha1ApiGetReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReply(l, r) {
      return n.getReply(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Reply
     * @param {ReplyV1alpha1ApiListReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReply(l = {}, r) {
      return n.listReply(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Reply
     * @param {ReplyV1alpha1ApiPatchReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchReply(l, r) {
      return n.patchReply(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Reply
     * @param {ReplyV1alpha1ApiUpdateReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReply(l, r) {
      return n.updateReply(l.name, l.reply, r).then((t) => t(s, a));
    }
  };
};
class al extends U {
  /**
   * Create Reply
   * @param {ReplyV1alpha1ApiCreateReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReplyV1alpha1Api
   */
  createReply(a = {}, s) {
    return Be(this.configuration).createReply(a.reply, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Reply
   * @param {ReplyV1alpha1ApiDeleteReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReplyV1alpha1Api
   */
  deleteReply(a, s) {
    return Be(this.configuration).deleteReply(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Reply
   * @param {ReplyV1alpha1ApiGetReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReplyV1alpha1Api
   */
  getReply(a, s) {
    return Be(this.configuration).getReply(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Reply
   * @param {ReplyV1alpha1ApiListReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReplyV1alpha1Api
   */
  listReply(a = {}, s) {
    return Be(this.configuration).listReply(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Reply
   * @param {ReplyV1alpha1ApiPatchReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReplyV1alpha1Api
   */
  patchReply(a, s) {
    return Be(this.configuration).patchReply(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Reply
   * @param {ReplyV1alpha1ApiUpdateReplyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReplyV1alpha1Api
   */
  updateReply(a, s) {
    return Be(this.configuration).updateReply(a.name, a.reply, s).then((n) => n(this.axios, this.basePath));
  }
}
const tl = function(e) {
  return {
    /**
     * List replies.
     * @param {string} commentName Replies filtered by commentName.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReplies: async (a, s, n, l, r, t, o = {}) => {
      R("listReplies", "commentName", a);
      const c = "/apis/api.console.halo.run/v1alpha1/replies", p = new URL(c, O);
      let h;
      e && (h = e.baseOptions);
      const i = { method: "GET", ...h, ...o }, d = {}, b = {};
      P(i, e), await u(d, e), s !== void 0 && (b.page = s), n !== void 0 && (b.size = n), l && (b.labelSelector = l), r && (b.fieldSelector = r), t && (b.sort = t), a !== void 0 && (b.commentName = a), v(p, b);
      let x = h && h.headers ? h.headers : {};
      return i.headers = { ...d, ...x, ...o.headers }, {
        url: S(p),
        options: i
      };
    }
  };
}, Jt = function(e) {
  const a = tl(e);
  return {
    /**
     * List replies.
     * @param {string} commentName Replies filtered by commentName.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listReplies(s, n, l, r, t, o, c) {
      var d, b;
      const p = await a.listReplies(s, n, l, r, t, o, c), h = (e == null ? void 0 : e.serverIndex) ?? 0, i = (b = (d = y["ReplyV1alpha1ConsoleApi.listReplies"]) == null ? void 0 : d[h]) == null ? void 0 : b.url;
      return (x, w) => A(p, m, V, e)(x, i || w);
    }
  };
}, Dp = function(e, a, s) {
  const n = Jt(e);
  return {
    /**
     * List replies.
     * @param {ReplyV1alpha1ConsoleApiListRepliesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReplies(l, r) {
      return n.listReplies(l.commentName, l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    }
  };
};
class rl extends U {
  /**
   * List replies.
   * @param {ReplyV1alpha1ConsoleApiListRepliesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReplyV1alpha1ConsoleApi
   */
  listReplies(a, s) {
    return Jt(this.configuration).listReplies(a.commentName, a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
}
const sl = function(e) {
  return {
    /**
     * Create ReverseProxy
     * @param {ReverseProxy} [reverseProxy] Fresh reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReverseProxy: async (a, s = {}) => {
      const n = "/apis/plugin.halo.run/v1alpha1/reverseproxies", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReverseProxy: async (a, s = {}) => {
      R("deleteReverseProxy", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReverseProxy: async (a, s = {}) => {
      R("getReverseProxy", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List ReverseProxy
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReverseProxy: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/plugin.halo.run/v1alpha1/reverseproxies", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchReverseProxy: async (a, s, n = {}) => {
      R("patchReverseProxy", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {ReverseProxy} [reverseProxy] Updated reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReverseProxy: async (a, s, n = {}) => {
      R("updateReverseProxy", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Fe = function(e) {
  const a = sl(e);
  return {
    /**
     * Create ReverseProxy
     * @param {ReverseProxy} [reverseProxy] Fresh reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createReverseProxy(s, n) {
      var o, c;
      const l = await a.createReverseProxy(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReverseProxyV1alpha1Api.createReverseProxy"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteReverseProxy(s, n) {
      var o, c;
      const l = await a.deleteReverseProxy(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReverseProxyV1alpha1Api.deleteReverseProxy"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReverseProxy(s, n) {
      var o, c;
      const l = await a.getReverseProxy(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ReverseProxyV1alpha1Api.getReverseProxy"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List ReverseProxy
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listReverseProxy(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listReverseProxy(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ReverseProxyV1alpha1Api.listReverseProxy"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchReverseProxy(s, n, l) {
      var c, p;
      const r = await a.patchReverseProxy(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ReverseProxyV1alpha1Api.patchReverseProxy"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {ReverseProxy} [reverseProxy] Updated reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateReverseProxy(s, n, l) {
      var c, p;
      const r = await a.updateReverseProxy(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ReverseProxyV1alpha1Api.updateReverseProxy"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Np = function(e, a, s) {
  const n = Fe(e);
  return {
    /**
     * Create ReverseProxy
     * @param {ReverseProxyV1alpha1ApiCreateReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReverseProxy(l = {}, r) {
      return n.createReverseProxy(l.reverseProxy, r).then((t) => t(s, a));
    },
    /**
     * Delete ReverseProxy
     * @param {ReverseProxyV1alpha1ApiDeleteReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteReverseProxy(l, r) {
      return n.deleteReverseProxy(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get ReverseProxy
     * @param {ReverseProxyV1alpha1ApiGetReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReverseProxy(l, r) {
      return n.getReverseProxy(l.name, r).then((t) => t(s, a));
    },
    /**
     * List ReverseProxy
     * @param {ReverseProxyV1alpha1ApiListReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReverseProxy(l = {}, r) {
      return n.listReverseProxy(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch ReverseProxy
     * @param {ReverseProxyV1alpha1ApiPatchReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchReverseProxy(l, r) {
      return n.patchReverseProxy(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update ReverseProxy
     * @param {ReverseProxyV1alpha1ApiUpdateReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateReverseProxy(l, r) {
      return n.updateReverseProxy(l.name, l.reverseProxy, r).then((t) => t(s, a));
    }
  };
};
class ll extends U {
  /**
   * Create ReverseProxy
   * @param {ReverseProxyV1alpha1ApiCreateReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReverseProxyV1alpha1Api
   */
  createReverseProxy(a = {}, s) {
    return Fe(this.configuration).createReverseProxy(a.reverseProxy, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete ReverseProxy
   * @param {ReverseProxyV1alpha1ApiDeleteReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReverseProxyV1alpha1Api
   */
  deleteReverseProxy(a, s) {
    return Fe(this.configuration).deleteReverseProxy(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get ReverseProxy
   * @param {ReverseProxyV1alpha1ApiGetReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReverseProxyV1alpha1Api
   */
  getReverseProxy(a, s) {
    return Fe(this.configuration).getReverseProxy(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List ReverseProxy
   * @param {ReverseProxyV1alpha1ApiListReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReverseProxyV1alpha1Api
   */
  listReverseProxy(a = {}, s) {
    return Fe(this.configuration).listReverseProxy(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch ReverseProxy
   * @param {ReverseProxyV1alpha1ApiPatchReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReverseProxyV1alpha1Api
   */
  patchReverseProxy(a, s) {
    return Fe(this.configuration).patchReverseProxy(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update ReverseProxy
   * @param {ReverseProxyV1alpha1ApiUpdateReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReverseProxyV1alpha1Api
   */
  updateReverseProxy(a, s) {
    return Fe(this.configuration).updateReverseProxy(a.name, a.reverseProxy, s).then((n) => n(this.axios, this.basePath));
  }
}
const nl = function(e) {
  return {
    /**
     * Create RoleBinding
     * @param {RoleBinding} [roleBinding] Fresh rolebinding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoleBinding: async (a, s = {}) => {
      const n = "/api/v1alpha1/rolebindings", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete RoleBinding
     * @param {string} name Name of rolebinding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoleBinding: async (a, s = {}) => {
      R("deleteRoleBinding", "name", a);
      const n = "/api/v1alpha1/rolebindings/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get RoleBinding
     * @param {string} name Name of rolebinding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoleBinding: async (a, s = {}) => {
      R("getRoleBinding", "name", a);
      const n = "/api/v1alpha1/rolebindings/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List RoleBinding
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRoleBinding: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/rolebindings", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch RoleBinding
     * @param {string} name Name of rolebinding
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRoleBinding: async (a, s, n = {}) => {
      R("patchRoleBinding", "name", a);
      const l = "/api/v1alpha1/rolebindings/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update RoleBinding
     * @param {string} name Name of rolebinding
     * @param {RoleBinding} [roleBinding] Updated rolebinding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRoleBinding: async (a, s, n = {}) => {
      R("updateRoleBinding", "name", a);
      const l = "/api/v1alpha1/rolebindings/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Ee = function(e) {
  const a = nl(e);
  return {
    /**
     * Create RoleBinding
     * @param {RoleBinding} [roleBinding] Fresh rolebinding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRoleBinding(s, n) {
      var o, c;
      const l = await a.createRoleBinding(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RoleBindingV1alpha1Api.createRoleBinding"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete RoleBinding
     * @param {string} name Name of rolebinding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRoleBinding(s, n) {
      var o, c;
      const l = await a.deleteRoleBinding(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RoleBindingV1alpha1Api.deleteRoleBinding"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get RoleBinding
     * @param {string} name Name of rolebinding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRoleBinding(s, n) {
      var o, c;
      const l = await a.getRoleBinding(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RoleBindingV1alpha1Api.getRoleBinding"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List RoleBinding
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listRoleBinding(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listRoleBinding(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["RoleBindingV1alpha1Api.listRoleBinding"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch RoleBinding
     * @param {string} name Name of rolebinding
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchRoleBinding(s, n, l) {
      var c, p;
      const r = await a.patchRoleBinding(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["RoleBindingV1alpha1Api.patchRoleBinding"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update RoleBinding
     * @param {string} name Name of rolebinding
     * @param {RoleBinding} [roleBinding] Updated rolebinding
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRoleBinding(s, n, l) {
      var c, p;
      const r = await a.updateRoleBinding(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["RoleBindingV1alpha1Api.updateRoleBinding"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Hp = function(e, a, s) {
  const n = Ee(e);
  return {
    /**
     * Create RoleBinding
     * @param {RoleBindingV1alpha1ApiCreateRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoleBinding(l = {}, r) {
      return n.createRoleBinding(l.roleBinding, r).then((t) => t(s, a));
    },
    /**
     * Delete RoleBinding
     * @param {RoleBindingV1alpha1ApiDeleteRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoleBinding(l, r) {
      return n.deleteRoleBinding(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get RoleBinding
     * @param {RoleBindingV1alpha1ApiGetRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRoleBinding(l, r) {
      return n.getRoleBinding(l.name, r).then((t) => t(s, a));
    },
    /**
     * List RoleBinding
     * @param {RoleBindingV1alpha1ApiListRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRoleBinding(l = {}, r) {
      return n.listRoleBinding(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch RoleBinding
     * @param {RoleBindingV1alpha1ApiPatchRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRoleBinding(l, r) {
      return n.patchRoleBinding(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update RoleBinding
     * @param {RoleBindingV1alpha1ApiUpdateRoleBindingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRoleBinding(l, r) {
      return n.updateRoleBinding(l.name, l.roleBinding, r).then((t) => t(s, a));
    }
  };
};
class ol extends U {
  /**
   * Create RoleBinding
   * @param {RoleBindingV1alpha1ApiCreateRoleBindingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleBindingV1alpha1Api
   */
  createRoleBinding(a = {}, s) {
    return Ee(this.configuration).createRoleBinding(a.roleBinding, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete RoleBinding
   * @param {RoleBindingV1alpha1ApiDeleteRoleBindingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleBindingV1alpha1Api
   */
  deleteRoleBinding(a, s) {
    return Ee(this.configuration).deleteRoleBinding(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get RoleBinding
   * @param {RoleBindingV1alpha1ApiGetRoleBindingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleBindingV1alpha1Api
   */
  getRoleBinding(a, s) {
    return Ee(this.configuration).getRoleBinding(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List RoleBinding
   * @param {RoleBindingV1alpha1ApiListRoleBindingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleBindingV1alpha1Api
   */
  listRoleBinding(a = {}, s) {
    return Ee(this.configuration).listRoleBinding(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch RoleBinding
   * @param {RoleBindingV1alpha1ApiPatchRoleBindingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleBindingV1alpha1Api
   */
  patchRoleBinding(a, s) {
    return Ee(this.configuration).patchRoleBinding(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update RoleBinding
   * @param {RoleBindingV1alpha1ApiUpdateRoleBindingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleBindingV1alpha1Api
   */
  updateRoleBinding(a, s) {
    return Ee(this.configuration).updateRoleBinding(a.name, a.roleBinding, s).then((n) => n(this.axios, this.basePath));
  }
}
const cl = function(e) {
  return {
    /**
     * Create Role
     * @param {Role} [role] Fresh role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRole: async (a, s = {}) => {
      const n = "/api/v1alpha1/roles", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Role
     * @param {string} name Name of role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRole: async (a, s = {}) => {
      R("deleteRole", "name", a);
      const n = "/api/v1alpha1/roles/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Role
     * @param {string} name Name of role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRole: async (a, s = {}) => {
      R("getRole", "name", a);
      const n = "/api/v1alpha1/roles/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Role
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRole: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/roles", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Role
     * @param {string} name Name of role
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRole: async (a, s, n = {}) => {
      R("patchRole", "name", a);
      const l = "/api/v1alpha1/roles/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Role
     * @param {string} name Name of role
     * @param {Role} [role] Updated role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRole: async (a, s, n = {}) => {
      R("updateRole", "name", a);
      const l = "/api/v1alpha1/roles/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, je = function(e) {
  const a = cl(e);
  return {
    /**
     * Create Role
     * @param {Role} [role] Fresh role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRole(s, n) {
      var o, c;
      const l = await a.createRole(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RoleV1alpha1Api.createRole"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Role
     * @param {string} name Name of role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRole(s, n) {
      var o, c;
      const l = await a.deleteRole(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RoleV1alpha1Api.deleteRole"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Role
     * @param {string} name Name of role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRole(s, n) {
      var o, c;
      const l = await a.getRole(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["RoleV1alpha1Api.getRole"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Role
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listRole(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listRole(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["RoleV1alpha1Api.listRole"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Role
     * @param {string} name Name of role
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchRole(s, n, l) {
      var c, p;
      const r = await a.patchRole(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["RoleV1alpha1Api.patchRole"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Role
     * @param {string} name Name of role
     * @param {Role} [role] Updated role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRole(s, n, l) {
      var c, p;
      const r = await a.updateRole(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["RoleV1alpha1Api.updateRole"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Mp = function(e, a, s) {
  const n = je(e);
  return {
    /**
     * Create Role
     * @param {RoleV1alpha1ApiCreateRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRole(l = {}, r) {
      return n.createRole(l.role, r).then((t) => t(s, a));
    },
    /**
     * Delete Role
     * @param {RoleV1alpha1ApiDeleteRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRole(l, r) {
      return n.deleteRole(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Role
     * @param {RoleV1alpha1ApiGetRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRole(l, r) {
      return n.getRole(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Role
     * @param {RoleV1alpha1ApiListRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRole(l = {}, r) {
      return n.listRole(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Role
     * @param {RoleV1alpha1ApiPatchRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRole(l, r) {
      return n.patchRole(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Role
     * @param {RoleV1alpha1ApiUpdateRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRole(l, r) {
      return n.updateRole(l.name, l.role, r).then((t) => t(s, a));
    }
  };
};
class pl extends U {
  /**
   * Create Role
   * @param {RoleV1alpha1ApiCreateRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleV1alpha1Api
   */
  createRole(a = {}, s) {
    return je(this.configuration).createRole(a.role, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Role
   * @param {RoleV1alpha1ApiDeleteRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleV1alpha1Api
   */
  deleteRole(a, s) {
    return je(this.configuration).deleteRole(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Role
   * @param {RoleV1alpha1ApiGetRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleV1alpha1Api
   */
  getRole(a, s) {
    return je(this.configuration).getRole(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Role
   * @param {RoleV1alpha1ApiListRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleV1alpha1Api
   */
  listRole(a = {}, s) {
    return je(this.configuration).listRole(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Role
   * @param {RoleV1alpha1ApiPatchRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleV1alpha1Api
   */
  patchRole(a, s) {
    return je(this.configuration).patchRole(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Role
   * @param {RoleV1alpha1ApiUpdateRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleV1alpha1Api
   */
  updateRole(a, s) {
    return je(this.configuration).updateRole(a.name, a.role, s).then((n) => n(this.axios, this.basePath));
  }
}
const hl = function(e) {
  return {
    /**
     * Create SearchEngine
     * @param {SearchEngine} [searchEngine] Fresh searchengine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSearchEngine: async (a, s = {}) => {
      const n = "/apis/plugin.halo.run/v1alpha1/searchengines", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete SearchEngine
     * @param {string} name Name of searchengine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSearchEngine: async (a, s = {}) => {
      R("deleteSearchEngine", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/searchengines/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get SearchEngine
     * @param {string} name Name of searchengine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSearchEngine: async (a, s = {}) => {
      R("getSearchEngine", "name", a);
      const n = "/apis/plugin.halo.run/v1alpha1/searchengines/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List SearchEngine
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSearchEngine: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/plugin.halo.run/v1alpha1/searchengines", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch SearchEngine
     * @param {string} name Name of searchengine
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSearchEngine: async (a, s, n = {}) => {
      R("patchSearchEngine", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/searchengines/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update SearchEngine
     * @param {string} name Name of searchengine
     * @param {SearchEngine} [searchEngine] Updated searchengine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSearchEngine: async (a, s, n = {}) => {
      R("updateSearchEngine", "name", a);
      const l = "/apis/plugin.halo.run/v1alpha1/searchengines/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Le = function(e) {
  const a = hl(e);
  return {
    /**
     * Create SearchEngine
     * @param {SearchEngine} [searchEngine] Fresh searchengine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSearchEngine(s, n) {
      var o, c;
      const l = await a.createSearchEngine(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SearchEngineV1alpha1Api.createSearchEngine"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete SearchEngine
     * @param {string} name Name of searchengine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSearchEngine(s, n) {
      var o, c;
      const l = await a.deleteSearchEngine(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SearchEngineV1alpha1Api.deleteSearchEngine"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get SearchEngine
     * @param {string} name Name of searchengine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSearchEngine(s, n) {
      var o, c;
      const l = await a.getSearchEngine(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SearchEngineV1alpha1Api.getSearchEngine"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List SearchEngine
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSearchEngine(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listSearchEngine(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["SearchEngineV1alpha1Api.listSearchEngine"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch SearchEngine
     * @param {string} name Name of searchengine
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchSearchEngine(s, n, l) {
      var c, p;
      const r = await a.patchSearchEngine(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SearchEngineV1alpha1Api.patchSearchEngine"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update SearchEngine
     * @param {string} name Name of searchengine
     * @param {SearchEngine} [searchEngine] Updated searchengine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSearchEngine(s, n, l) {
      var c, p;
      const r = await a.updateSearchEngine(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SearchEngineV1alpha1Api.updateSearchEngine"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Qp = function(e, a, s) {
  const n = Le(e);
  return {
    /**
     * Create SearchEngine
     * @param {SearchEngineV1alpha1ApiCreateSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSearchEngine(l = {}, r) {
      return n.createSearchEngine(l.searchEngine, r).then((t) => t(s, a));
    },
    /**
     * Delete SearchEngine
     * @param {SearchEngineV1alpha1ApiDeleteSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSearchEngine(l, r) {
      return n.deleteSearchEngine(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get SearchEngine
     * @param {SearchEngineV1alpha1ApiGetSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSearchEngine(l, r) {
      return n.getSearchEngine(l.name, r).then((t) => t(s, a));
    },
    /**
     * List SearchEngine
     * @param {SearchEngineV1alpha1ApiListSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSearchEngine(l = {}, r) {
      return n.listSearchEngine(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch SearchEngine
     * @param {SearchEngineV1alpha1ApiPatchSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSearchEngine(l, r) {
      return n.patchSearchEngine(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update SearchEngine
     * @param {SearchEngineV1alpha1ApiUpdateSearchEngineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSearchEngine(l, r) {
      return n.updateSearchEngine(l.name, l.searchEngine, r).then((t) => t(s, a));
    }
  };
};
class il extends U {
  /**
   * Create SearchEngine
   * @param {SearchEngineV1alpha1ApiCreateSearchEngineRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchEngineV1alpha1Api
   */
  createSearchEngine(a = {}, s) {
    return Le(this.configuration).createSearchEngine(a.searchEngine, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete SearchEngine
   * @param {SearchEngineV1alpha1ApiDeleteSearchEngineRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchEngineV1alpha1Api
   */
  deleteSearchEngine(a, s) {
    return Le(this.configuration).deleteSearchEngine(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get SearchEngine
   * @param {SearchEngineV1alpha1ApiGetSearchEngineRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchEngineV1alpha1Api
   */
  getSearchEngine(a, s) {
    return Le(this.configuration).getSearchEngine(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List SearchEngine
   * @param {SearchEngineV1alpha1ApiListSearchEngineRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchEngineV1alpha1Api
   */
  listSearchEngine(a = {}, s) {
    return Le(this.configuration).listSearchEngine(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch SearchEngine
   * @param {SearchEngineV1alpha1ApiPatchSearchEngineRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchEngineV1alpha1Api
   */
  patchSearchEngine(a, s) {
    return Le(this.configuration).patchSearchEngine(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update SearchEngine
   * @param {SearchEngineV1alpha1ApiUpdateSearchEngineRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SearchEngineV1alpha1Api
   */
  updateSearchEngine(a, s) {
    return Le(this.configuration).updateSearchEngine(a.name, a.searchEngine, s).then((n) => n(this.axios, this.basePath));
  }
}
const dl = function(e) {
  return {
    /**
     * Create Secret
     * @param {Secret} [secret] Fresh secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSecret: async (a, s = {}) => {
      const n = "/api/v1alpha1/secrets", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Secret
     * @param {string} name Name of secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSecret: async (a, s = {}) => {
      R("deleteSecret", "name", a);
      const n = "/api/v1alpha1/secrets/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Secret
     * @param {string} name Name of secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSecret: async (a, s = {}) => {
      R("getSecret", "name", a);
      const n = "/api/v1alpha1/secrets/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Secret
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSecret: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/secrets", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Secret
     * @param {string} name Name of secret
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSecret: async (a, s, n = {}) => {
      R("patchSecret", "name", a);
      const l = "/api/v1alpha1/secrets/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Secret
     * @param {string} name Name of secret
     * @param {Secret} [secret] Updated secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSecret: async (a, s, n = {}) => {
      R("updateSecret", "name", a);
      const l = "/api/v1alpha1/secrets/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, De = function(e) {
  const a = dl(e);
  return {
    /**
     * Create Secret
     * @param {Secret} [secret] Fresh secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSecret(s, n) {
      var o, c;
      const l = await a.createSecret(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SecretV1alpha1Api.createSecret"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Secret
     * @param {string} name Name of secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSecret(s, n) {
      var o, c;
      const l = await a.deleteSecret(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SecretV1alpha1Api.deleteSecret"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Secret
     * @param {string} name Name of secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSecret(s, n) {
      var o, c;
      const l = await a.getSecret(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SecretV1alpha1Api.getSecret"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Secret
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSecret(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listSecret(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["SecretV1alpha1Api.listSecret"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Secret
     * @param {string} name Name of secret
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchSecret(s, n, l) {
      var c, p;
      const r = await a.patchSecret(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SecretV1alpha1Api.patchSecret"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Secret
     * @param {string} name Name of secret
     * @param {Secret} [secret] Updated secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSecret(s, n, l) {
      var c, p;
      const r = await a.updateSecret(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SecretV1alpha1Api.updateSecret"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, kp = function(e, a, s) {
  const n = De(e);
  return {
    /**
     * Create Secret
     * @param {SecretV1alpha1ApiCreateSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSecret(l = {}, r) {
      return n.createSecret(l.secret, r).then((t) => t(s, a));
    },
    /**
     * Delete Secret
     * @param {SecretV1alpha1ApiDeleteSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSecret(l, r) {
      return n.deleteSecret(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Secret
     * @param {SecretV1alpha1ApiGetSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSecret(l, r) {
      return n.getSecret(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Secret
     * @param {SecretV1alpha1ApiListSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSecret(l = {}, r) {
      return n.listSecret(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Secret
     * @param {SecretV1alpha1ApiPatchSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSecret(l, r) {
      return n.patchSecret(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Secret
     * @param {SecretV1alpha1ApiUpdateSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSecret(l, r) {
      return n.updateSecret(l.name, l.secret, r).then((t) => t(s, a));
    }
  };
};
class ml extends U {
  /**
   * Create Secret
   * @param {SecretV1alpha1ApiCreateSecretRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SecretV1alpha1Api
   */
  createSecret(a = {}, s) {
    return De(this.configuration).createSecret(a.secret, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Secret
   * @param {SecretV1alpha1ApiDeleteSecretRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SecretV1alpha1Api
   */
  deleteSecret(a, s) {
    return De(this.configuration).deleteSecret(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Secret
   * @param {SecretV1alpha1ApiGetSecretRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SecretV1alpha1Api
   */
  getSecret(a, s) {
    return De(this.configuration).getSecret(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Secret
   * @param {SecretV1alpha1ApiListSecretRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SecretV1alpha1Api
   */
  listSecret(a = {}, s) {
    return De(this.configuration).listSecret(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Secret
   * @param {SecretV1alpha1ApiPatchSecretRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SecretV1alpha1Api
   */
  patchSecret(a, s) {
    return De(this.configuration).patchSecret(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Secret
   * @param {SecretV1alpha1ApiUpdateSecretRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SecretV1alpha1Api
   */
  updateSecret(a, s) {
    return De(this.configuration).updateSecret(a.name, a.secret, s).then((n) => n(this.axios, this.basePath));
  }
}
const Vl = function(e) {
  return {
    /**
     * Create Setting
     * @param {Setting} [setting] Fresh setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSetting: async (a, s = {}) => {
      const n = "/api/v1alpha1/settings", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSetting: async (a, s = {}) => {
      R("deleteSetting", "name", a);
      const n = "/api/v1alpha1/settings/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSetting: async (a, s = {}) => {
      R("getSetting", "name", a);
      const n = "/api/v1alpha1/settings/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Setting
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSetting: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/settings", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Setting
     * @param {string} name Name of setting
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSetting: async (a, s, n = {}) => {
      R("patchSetting", "name", a);
      const l = "/api/v1alpha1/settings/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Setting
     * @param {string} name Name of setting
     * @param {Setting} [setting] Updated setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSetting: async (a, s, n = {}) => {
      R("updateSetting", "name", a);
      const l = "/api/v1alpha1/settings/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Ne = function(e) {
  const a = Vl(e);
  return {
    /**
     * Create Setting
     * @param {Setting} [setting] Fresh setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSetting(s, n) {
      var o, c;
      const l = await a.createSetting(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SettingV1alpha1Api.createSetting"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSetting(s, n) {
      var o, c;
      const l = await a.deleteSetting(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SettingV1alpha1Api.deleteSetting"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSetting(s, n) {
      var o, c;
      const l = await a.getSetting(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SettingV1alpha1Api.getSetting"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Setting
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSetting(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listSetting(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["SettingV1alpha1Api.listSetting"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Setting
     * @param {string} name Name of setting
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchSetting(s, n, l) {
      var c, p;
      const r = await a.patchSetting(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SettingV1alpha1Api.patchSetting"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Setting
     * @param {string} name Name of setting
     * @param {Setting} [setting] Updated setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSetting(s, n, l) {
      var c, p;
      const r = await a.updateSetting(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SettingV1alpha1Api.updateSetting"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, $p = function(e, a, s) {
  const n = Ne(e);
  return {
    /**
     * Create Setting
     * @param {SettingV1alpha1ApiCreateSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSetting(l = {}, r) {
      return n.createSetting(l.setting, r).then((t) => t(s, a));
    },
    /**
     * Delete Setting
     * @param {SettingV1alpha1ApiDeleteSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSetting(l, r) {
      return n.deleteSetting(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Setting
     * @param {SettingV1alpha1ApiGetSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSetting(l, r) {
      return n.getSetting(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Setting
     * @param {SettingV1alpha1ApiListSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSetting(l = {}, r) {
      return n.listSetting(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Setting
     * @param {SettingV1alpha1ApiPatchSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSetting(l, r) {
      return n.patchSetting(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Setting
     * @param {SettingV1alpha1ApiUpdateSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSetting(l, r) {
      return n.updateSetting(l.name, l.setting, r).then((t) => t(s, a));
    }
  };
};
class yl extends U {
  /**
   * Create Setting
   * @param {SettingV1alpha1ApiCreateSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SettingV1alpha1Api
   */
  createSetting(a = {}, s) {
    return Ne(this.configuration).createSetting(a.setting, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Setting
   * @param {SettingV1alpha1ApiDeleteSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SettingV1alpha1Api
   */
  deleteSetting(a, s) {
    return Ne(this.configuration).deleteSetting(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Setting
   * @param {SettingV1alpha1ApiGetSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SettingV1alpha1Api
   */
  getSetting(a, s) {
    return Ne(this.configuration).getSetting(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Setting
   * @param {SettingV1alpha1ApiListSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SettingV1alpha1Api
   */
  listSetting(a = {}, s) {
    return Ne(this.configuration).listSetting(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Setting
   * @param {SettingV1alpha1ApiPatchSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SettingV1alpha1Api
   */
  patchSetting(a, s) {
    return Ne(this.configuration).patchSetting(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Setting
   * @param {SettingV1alpha1ApiUpdateSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SettingV1alpha1Api
   */
  updateSetting(a, s) {
    return Ne(this.configuration).updateSetting(a.name, a.setting, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ol = function(e) {
  return {
    /**
     * Create SinglePage
     * @param {SinglePage} [singlePage] Fresh singlepage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSinglePage: async (a, s = {}) => {
      const n = "/apis/content.halo.run/v1alpha1/singlepages", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete SinglePage
     * @param {string} name Name of singlepage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSinglePage: async (a, s = {}) => {
      R("deleteSinglePage", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/singlepages/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get SinglePage
     * @param {string} name Name of singlepage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSinglePage: async (a, s = {}) => {
      R("getSinglePage", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/singlepages/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List SinglePage
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePage: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/content.halo.run/v1alpha1/singlepages", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch SinglePage
     * @param {string} name Name of singlepage
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSinglePage: async (a, s, n = {}) => {
      R("patchSinglePage", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/singlepages/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update SinglePage
     * @param {string} name Name of singlepage
     * @param {SinglePage} [singlePage] Updated singlepage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSinglePage: async (a, s, n = {}) => {
      R("updateSinglePage", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/singlepages/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, He = function(e) {
  const a = Ol(e);
  return {
    /**
     * Create SinglePage
     * @param {SinglePage} [singlePage] Fresh singlepage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSinglePage(s, n) {
      var o, c;
      const l = await a.createSinglePage(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1Api.createSinglePage"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete SinglePage
     * @param {string} name Name of singlepage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSinglePage(s, n) {
      var o, c;
      const l = await a.deleteSinglePage(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1Api.deleteSinglePage"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get SinglePage
     * @param {string} name Name of singlepage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSinglePage(s, n) {
      var o, c;
      const l = await a.getSinglePage(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1Api.getSinglePage"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List SinglePage
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSinglePage(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listSinglePage(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["SinglePageV1alpha1Api.listSinglePage"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch SinglePage
     * @param {string} name Name of singlepage
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchSinglePage(s, n, l) {
      var c, p;
      const r = await a.patchSinglePage(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SinglePageV1alpha1Api.patchSinglePage"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update SinglePage
     * @param {string} name Name of singlepage
     * @param {SinglePage} [singlePage] Updated singlepage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSinglePage(s, n, l) {
      var c, p;
      const r = await a.updateSinglePage(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SinglePageV1alpha1Api.updateSinglePage"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Gp = function(e, a, s) {
  const n = He(e);
  return {
    /**
     * Create SinglePage
     * @param {SinglePageV1alpha1ApiCreateSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSinglePage(l = {}, r) {
      return n.createSinglePage(l.singlePage, r).then((t) => t(s, a));
    },
    /**
     * Delete SinglePage
     * @param {SinglePageV1alpha1ApiDeleteSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSinglePage(l, r) {
      return n.deleteSinglePage(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get SinglePage
     * @param {SinglePageV1alpha1ApiGetSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSinglePage(l, r) {
      return n.getSinglePage(l.name, r).then((t) => t(s, a));
    },
    /**
     * List SinglePage
     * @param {SinglePageV1alpha1ApiListSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePage(l = {}, r) {
      return n.listSinglePage(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch SinglePage
     * @param {SinglePageV1alpha1ApiPatchSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSinglePage(l, r) {
      return n.patchSinglePage(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update SinglePage
     * @param {SinglePageV1alpha1ApiUpdateSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSinglePage(l, r) {
      return n.updateSinglePage(l.name, l.singlePage, r).then((t) => t(s, a));
    }
  };
};
class Pl extends U {
  /**
   * Create SinglePage
   * @param {SinglePageV1alpha1ApiCreateSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1Api
   */
  createSinglePage(a = {}, s) {
    return He(this.configuration).createSinglePage(a.singlePage, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete SinglePage
   * @param {SinglePageV1alpha1ApiDeleteSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1Api
   */
  deleteSinglePage(a, s) {
    return He(this.configuration).deleteSinglePage(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get SinglePage
   * @param {SinglePageV1alpha1ApiGetSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1Api
   */
  getSinglePage(a, s) {
    return He(this.configuration).getSinglePage(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List SinglePage
   * @param {SinglePageV1alpha1ApiListSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1Api
   */
  listSinglePage(a = {}, s) {
    return He(this.configuration).listSinglePage(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch SinglePage
   * @param {SinglePageV1alpha1ApiPatchSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1Api
   */
  patchSinglePage(a, s) {
    return He(this.configuration).patchSinglePage(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update SinglePage
   * @param {SinglePageV1alpha1ApiUpdateSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1Api
   */
  updateSinglePage(a, s) {
    return He(this.configuration).updateSinglePage(a.name, a.singlePage, s).then((n) => n(this.axios, this.basePath));
  }
}
const ul = function(e) {
  return {
    /**
     * Delete a content for post.
     * @param {string} name 
     * @param {string} snapshotName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSinglePageContent: async (a, s, n = {}) => {
      R("deleteSinglePageContent", "name", a), R("deleteSinglePageContent", "snapshotName", s);
      const l = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}/content".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "DELETE", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), s !== void 0 && (p.snapshotName = s), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    },
    /**
     * Draft a single page.
     * @param {SinglePageRequest} singlePageRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftSinglePage: async (a, s = {}) => {
      R("draftSinglePage", "singlePageRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/singlepages", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch content of single page.
     * @param {string} name 
     * @param {string} snapshotName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchSinglePageContent: async (a, s, n = {}) => {
      R("fetchSinglePageContent", "name", a), R("fetchSinglePageContent", "snapshotName", s);
      const l = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}/content".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "GET", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), s !== void 0 && (p.snapshotName = s), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    },
    /**
     * Fetch head content of single page.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchSinglePageHeadContent: async (a, s = {}) => {
      R("fetchSinglePageHeadContent", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}/head-content".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch release content of single page.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchSinglePageReleaseContent: async (a, s = {}) => {
      R("fetchSinglePageReleaseContent", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}/release-content".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List all snapshots for single page content.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePageSnapshots: async (a, s = {}) => {
      R("listSinglePageSnapshots", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}/snapshot".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List single pages.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {Array<string>} [contributor] SinglePages filtered by contributor.
     * @param {ListSinglePagesPublishPhaseEnum} [publishPhase] SinglePages filtered by publish phase.
     * @param {ListSinglePagesVisibleEnum} [visible] SinglePages filtered by visibility.
     * @param {string} [keyword] SinglePages filtered by keyword.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePages: async (a, s, n, l, r, t, o, c, p, h = {}) => {
      const i = "/apis/api.console.halo.run/v1alpha1/singlepages", d = new URL(i, O);
      let b;
      e && (b = e.baseOptions);
      const x = { method: "GET", ...b, ...h }, w = {}, T = {};
      P(x, e), await u(w, e), a !== void 0 && (T.page = a), s !== void 0 && (T.size = s), n && (T.labelSelector = n), l && (T.fieldSelector = l), r && (T.sort = r), t && (T.contributor = t), o !== void 0 && (T.publishPhase = o), c !== void 0 && (T.visible = c), p !== void 0 && (T.keyword = p), v(d, T);
      let F = b && b.headers ? b.headers : {};
      return x.headers = { ...w, ...F, ...h.headers }, {
        url: S(d),
        options: x
      };
    },
    /**
     * Publish a single page.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishSinglePage: async (a, s = {}) => {
      R("publishSinglePage", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}/publish".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Revert to specified snapshot for single page content.
     * @param {string} name 
     * @param {RevertSnapshotForSingleParam} revertSnapshotForSingleParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revertToSpecifiedSnapshotForSinglePage: async (a, s, n = {}) => {
      R("revertToSpecifiedSnapshotForSinglePage", "name", a), R("revertToSpecifiedSnapshotForSinglePage", "revertSnapshotForSingleParam", s);
      const l = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}/revert-content".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update a single page.
     * @param {string} name 
     * @param {SinglePageRequest} singlePageRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDraftSinglePage: async (a, s, n = {}) => {
      R("updateDraftSinglePage", "name", a), R("updateDraftSinglePage", "singlePageRequest", s);
      const l = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update a single page\'s content.
     * @param {string} name 
     * @param {Content} content 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSinglePageContent: async (a, s, n = {}) => {
      R("updateSinglePageContent", "name", a), R("updateSinglePageContent", "content", s);
      const l = "/apis/api.console.halo.run/v1alpha1/singlepages/{name}/content".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, $ = function(e) {
  const a = ul(e);
  return {
    /**
     * Delete a content for post.
     * @param {string} name 
     * @param {string} snapshotName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSinglePageContent(s, n, l) {
      var c, p;
      const r = await a.deleteSinglePageContent(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SinglePageV1alpha1ConsoleApi.deleteSinglePageContent"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Draft a single page.
     * @param {SinglePageRequest} singlePageRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async draftSinglePage(s, n) {
      var o, c;
      const l = await a.draftSinglePage(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1ConsoleApi.draftSinglePage"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch content of single page.
     * @param {string} name 
     * @param {string} snapshotName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchSinglePageContent(s, n, l) {
      var c, p;
      const r = await a.fetchSinglePageContent(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SinglePageV1alpha1ConsoleApi.fetchSinglePageContent"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Fetch head content of single page.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchSinglePageHeadContent(s, n) {
      var o, c;
      const l = await a.fetchSinglePageHeadContent(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1ConsoleApi.fetchSinglePageHeadContent"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch release content of single page.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchSinglePageReleaseContent(s, n) {
      var o, c;
      const l = await a.fetchSinglePageReleaseContent(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1ConsoleApi.fetchSinglePageReleaseContent"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List all snapshots for single page content.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSinglePageSnapshots(s, n) {
      var o, c;
      const l = await a.listSinglePageSnapshots(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1ConsoleApi.listSinglePageSnapshots"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List single pages.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {Array<string>} [contributor] SinglePages filtered by contributor.
     * @param {ListSinglePagesPublishPhaseEnum} [publishPhase] SinglePages filtered by publish phase.
     * @param {ListSinglePagesVisibleEnum} [visible] SinglePages filtered by visibility.
     * @param {string} [keyword] SinglePages filtered by keyword.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSinglePages(s, n, l, r, t, o, c, p, h, i) {
      var w, T;
      const d = await a.listSinglePages(s, n, l, r, t, o, c, p, h, i), b = (e == null ? void 0 : e.serverIndex) ?? 0, x = (T = (w = y["SinglePageV1alpha1ConsoleApi.listSinglePages"]) == null ? void 0 : w[b]) == null ? void 0 : T.url;
      return (F, k) => A(d, m, V, e)(F, x || k);
    },
    /**
     * Publish a single page.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async publishSinglePage(s, n) {
      var o, c;
      const l = await a.publishSinglePage(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1ConsoleApi.publishSinglePage"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Revert to specified snapshot for single page content.
     * @param {string} name 
     * @param {RevertSnapshotForSingleParam} revertSnapshotForSingleParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async revertToSpecifiedSnapshotForSinglePage(s, n, l) {
      var c, p;
      const r = await a.revertToSpecifiedSnapshotForSinglePage(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SinglePageV1alpha1ConsoleApi.revertToSpecifiedSnapshotForSinglePage"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update a single page.
     * @param {string} name 
     * @param {SinglePageRequest} singlePageRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDraftSinglePage(s, n, l) {
      var c, p;
      const r = await a.updateDraftSinglePage(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SinglePageV1alpha1ConsoleApi.updateDraftSinglePage"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update a single page\'s content.
     * @param {string} name 
     * @param {Content} content 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSinglePageContent(s, n, l) {
      var c, p;
      const r = await a.updateSinglePageContent(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SinglePageV1alpha1ConsoleApi.updateSinglePageContent"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, zp = function(e, a, s) {
  const n = $(e);
  return {
    /**
     * Delete a content for post.
     * @param {SinglePageV1alpha1ConsoleApiDeleteSinglePageContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSinglePageContent(l, r) {
      return n.deleteSinglePageContent(l.name, l.snapshotName, r).then((t) => t(s, a));
    },
    /**
     * Draft a single page.
     * @param {SinglePageV1alpha1ConsoleApiDraftSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftSinglePage(l, r) {
      return n.draftSinglePage(l.singlePageRequest, r).then((t) => t(s, a));
    },
    /**
     * Fetch content of single page.
     * @param {SinglePageV1alpha1ConsoleApiFetchSinglePageContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchSinglePageContent(l, r) {
      return n.fetchSinglePageContent(l.name, l.snapshotName, r).then((t) => t(s, a));
    },
    /**
     * Fetch head content of single page.
     * @param {SinglePageV1alpha1ConsoleApiFetchSinglePageHeadContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchSinglePageHeadContent(l, r) {
      return n.fetchSinglePageHeadContent(l.name, r).then((t) => t(s, a));
    },
    /**
     * Fetch release content of single page.
     * @param {SinglePageV1alpha1ConsoleApiFetchSinglePageReleaseContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchSinglePageReleaseContent(l, r) {
      return n.fetchSinglePageReleaseContent(l.name, r).then((t) => t(s, a));
    },
    /**
     * List all snapshots for single page content.
     * @param {SinglePageV1alpha1ConsoleApiListSinglePageSnapshotsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePageSnapshots(l, r) {
      return n.listSinglePageSnapshots(l.name, r).then((t) => t(s, a));
    },
    /**
     * List single pages.
     * @param {SinglePageV1alpha1ConsoleApiListSinglePagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePages(l = {}, r) {
      return n.listSinglePages(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.contributor, l.publishPhase, l.visible, l.keyword, r).then((t) => t(s, a));
    },
    /**
     * Publish a single page.
     * @param {SinglePageV1alpha1ConsoleApiPublishSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishSinglePage(l, r) {
      return n.publishSinglePage(l.name, r).then((t) => t(s, a));
    },
    /**
     * Revert to specified snapshot for single page content.
     * @param {SinglePageV1alpha1ConsoleApiRevertToSpecifiedSnapshotForSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revertToSpecifiedSnapshotForSinglePage(l, r) {
      return n.revertToSpecifiedSnapshotForSinglePage(l.name, l.revertSnapshotForSingleParam, r).then((t) => t(s, a));
    },
    /**
     * Update a single page.
     * @param {SinglePageV1alpha1ConsoleApiUpdateDraftSinglePageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDraftSinglePage(l, r) {
      return n.updateDraftSinglePage(l.name, l.singlePageRequest, r).then((t) => t(s, a));
    },
    /**
     * Update a single page\'s content.
     * @param {SinglePageV1alpha1ConsoleApiUpdateSinglePageContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSinglePageContent(l, r) {
      return n.updateSinglePageContent(l.name, l.content, r).then((t) => t(s, a));
    }
  };
};
class vl extends U {
  /**
   * Delete a content for post.
   * @param {SinglePageV1alpha1ConsoleApiDeleteSinglePageContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  deleteSinglePageContent(a, s) {
    return $(this.configuration).deleteSinglePageContent(a.name, a.snapshotName, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Draft a single page.
   * @param {SinglePageV1alpha1ConsoleApiDraftSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  draftSinglePage(a, s) {
    return $(this.configuration).draftSinglePage(a.singlePageRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch content of single page.
   * @param {SinglePageV1alpha1ConsoleApiFetchSinglePageContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  fetchSinglePageContent(a, s) {
    return $(this.configuration).fetchSinglePageContent(a.name, a.snapshotName, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch head content of single page.
   * @param {SinglePageV1alpha1ConsoleApiFetchSinglePageHeadContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  fetchSinglePageHeadContent(a, s) {
    return $(this.configuration).fetchSinglePageHeadContent(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch release content of single page.
   * @param {SinglePageV1alpha1ConsoleApiFetchSinglePageReleaseContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  fetchSinglePageReleaseContent(a, s) {
    return $(this.configuration).fetchSinglePageReleaseContent(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List all snapshots for single page content.
   * @param {SinglePageV1alpha1ConsoleApiListSinglePageSnapshotsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  listSinglePageSnapshots(a, s) {
    return $(this.configuration).listSinglePageSnapshots(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List single pages.
   * @param {SinglePageV1alpha1ConsoleApiListSinglePagesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  listSinglePages(a = {}, s) {
    return $(this.configuration).listSinglePages(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.contributor, a.publishPhase, a.visible, a.keyword, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Publish a single page.
   * @param {SinglePageV1alpha1ConsoleApiPublishSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  publishSinglePage(a, s) {
    return $(this.configuration).publishSinglePage(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Revert to specified snapshot for single page content.
   * @param {SinglePageV1alpha1ConsoleApiRevertToSpecifiedSnapshotForSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  revertToSpecifiedSnapshotForSinglePage(a, s) {
    return $(this.configuration).revertToSpecifiedSnapshotForSinglePage(a.name, a.revertSnapshotForSingleParam, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update a single page.
   * @param {SinglePageV1alpha1ConsoleApiUpdateDraftSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  updateDraftSinglePage(a, s) {
    return $(this.configuration).updateDraftSinglePage(a.name, a.singlePageRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update a single page\'s content.
   * @param {SinglePageV1alpha1ConsoleApiUpdateSinglePageContentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1ConsoleApi
   */
  updateSinglePageContent(a, s) {
    return $(this.configuration).updateSinglePageContent(a.name, a.content, s).then((n) => n(this.axios, this.basePath));
  }
}
const _p = {
  Draft: "DRAFT",
  PendingApproval: "PENDING_APPROVAL",
  Published: "PUBLISHED",
  Failed: "FAILED"
}, Jp = {
  Public: "PUBLIC",
  Internal: "INTERNAL",
  Private: "PRIVATE"
}, Sl = function(e) {
  return {
    /**
     * Gets single page by name
     * @param {string} name SinglePage name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    querySinglePageByName: async (a, s = {}) => {
      R("querySinglePageByName", "name", a);
      const n = "/apis/api.content.halo.run/v1alpha1/singlepages/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Lists single pages
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    querySinglePages: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/api.content.halo.run/v1alpha1/singlepages", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    }
  };
}, rt = function(e) {
  const a = Sl(e);
  return {
    /**
     * Gets single page by name
     * @param {string} name SinglePage name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async querySinglePageByName(s, n) {
      var o, c;
      const l = await a.querySinglePageByName(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SinglePageV1alpha1PublicApi.querySinglePageByName"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Lists single pages
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async querySinglePages(s, n, l, r, t, o) {
      var i, d;
      const c = await a.querySinglePages(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["SinglePageV1alpha1PublicApi.querySinglePages"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    }
  };
}, Wp = function(e, a, s) {
  const n = rt(e);
  return {
    /**
     * Gets single page by name
     * @param {SinglePageV1alpha1PublicApiQuerySinglePageByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    querySinglePageByName(l, r) {
      return n.querySinglePageByName(l.name, r).then((t) => t(s, a));
    },
    /**
     * Lists single pages
     * @param {SinglePageV1alpha1PublicApiQuerySinglePagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    querySinglePages(l = {}, r) {
      return n.querySinglePages(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    }
  };
};
class Kp extends U {
  /**
   * Gets single page by name
   * @param {SinglePageV1alpha1PublicApiQuerySinglePageByNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1PublicApi
   */
  querySinglePageByName(a, s) {
    return rt(this.configuration).querySinglePageByName(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Lists single pages
   * @param {SinglePageV1alpha1PublicApiQuerySinglePagesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SinglePageV1alpha1PublicApi
   */
  querySinglePages(a = {}, s) {
    return rt(this.configuration).querySinglePages(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
}
const Al = function(e) {
  return {
    /**
     * Create Snapshot
     * @param {Snapshot} [snapshot] Fresh snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSnapshot: async (a, s = {}) => {
      const n = "/apis/content.halo.run/v1alpha1/snapshots", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Snapshot
     * @param {string} name Name of snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSnapshot: async (a, s = {}) => {
      R("deleteSnapshot", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/snapshots/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Snapshot
     * @param {string} name Name of snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSnapshot: async (a, s = {}) => {
      R("getSnapshot", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/snapshots/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Snapshot
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSnapshot: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/content.halo.run/v1alpha1/snapshots", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Snapshot
     * @param {string} name Name of snapshot
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSnapshot: async (a, s, n = {}) => {
      R("patchSnapshot", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/snapshots/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Snapshot
     * @param {string} name Name of snapshot
     * @param {Snapshot} [snapshot] Updated snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSnapshot: async (a, s, n = {}) => {
      R("updateSnapshot", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/snapshots/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Me = function(e) {
  const a = Al(e);
  return {
    /**
     * Create Snapshot
     * @param {Snapshot} [snapshot] Fresh snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSnapshot(s, n) {
      var o, c;
      const l = await a.createSnapshot(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SnapshotV1alpha1Api.createSnapshot"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Snapshot
     * @param {string} name Name of snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSnapshot(s, n) {
      var o, c;
      const l = await a.deleteSnapshot(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SnapshotV1alpha1Api.deleteSnapshot"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Snapshot
     * @param {string} name Name of snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSnapshot(s, n) {
      var o, c;
      const l = await a.getSnapshot(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SnapshotV1alpha1Api.getSnapshot"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Snapshot
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSnapshot(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listSnapshot(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["SnapshotV1alpha1Api.listSnapshot"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Snapshot
     * @param {string} name Name of snapshot
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchSnapshot(s, n, l) {
      var c, p;
      const r = await a.patchSnapshot(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SnapshotV1alpha1Api.patchSnapshot"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Snapshot
     * @param {string} name Name of snapshot
     * @param {Snapshot} [snapshot] Updated snapshot
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSnapshot(s, n, l) {
      var c, p;
      const r = await a.updateSnapshot(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SnapshotV1alpha1Api.updateSnapshot"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Xp = function(e, a, s) {
  const n = Me(e);
  return {
    /**
     * Create Snapshot
     * @param {SnapshotV1alpha1ApiCreateSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSnapshot(l = {}, r) {
      return n.createSnapshot(l.snapshot, r).then((t) => t(s, a));
    },
    /**
     * Delete Snapshot
     * @param {SnapshotV1alpha1ApiDeleteSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSnapshot(l, r) {
      return n.deleteSnapshot(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Snapshot
     * @param {SnapshotV1alpha1ApiGetSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSnapshot(l, r) {
      return n.getSnapshot(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Snapshot
     * @param {SnapshotV1alpha1ApiListSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSnapshot(l = {}, r) {
      return n.listSnapshot(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Snapshot
     * @param {SnapshotV1alpha1ApiPatchSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSnapshot(l, r) {
      return n.patchSnapshot(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Snapshot
     * @param {SnapshotV1alpha1ApiUpdateSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSnapshot(l, r) {
      return n.updateSnapshot(l.name, l.snapshot, r).then((t) => t(s, a));
    }
  };
};
class bl extends U {
  /**
   * Create Snapshot
   * @param {SnapshotV1alpha1ApiCreateSnapshotRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotV1alpha1Api
   */
  createSnapshot(a = {}, s) {
    return Me(this.configuration).createSnapshot(a.snapshot, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Snapshot
   * @param {SnapshotV1alpha1ApiDeleteSnapshotRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotV1alpha1Api
   */
  deleteSnapshot(a, s) {
    return Me(this.configuration).deleteSnapshot(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Snapshot
   * @param {SnapshotV1alpha1ApiGetSnapshotRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotV1alpha1Api
   */
  getSnapshot(a, s) {
    return Me(this.configuration).getSnapshot(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Snapshot
   * @param {SnapshotV1alpha1ApiListSnapshotRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotV1alpha1Api
   */
  listSnapshot(a = {}, s) {
    return Me(this.configuration).listSnapshot(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Snapshot
   * @param {SnapshotV1alpha1ApiPatchSnapshotRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotV1alpha1Api
   */
  patchSnapshot(a, s) {
    return Me(this.configuration).patchSnapshot(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Snapshot
   * @param {SnapshotV1alpha1ApiUpdateSnapshotRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotV1alpha1Api
   */
  updateSnapshot(a, s) {
    return Me(this.configuration).updateSnapshot(a.name, a.snapshot, s).then((n) => n(this.axios, this.basePath));
  }
}
const Rl = function(e) {
  return {
    /**
     * Get snapshot for one post.
     * @param {string} name Snapshot name.
     * @param {string} postName Post name.
     * @param {boolean} [patched] Should include patched content and raw or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSnapshotForPost: async (a, s, n, l = {}) => {
      R("getSnapshotForPost", "name", a), R("getSnapshotForPost", "postName", s);
      const r = "/apis/uc.api.content.halo.run/v1alpha1/snapshots/{name}".replace("{name}", encodeURIComponent(String(a))), t = new URL(r, O);
      let o;
      e && (o = e.baseOptions);
      const c = { method: "GET", ...o, ...l }, p = {}, h = {};
      P(c, e), await u(p, e), s !== void 0 && (h.postName = s), n !== void 0 && (h.patched = n), v(t, h);
      let i = o && o.headers ? o.headers : {};
      return c.headers = { ...p, ...i, ...l.headers }, {
        url: S(t),
        options: c
      };
    }
  };
}, Wt = function(e) {
  const a = Rl(e);
  return {
    /**
     * Get snapshot for one post.
     * @param {string} name Snapshot name.
     * @param {string} postName Post name.
     * @param {boolean} [patched] Should include patched content and raw or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSnapshotForPost(s, n, l, r) {
      var p, h;
      const t = await a.getSnapshotForPost(s, n, l, r), o = (e == null ? void 0 : e.serverIndex) ?? 0, c = (h = (p = y["SnapshotV1alpha1UcApi.getSnapshotForPost"]) == null ? void 0 : p[o]) == null ? void 0 : h.url;
      return (i, d) => A(t, m, V, e)(i, c || d);
    }
  };
}, Yp = function(e, a, s) {
  const n = Wt(e);
  return {
    /**
     * Get snapshot for one post.
     * @param {SnapshotV1alpha1UcApiGetSnapshotForPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSnapshotForPost(l, r) {
      return n.getSnapshotForPost(l.name, l.postName, l.patched, r).then((t) => t(s, a));
    }
  };
};
class xl extends U {
  /**
   * Get snapshot for one post.
   * @param {SnapshotV1alpha1UcApiGetSnapshotForPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SnapshotV1alpha1UcApi
   */
  getSnapshotForPost(a, s) {
    return Wt(this.configuration).getSnapshotForPost(a.name, a.postName, a.patched, s).then((n) => n(this.axios, this.basePath));
  }
}
const Cl = function(e) {
  return {
    /**
     * Create Subscription
     * @param {Subscription} [subscription] Fresh subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscription: async (a, s = {}) => {
      const n = "/apis/notification.halo.run/v1alpha1/subscriptions", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Subscription
     * @param {string} name Name of subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubscription: async (a, s = {}) => {
      R("deleteSubscription", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/subscriptions/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Subscription
     * @param {string} name Name of subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubscription: async (a, s = {}) => {
      R("getSubscription", "name", a);
      const n = "/apis/notification.halo.run/v1alpha1/subscriptions/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Subscription
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscription: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/notification.halo.run/v1alpha1/subscriptions", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Subscription
     * @param {string} name Name of subscription
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSubscription: async (a, s, n = {}) => {
      R("patchSubscription", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/subscriptions/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Subscription
     * @param {string} name Name of subscription
     * @param {Subscription} [subscription] Updated subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSubscription: async (a, s, n = {}) => {
      R("updateSubscription", "name", a);
      const l = "/apis/notification.halo.run/v1alpha1/subscriptions/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Qe = function(e) {
  const a = Cl(e);
  return {
    /**
     * Create Subscription
     * @param {Subscription} [subscription] Fresh subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSubscription(s, n) {
      var o, c;
      const l = await a.createSubscription(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SubscriptionV1alpha1Api.createSubscription"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Subscription
     * @param {string} name Name of subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSubscription(s, n) {
      var o, c;
      const l = await a.deleteSubscription(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SubscriptionV1alpha1Api.deleteSubscription"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Subscription
     * @param {string} name Name of subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSubscription(s, n) {
      var o, c;
      const l = await a.getSubscription(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SubscriptionV1alpha1Api.getSubscription"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Subscription
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSubscription(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listSubscription(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["SubscriptionV1alpha1Api.listSubscription"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Subscription
     * @param {string} name Name of subscription
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchSubscription(s, n, l) {
      var c, p;
      const r = await a.patchSubscription(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SubscriptionV1alpha1Api.patchSubscription"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Subscription
     * @param {string} name Name of subscription
     * @param {Subscription} [subscription] Updated subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSubscription(s, n, l) {
      var c, p;
      const r = await a.updateSubscription(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SubscriptionV1alpha1Api.updateSubscription"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Zp = function(e, a, s) {
  const n = Qe(e);
  return {
    /**
     * Create Subscription
     * @param {SubscriptionV1alpha1ApiCreateSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscription(l = {}, r) {
      return n.createSubscription(l.subscription, r).then((t) => t(s, a));
    },
    /**
     * Delete Subscription
     * @param {SubscriptionV1alpha1ApiDeleteSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubscription(l, r) {
      return n.deleteSubscription(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Subscription
     * @param {SubscriptionV1alpha1ApiGetSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSubscription(l, r) {
      return n.getSubscription(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Subscription
     * @param {SubscriptionV1alpha1ApiListSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscription(l = {}, r) {
      return n.listSubscription(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Subscription
     * @param {SubscriptionV1alpha1ApiPatchSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchSubscription(l, r) {
      return n.patchSubscription(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Subscription
     * @param {SubscriptionV1alpha1ApiUpdateSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSubscription(l, r) {
      return n.updateSubscription(l.name, l.subscription, r).then((t) => t(s, a));
    }
  };
};
class wl extends U {
  /**
   * Create Subscription
   * @param {SubscriptionV1alpha1ApiCreateSubscriptionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionV1alpha1Api
   */
  createSubscription(a = {}, s) {
    return Qe(this.configuration).createSubscription(a.subscription, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Subscription
   * @param {SubscriptionV1alpha1ApiDeleteSubscriptionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionV1alpha1Api
   */
  deleteSubscription(a, s) {
    return Qe(this.configuration).deleteSubscription(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Subscription
   * @param {SubscriptionV1alpha1ApiGetSubscriptionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionV1alpha1Api
   */
  getSubscription(a, s) {
    return Qe(this.configuration).getSubscription(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Subscription
   * @param {SubscriptionV1alpha1ApiListSubscriptionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionV1alpha1Api
   */
  listSubscription(a = {}, s) {
    return Qe(this.configuration).listSubscription(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Subscription
   * @param {SubscriptionV1alpha1ApiPatchSubscriptionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionV1alpha1Api
   */
  patchSubscription(a, s) {
    return Qe(this.configuration).patchSubscription(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Subscription
   * @param {SubscriptionV1alpha1ApiUpdateSubscriptionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionV1alpha1Api
   */
  updateSubscription(a, s) {
    return Qe(this.configuration).updateSubscription(a.name, a.subscription, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ul = function(e) {
  return {
    /**
     * Get system config by group
     * @param {string} group Group of the system config
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSystemConfigByGroup: async (a, s = {}) => {
      R("getSystemConfigByGroup", "group", a);
      const n = "/apis/console.api.halo.run/v1alpha1/systemconfigs/{group}".replace("{group}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Update system config by group
     * @param {string} group Group of the system config
     * @param {object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSystemConfigByGroup: async (a, s, n = {}) => {
      R("updateSystemConfigByGroup", "group", a);
      const l = "/apis/console.api.halo.run/v1alpha1/systemconfigs/{group}".replace("{group}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, st = function(e) {
  const a = Ul(e);
  return {
    /**
     * Get system config by group
     * @param {string} group Group of the system config
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSystemConfigByGroup(s, n) {
      var o, c;
      const l = await a.getSystemConfigByGroup(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["SystemConfigV1alpha1ConsoleApi.getSystemConfigByGroup"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Update system config by group
     * @param {string} group Group of the system config
     * @param {object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSystemConfigByGroup(s, n, l) {
      var c, p;
      const r = await a.updateSystemConfigByGroup(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["SystemConfigV1alpha1ConsoleApi.updateSystemConfigByGroup"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, qp = function(e, a, s) {
  const n = st(e);
  return {
    /**
     * Get system config by group
     * @param {SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSystemConfigByGroup(l, r) {
      return n.getSystemConfigByGroup(l.group, r).then((t) => t(s, a));
    },
    /**
     * Update system config by group
     * @param {SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSystemConfigByGroup(l, r) {
      return n.updateSystemConfigByGroup(l.group, l.body, r).then((t) => t(s, a));
    }
  };
};
class Tl extends U {
  /**
   * Get system config by group
   * @param {SystemConfigV1alpha1ConsoleApiGetSystemConfigByGroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SystemConfigV1alpha1ConsoleApi
   */
  getSystemConfigByGroup(a, s) {
    return st(this.configuration).getSystemConfigByGroup(a.group, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update system config by group
   * @param {SystemConfigV1alpha1ConsoleApiUpdateSystemConfigByGroupRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SystemConfigV1alpha1ConsoleApi
   */
  updateSystemConfigByGroup(a, s) {
    return st(this.configuration).updateSystemConfigByGroup(a.group, a.body, s).then((n) => n(this.axios, this.basePath));
  }
}
const Il = function(e) {
  return {
    /**
     * Get stats.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStats: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/stats", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    }
  };
}, Kt = function(e) {
  const a = Il(e);
  return {
    /**
     * Get stats.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStats(s) {
      var t, o;
      const n = await a.getStats(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["SystemV1alpha1ConsoleApi.getStats"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    }
  };
}, gp = function(e, a, s) {
  const n = Kt(e);
  return {
    /**
     * Get stats.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStats(l) {
      return n.getStats(l).then((r) => r(s, a));
    }
  };
};
class Bl extends U {
  /**
   * Get stats.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SystemV1alpha1ConsoleApi
   */
  getStats(a) {
    return Kt(this.configuration).getStats(a).then((s) => s(this.axios, this.basePath));
  }
}
const Fl = function(e) {
  return {
    /**
     * Gets site stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryStats: async (a = {}) => {
      const s = "/apis/api.halo.run/v1alpha1/stats/-", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    }
  };
}, Xt = function(e) {
  const a = Fl(e);
  return {
    /**
     * Gets site stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryStats(s) {
      var t, o;
      const n = await a.queryStats(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["SystemV1alpha1PublicApi.queryStats"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    }
  };
}, fp = function(e, a, s) {
  const n = Xt(e);
  return {
    /**
     * Gets site stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryStats(l) {
      return n.queryStats(l).then((r) => r(s, a));
    }
  };
};
class El extends U {
  /**
   * Gets site stats
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SystemV1alpha1PublicApi
   */
  queryStats(a) {
    return Xt(this.configuration).queryStats(a).then((s) => s(this.axios, this.basePath));
  }
}
const jl = function(e) {
  return {
    /**
     * Create Tag
     * @param {Tag} [tag] Fresh tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTag: async (a, s = {}) => {
      const n = "/apis/content.halo.run/v1alpha1/tags", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Tag
     * @param {string} name Name of tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTag: async (a, s = {}) => {
      R("deleteTag", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/tags/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Tag
     * @param {string} name Name of tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTag: async (a, s = {}) => {
      R("getTag", "name", a);
      const n = "/apis/content.halo.run/v1alpha1/tags/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Tag
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTag: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/content.halo.run/v1alpha1/tags", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Tag
     * @param {string} name Name of tag
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTag: async (a, s, n = {}) => {
      R("patchTag", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/tags/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Tag
     * @param {string} name Name of tag
     * @param {Tag} [tag] Updated tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTag: async (a, s, n = {}) => {
      R("updateTag", "name", a);
      const l = "/apis/content.halo.run/v1alpha1/tags/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, ke = function(e) {
  const a = jl(e);
  return {
    /**
     * Create Tag
     * @param {Tag} [tag] Fresh tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTag(s, n) {
      var o, c;
      const l = await a.createTag(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["TagV1alpha1Api.createTag"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Tag
     * @param {string} name Name of tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTag(s, n) {
      var o, c;
      const l = await a.deleteTag(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["TagV1alpha1Api.deleteTag"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Tag
     * @param {string} name Name of tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTag(s, n) {
      var o, c;
      const l = await a.getTag(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["TagV1alpha1Api.getTag"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Tag
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listTag(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listTag(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["TagV1alpha1Api.listTag"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Tag
     * @param {string} name Name of tag
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchTag(s, n, l) {
      var c, p;
      const r = await a.patchTag(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["TagV1alpha1Api.patchTag"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Tag
     * @param {string} name Name of tag
     * @param {Tag} [tag] Updated tag
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTag(s, n, l) {
      var c, p;
      const r = await a.updateTag(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["TagV1alpha1Api.updateTag"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, eh = function(e, a, s) {
  const n = ke(e);
  return {
    /**
     * Create Tag
     * @param {TagV1alpha1ApiCreateTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTag(l = {}, r) {
      return n.createTag(l.tag, r).then((t) => t(s, a));
    },
    /**
     * Delete Tag
     * @param {TagV1alpha1ApiDeleteTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTag(l, r) {
      return n.deleteTag(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Tag
     * @param {TagV1alpha1ApiGetTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTag(l, r) {
      return n.getTag(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Tag
     * @param {TagV1alpha1ApiListTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTag(l = {}, r) {
      return n.listTag(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Tag
     * @param {TagV1alpha1ApiPatchTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTag(l, r) {
      return n.patchTag(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Tag
     * @param {TagV1alpha1ApiUpdateTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTag(l, r) {
      return n.updateTag(l.name, l.tag, r).then((t) => t(s, a));
    }
  };
};
class Ll extends U {
  /**
   * Create Tag
   * @param {TagV1alpha1ApiCreateTagRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1Api
   */
  createTag(a = {}, s) {
    return ke(this.configuration).createTag(a.tag, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Tag
   * @param {TagV1alpha1ApiDeleteTagRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1Api
   */
  deleteTag(a, s) {
    return ke(this.configuration).deleteTag(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Tag
   * @param {TagV1alpha1ApiGetTagRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1Api
   */
  getTag(a, s) {
    return ke(this.configuration).getTag(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Tag
   * @param {TagV1alpha1ApiListTagRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1Api
   */
  listTag(a = {}, s) {
    return ke(this.configuration).listTag(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Tag
   * @param {TagV1alpha1ApiPatchTagRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1Api
   */
  patchTag(a, s) {
    return ke(this.configuration).patchTag(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Tag
   * @param {TagV1alpha1ApiUpdateTagRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1Api
   */
  updateTag(a, s) {
    return ke(this.configuration).updateTag(a.name, a.tag, s).then((n) => n(this.axios, this.basePath));
  }
}
const Dl = function(e) {
  return {
    /**
     * List Post Tags.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [keyword] Post tags filtered by keyword.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPostTags: async (a, s, n, l, r, t, o = {}) => {
      const c = "/apis/api.console.halo.run/v1alpha1/tags", p = new URL(c, O);
      let h;
      e && (h = e.baseOptions);
      const i = { method: "GET", ...h, ...o }, d = {}, b = {};
      P(i, e), await u(d, e), a !== void 0 && (b.page = a), s !== void 0 && (b.size = s), n && (b.labelSelector = n), l && (b.fieldSelector = l), r && (b.sort = r), t !== void 0 && (b.keyword = t), v(p, b);
      let x = h && h.headers ? h.headers : {};
      return i.headers = { ...d, ...x, ...o.headers }, {
        url: S(p),
        options: i
      };
    }
  };
}, Yt = function(e) {
  const a = Dl(e);
  return {
    /**
     * List Post Tags.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [keyword] Post tags filtered by keyword.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPostTags(s, n, l, r, t, o, c) {
      var d, b;
      const p = await a.listPostTags(s, n, l, r, t, o, c), h = (e == null ? void 0 : e.serverIndex) ?? 0, i = (b = (d = y["TagV1alpha1ConsoleApi.listPostTags"]) == null ? void 0 : d[h]) == null ? void 0 : b.url;
      return (x, w) => A(p, m, V, e)(x, i || w);
    }
  };
}, ah = function(e, a, s) {
  const n = Yt(e);
  return {
    /**
     * List Post Tags.
     * @param {TagV1alpha1ConsoleApiListPostTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPostTags(l = {}, r) {
      return n.listPostTags(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.keyword, r).then((t) => t(s, a));
    }
  };
};
class Nl extends U {
  /**
   * List Post Tags.
   * @param {TagV1alpha1ConsoleApiListPostTagsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1ConsoleApi
   */
  listPostTags(a = {}, s) {
    return Yt(this.configuration).listPostTags(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.keyword, s).then((n) => n(this.axios, this.basePath));
  }
}
const Hl = function(e) {
  return {
    /**
     * Lists posts by tag name
     * @param {string} name Tag name
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPostsByTagName: async (a, s, n, l, r, t, o = {}) => {
      R("queryPostsByTagName", "name", a);
      const c = "/apis/api.content.halo.run/v1alpha1/tags/{name}/posts".replace("{name}", encodeURIComponent(String(a))), p = new URL(c, O);
      let h;
      e && (h = e.baseOptions);
      const i = { method: "GET", ...h, ...o }, d = {}, b = {};
      P(i, e), await u(d, e), s !== void 0 && (b.page = s), n !== void 0 && (b.size = n), l && (b.labelSelector = l), r && (b.fieldSelector = r), t && (b.sort = t), v(p, b);
      let x = h && h.headers ? h.headers : {};
      return i.headers = { ...d, ...x, ...o.headers }, {
        url: S(p),
        options: i
      };
    },
    /**
     * Gets tag by name
     * @param {string} name Tag name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryTagByName: async (a, s = {}) => {
      R("queryTagByName", "name", a);
      const n = "/apis/api.content.halo.run/v1alpha1/tags/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Lists tags
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryTags: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/api.content.halo.run/v1alpha1/tags", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    }
  };
}, Ba = function(e) {
  const a = Hl(e);
  return {
    /**
     * Lists posts by tag name
     * @param {string} name Tag name
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryPostsByTagName(s, n, l, r, t, o, c) {
      var d, b;
      const p = await a.queryPostsByTagName(s, n, l, r, t, o, c), h = (e == null ? void 0 : e.serverIndex) ?? 0, i = (b = (d = y["TagV1alpha1PublicApi.queryPostsByTagName"]) == null ? void 0 : d[h]) == null ? void 0 : b.url;
      return (x, w) => A(p, m, V, e)(x, i || w);
    },
    /**
     * Gets tag by name
     * @param {string} name Tag name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryTagByName(s, n) {
      var o, c;
      const l = await a.queryTagByName(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["TagV1alpha1PublicApi.queryTagByName"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Lists tags
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryTags(s, n, l, r, t, o) {
      var i, d;
      const c = await a.queryTags(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["TagV1alpha1PublicApi.queryTags"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    }
  };
}, th = function(e, a, s) {
  const n = Ba(e);
  return {
    /**
     * Lists posts by tag name
     * @param {TagV1alpha1PublicApiQueryPostsByTagNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryPostsByTagName(l, r) {
      return n.queryPostsByTagName(l.name, l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Gets tag by name
     * @param {TagV1alpha1PublicApiQueryTagByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryTagByName(l, r) {
      return n.queryTagByName(l.name, r).then((t) => t(s, a));
    },
    /**
     * Lists tags
     * @param {TagV1alpha1PublicApiQueryTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryTags(l = {}, r) {
      return n.queryTags(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    }
  };
};
class rh extends U {
  /**
   * Lists posts by tag name
   * @param {TagV1alpha1PublicApiQueryPostsByTagNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1PublicApi
   */
  queryPostsByTagName(a, s) {
    return Ba(this.configuration).queryPostsByTagName(a.name, a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Gets tag by name
   * @param {TagV1alpha1PublicApiQueryTagByNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1PublicApi
   */
  queryTagByName(a, s) {
    return Ba(this.configuration).queryTagByName(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Lists tags
   * @param {TagV1alpha1PublicApiQueryTagsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TagV1alpha1PublicApi
   */
  queryTags(a = {}, s) {
    return Ba(this.configuration).queryTags(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
}
const Ml = function(e) {
  return {
    /**
     * Create Theme
     * @param {Theme} [theme] Fresh theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTheme: async (a, s = {}) => {
      const n = "/apis/theme.halo.run/v1alpha1/themes", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Theme
     * @param {string} name Name of theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTheme: async (a, s = {}) => {
      R("deleteTheme", "name", a);
      const n = "/apis/theme.halo.run/v1alpha1/themes/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Theme
     * @param {string} name Name of theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTheme: async (a, s = {}) => {
      R("getTheme", "name", a);
      const n = "/apis/theme.halo.run/v1alpha1/themes/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Theme
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTheme: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/theme.halo.run/v1alpha1/themes", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Theme
     * @param {string} name Name of theme
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTheme: async (a, s, n = {}) => {
      R("patchTheme", "name", a);
      const l = "/apis/theme.halo.run/v1alpha1/themes/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Theme
     * @param {string} name Name of theme
     * @param {Theme} [theme] Updated theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTheme: async (a, s, n = {}) => {
      R("updateTheme", "name", a);
      const l = "/apis/theme.halo.run/v1alpha1/themes/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, $e = function(e) {
  const a = Ml(e);
  return {
    /**
     * Create Theme
     * @param {Theme} [theme] Fresh theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createTheme(s, n) {
      var o, c;
      const l = await a.createTheme(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1Api.createTheme"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Theme
     * @param {string} name Name of theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTheme(s, n) {
      var o, c;
      const l = await a.deleteTheme(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1Api.deleteTheme"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Theme
     * @param {string} name Name of theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTheme(s, n) {
      var o, c;
      const l = await a.getTheme(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1Api.getTheme"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Theme
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listTheme(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listTheme(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ThemeV1alpha1Api.listTheme"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Theme
     * @param {string} name Name of theme
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchTheme(s, n, l) {
      var c, p;
      const r = await a.patchTheme(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThemeV1alpha1Api.patchTheme"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Theme
     * @param {string} name Name of theme
     * @param {Theme} [theme] Updated theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateTheme(s, n, l) {
      var c, p;
      const r = await a.updateTheme(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThemeV1alpha1Api.updateTheme"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, sh = function(e, a, s) {
  const n = $e(e);
  return {
    /**
     * Create Theme
     * @param {ThemeV1alpha1ApiCreateThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTheme(l = {}, r) {
      return n.createTheme(l.theme, r).then((t) => t(s, a));
    },
    /**
     * Delete Theme
     * @param {ThemeV1alpha1ApiDeleteThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTheme(l, r) {
      return n.deleteTheme(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Theme
     * @param {ThemeV1alpha1ApiGetThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTheme(l, r) {
      return n.getTheme(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Theme
     * @param {ThemeV1alpha1ApiListThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listTheme(l = {}, r) {
      return n.listTheme(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Theme
     * @param {ThemeV1alpha1ApiPatchThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchTheme(l, r) {
      return n.patchTheme(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Theme
     * @param {ThemeV1alpha1ApiUpdateThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTheme(l, r) {
      return n.updateTheme(l.name, l.theme, r).then((t) => t(s, a));
    }
  };
};
class Ql extends U {
  /**
   * Create Theme
   * @param {ThemeV1alpha1ApiCreateThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1Api
   */
  createTheme(a = {}, s) {
    return $e(this.configuration).createTheme(a.theme, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Theme
   * @param {ThemeV1alpha1ApiDeleteThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1Api
   */
  deleteTheme(a, s) {
    return $e(this.configuration).deleteTheme(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Theme
   * @param {ThemeV1alpha1ApiGetThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1Api
   */
  getTheme(a, s) {
    return $e(this.configuration).getTheme(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Theme
   * @param {ThemeV1alpha1ApiListThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1Api
   */
  listTheme(a = {}, s) {
    return $e(this.configuration).listTheme(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Theme
   * @param {ThemeV1alpha1ApiPatchThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1Api
   */
  patchTheme(a, s) {
    return $e(this.configuration).patchTheme(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Theme
   * @param {ThemeV1alpha1ApiUpdateThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1Api
   */
  updateTheme(a, s) {
    return $e(this.configuration).updateTheme(a.name, a.theme, s).then((n) => n(this.axios, this.basePath));
  }
}
const kl = function(e) {
  return {
    /**
     * Activate a theme by name.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activateTheme: async (a, s = {}) => {
      R("activateTheme", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/themes/{name}/activation".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch the activated theme.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchActivatedTheme: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/themes/-/activation", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Fetch configMap of theme by configured configMapName. It is deprecated.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    fetchThemeConfig: async (a, s = {}) => {
      R("fetchThemeConfig", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/themes/{name}/config".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch converted json config of theme by configured configMapName.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchThemeJsonConfig: async (a, s = {}) => {
      R("fetchThemeJsonConfig", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/themes/{name}/json-config".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Fetch setting of theme.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchThemeSetting: async (a, s = {}) => {
      R("fetchThemeSetting", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/themes/{name}/setting".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Install a theme by uploading a zip file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installTheme: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/themes/install", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "POST", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Install a theme from uri.
     * @param {InstallFromUriRequest} installFromUriRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installThemeFromUri: async (a, s = {}) => {
      R("installThemeFromUri", "installFromUriRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/themes/-/install-from-uri", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Invalidate theme template cache.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    invalidateCache: async (a, s = {}) => {
      R("invalidateCache", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/themes/{name}/invalidate-cache".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List themes.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {boolean} [uninstalled] Whether to list uninstalled themes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listThemes: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/api.console.halo.run/v1alpha1/themes", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r !== void 0 && (d.uninstalled = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Reload theme setting.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reload: async (a, s = {}) => {
      R("reload", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/themes/{name}/reload".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Reset the configMap of theme setting.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetThemeConfig: async (a, s = {}) => {
      R("resetThemeConfig", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/themes/{name}/reset-config".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Update the configMap of theme setting. It is deprecated.
     * @param {string} name 
     * @param {ConfigMap} configMap 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    updateThemeConfig: async (a, s, n = {}) => {
      R("updateThemeConfig", "name", a), R("updateThemeConfig", "configMap", s);
      const l = "/apis/api.console.halo.run/v1alpha1/themes/{name}/config".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update the configMap of theme setting.
     * @param {string} name 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateThemeJsonConfig: async (a, s, n = {}) => {
      R("updateThemeJsonConfig", "name", a), R("updateThemeJsonConfig", "body", s);
      const l = "/apis/api.console.halo.run/v1alpha1/themes/{name}/json-config".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Upgrade theme
     * @param {string} name 
     * @param {File} file 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradeTheme: async (a, s, n = {}) => {
      R("upgradeTheme", "name", a), R("upgradeTheme", "file", s);
      const l = "/apis/api.console.halo.run/v1alpha1/themes/{name}/upgrade".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {}, h = new (e && e.formDataCtor || FormData)();
      P(o, e), await u(c, e), s !== void 0 && h.append("file", s), c["Content-Type"] = "multipart/form-data", v(r, p);
      let i = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...i, ...n.headers }, o.data = h, {
        url: S(r),
        options: o
      };
    },
    /**
     * Upgrade a theme from uri.
     * @param {string} name 
     * @param {UpgradeFromUriRequest} upgradeFromUriRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradeThemeFromUri: async (a, s, n = {}) => {
      R("upgradeThemeFromUri", "name", a), R("upgradeThemeFromUri", "upgradeFromUriRequest", s);
      const l = "/apis/api.console.halo.run/v1alpha1/themes/{name}/upgrade-from-uri".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, N = function(e) {
  const a = kl(e);
  return {
    /**
     * Activate a theme by name.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async activateTheme(s, n) {
      var o, c;
      const l = await a.activateTheme(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1ConsoleApi.activateTheme"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch the activated theme.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchActivatedTheme(s) {
      var t, o;
      const n = await a.fetchActivatedTheme(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["ThemeV1alpha1ConsoleApi.fetchActivatedTheme"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Fetch configMap of theme by configured configMapName. It is deprecated.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async fetchThemeConfig(s, n) {
      var o, c;
      const l = await a.fetchThemeConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1ConsoleApi.fetchThemeConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch converted json config of theme by configured configMapName.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchThemeJsonConfig(s, n) {
      var o, c;
      const l = await a.fetchThemeJsonConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1ConsoleApi.fetchThemeJsonConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Fetch setting of theme.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchThemeSetting(s, n) {
      var o, c;
      const l = await a.fetchThemeSetting(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1ConsoleApi.fetchThemeSetting"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Install a theme by uploading a zip file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async installTheme(s) {
      var t, o;
      const n = await a.installTheme(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["ThemeV1alpha1ConsoleApi.installTheme"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Install a theme from uri.
     * @param {InstallFromUriRequest} installFromUriRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async installThemeFromUri(s, n) {
      var o, c;
      const l = await a.installThemeFromUri(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1ConsoleApi.installThemeFromUri"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Invalidate theme template cache.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async invalidateCache(s, n) {
      var o, c;
      const l = await a.invalidateCache(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1ConsoleApi.invalidateCache"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List themes.
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {boolean} [uninstalled] Whether to list uninstalled themes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listThemes(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listThemes(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ThemeV1alpha1ConsoleApi.listThemes"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Reload theme setting.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async reload(s, n) {
      var o, c;
      const l = await a.reload(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1ConsoleApi.reload"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Reset the configMap of theme setting.
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async resetThemeConfig(s, n) {
      var o, c;
      const l = await a.resetThemeConfig(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThemeV1alpha1ConsoleApi.resetThemeConfig"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Update the configMap of theme setting. It is deprecated.
     * @param {string} name 
     * @param {ConfigMap} configMap 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async updateThemeConfig(s, n, l) {
      var c, p;
      const r = await a.updateThemeConfig(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThemeV1alpha1ConsoleApi.updateThemeConfig"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update the configMap of theme setting.
     * @param {string} name 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateThemeJsonConfig(s, n, l) {
      var c, p;
      const r = await a.updateThemeJsonConfig(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThemeV1alpha1ConsoleApi.updateThemeJsonConfig"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Upgrade theme
     * @param {string} name 
     * @param {File} file 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async upgradeTheme(s, n, l) {
      var c, p;
      const r = await a.upgradeTheme(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThemeV1alpha1ConsoleApi.upgradeTheme"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Upgrade a theme from uri.
     * @param {string} name 
     * @param {UpgradeFromUriRequest} upgradeFromUriRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async upgradeThemeFromUri(s, n, l) {
      var c, p;
      const r = await a.upgradeThemeFromUri(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThemeV1alpha1ConsoleApi.upgradeThemeFromUri"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, lh = function(e, a, s) {
  const n = N(e);
  return {
    /**
     * Activate a theme by name.
     * @param {ThemeV1alpha1ConsoleApiActivateThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activateTheme(l, r) {
      return n.activateTheme(l.name, r).then((t) => t(s, a));
    },
    /**
     * Fetch the activated theme.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchActivatedTheme(l) {
      return n.fetchActivatedTheme(l).then((r) => r(s, a));
    },
    /**
     * Fetch configMap of theme by configured configMapName. It is deprecated.
     * @param {ThemeV1alpha1ConsoleApiFetchThemeConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    fetchThemeConfig(l, r) {
      return n.fetchThemeConfig(l.name, r).then((t) => t(s, a));
    },
    /**
     * Fetch converted json config of theme by configured configMapName.
     * @param {ThemeV1alpha1ConsoleApiFetchThemeJsonConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchThemeJsonConfig(l, r) {
      return n.fetchThemeJsonConfig(l.name, r).then((t) => t(s, a));
    },
    /**
     * Fetch setting of theme.
     * @param {ThemeV1alpha1ConsoleApiFetchThemeSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchThemeSetting(l, r) {
      return n.fetchThemeSetting(l.name, r).then((t) => t(s, a));
    },
    /**
     * Install a theme by uploading a zip file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installTheme(l) {
      return n.installTheme(l).then((r) => r(s, a));
    },
    /**
     * Install a theme from uri.
     * @param {ThemeV1alpha1ConsoleApiInstallThemeFromUriRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installThemeFromUri(l, r) {
      return n.installThemeFromUri(l.installFromUriRequest, r).then((t) => t(s, a));
    },
    /**
     * Invalidate theme template cache.
     * @param {ThemeV1alpha1ConsoleApiInvalidateCacheRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    invalidateCache(l, r) {
      return n.invalidateCache(l.name, r).then((t) => t(s, a));
    },
    /**
     * List themes.
     * @param {ThemeV1alpha1ConsoleApiListThemesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listThemes(l = {}, r) {
      return n.listThemes(l.page, l.size, l.labelSelector, l.fieldSelector, l.uninstalled, r).then((t) => t(s, a));
    },
    /**
     * Reload theme setting.
     * @param {ThemeV1alpha1ConsoleApiReloadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reload(l, r) {
      return n.reload(l.name, r).then((t) => t(s, a));
    },
    /**
     * Reset the configMap of theme setting.
     * @param {ThemeV1alpha1ConsoleApiResetThemeConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetThemeConfig(l, r) {
      return n.resetThemeConfig(l.name, r).then((t) => t(s, a));
    },
    /**
     * Update the configMap of theme setting. It is deprecated.
     * @param {ThemeV1alpha1ConsoleApiUpdateThemeConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    updateThemeConfig(l, r) {
      return n.updateThemeConfig(l.name, l.configMap, r).then((t) => t(s, a));
    },
    /**
     * Update the configMap of theme setting.
     * @param {ThemeV1alpha1ConsoleApiUpdateThemeJsonConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateThemeJsonConfig(l, r) {
      return n.updateThemeJsonConfig(l.name, l.body, r).then((t) => t(s, a));
    },
    /**
     * Upgrade theme
     * @param {ThemeV1alpha1ConsoleApiUpgradeThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradeTheme(l, r) {
      return n.upgradeTheme(l.name, l.file, r).then((t) => t(s, a));
    },
    /**
     * Upgrade a theme from uri.
     * @param {ThemeV1alpha1ConsoleApiUpgradeThemeFromUriRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradeThemeFromUri(l, r) {
      return n.upgradeThemeFromUri(l.name, l.upgradeFromUriRequest, r).then((t) => t(s, a));
    }
  };
};
class $l extends U {
  /**
   * Activate a theme by name.
   * @param {ThemeV1alpha1ConsoleApiActivateThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  activateTheme(a, s) {
    return N(this.configuration).activateTheme(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch the activated theme.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  fetchActivatedTheme(a) {
    return N(this.configuration).fetchActivatedTheme(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Fetch configMap of theme by configured configMapName. It is deprecated.
   * @param {ThemeV1alpha1ConsoleApiFetchThemeConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @deprecated
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  fetchThemeConfig(a, s) {
    return N(this.configuration).fetchThemeConfig(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch converted json config of theme by configured configMapName.
   * @param {ThemeV1alpha1ConsoleApiFetchThemeJsonConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  fetchThemeJsonConfig(a, s) {
    return N(this.configuration).fetchThemeJsonConfig(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Fetch setting of theme.
   * @param {ThemeV1alpha1ConsoleApiFetchThemeSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  fetchThemeSetting(a, s) {
    return N(this.configuration).fetchThemeSetting(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Install a theme by uploading a zip file.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  installTheme(a) {
    return N(this.configuration).installTheme(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Install a theme from uri.
   * @param {ThemeV1alpha1ConsoleApiInstallThemeFromUriRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  installThemeFromUri(a, s) {
    return N(this.configuration).installThemeFromUri(a.installFromUriRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Invalidate theme template cache.
   * @param {ThemeV1alpha1ConsoleApiInvalidateCacheRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  invalidateCache(a, s) {
    return N(this.configuration).invalidateCache(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List themes.
   * @param {ThemeV1alpha1ConsoleApiListThemesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  listThemes(a = {}, s) {
    return N(this.configuration).listThemes(a.page, a.size, a.labelSelector, a.fieldSelector, a.uninstalled, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Reload theme setting.
   * @param {ThemeV1alpha1ConsoleApiReloadRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  reload(a, s) {
    return N(this.configuration).reload(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Reset the configMap of theme setting.
   * @param {ThemeV1alpha1ConsoleApiResetThemeConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  resetThemeConfig(a, s) {
    return N(this.configuration).resetThemeConfig(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update the configMap of theme setting. It is deprecated.
   * @param {ThemeV1alpha1ConsoleApiUpdateThemeConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @deprecated
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  updateThemeConfig(a, s) {
    return N(this.configuration).updateThemeConfig(a.name, a.configMap, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update the configMap of theme setting.
   * @param {ThemeV1alpha1ConsoleApiUpdateThemeJsonConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  updateThemeJsonConfig(a, s) {
    return N(this.configuration).updateThemeJsonConfig(a.name, a.body, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Upgrade theme
   * @param {ThemeV1alpha1ConsoleApiUpgradeThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  upgradeTheme(a, s) {
    return N(this.configuration).upgradeTheme(a.name, a.file, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Upgrade a theme from uri.
   * @param {ThemeV1alpha1ConsoleApiUpgradeThemeFromUriRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeV1alpha1ConsoleApi
   */
  upgradeThemeFromUri(a, s) {
    return N(this.configuration).upgradeThemeFromUri(a.name, a.upgradeFromUriRequest, s).then((n) => n(this.axios, this.basePath));
  }
}
const Gl = function(e) {
  return {
    /**
     * Create Thumbnail
     * @param {Thumbnail} [thumbnail] Fresh thumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createThumbnail: async (a, s = {}) => {
      const n = "/apis/storage.halo.run/v1alpha1/thumbnails", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete Thumbnail
     * @param {string} name Name of thumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteThumbnail: async (a, s = {}) => {
      R("deleteThumbnail", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/thumbnails/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get Thumbnail
     * @param {string} name Name of thumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getThumbnail: async (a, s = {}) => {
      R("getThumbnail", "name", a);
      const n = "/apis/storage.halo.run/v1alpha1/thumbnails/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List Thumbnail
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listThumbnail: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/storage.halo.run/v1alpha1/thumbnails", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch Thumbnail
     * @param {string} name Name of thumbnail
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchThumbnail: async (a, s, n = {}) => {
      R("patchThumbnail", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/thumbnails/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update Thumbnail
     * @param {string} name Name of thumbnail
     * @param {Thumbnail} [thumbnail] Updated thumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateThumbnail: async (a, s, n = {}) => {
      R("updateThumbnail", "name", a);
      const l = "/apis/storage.halo.run/v1alpha1/thumbnails/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Ge = function(e) {
  const a = Gl(e);
  return {
    /**
     * Create Thumbnail
     * @param {Thumbnail} [thumbnail] Fresh thumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createThumbnail(s, n) {
      var o, c;
      const l = await a.createThumbnail(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThumbnailV1alpha1Api.createThumbnail"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete Thumbnail
     * @param {string} name Name of thumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteThumbnail(s, n) {
      var o, c;
      const l = await a.deleteThumbnail(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThumbnailV1alpha1Api.deleteThumbnail"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get Thumbnail
     * @param {string} name Name of thumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getThumbnail(s, n) {
      var o, c;
      const l = await a.getThumbnail(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["ThumbnailV1alpha1Api.getThumbnail"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List Thumbnail
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listThumbnail(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listThumbnail(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["ThumbnailV1alpha1Api.listThumbnail"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch Thumbnail
     * @param {string} name Name of thumbnail
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchThumbnail(s, n, l) {
      var c, p;
      const r = await a.patchThumbnail(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThumbnailV1alpha1Api.patchThumbnail"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update Thumbnail
     * @param {string} name Name of thumbnail
     * @param {Thumbnail} [thumbnail] Updated thumbnail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateThumbnail(s, n, l) {
      var c, p;
      const r = await a.updateThumbnail(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThumbnailV1alpha1Api.updateThumbnail"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, nh = function(e, a, s) {
  const n = Ge(e);
  return {
    /**
     * Create Thumbnail
     * @param {ThumbnailV1alpha1ApiCreateThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createThumbnail(l = {}, r) {
      return n.createThumbnail(l.thumbnail, r).then((t) => t(s, a));
    },
    /**
     * Delete Thumbnail
     * @param {ThumbnailV1alpha1ApiDeleteThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteThumbnail(l, r) {
      return n.deleteThumbnail(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get Thumbnail
     * @param {ThumbnailV1alpha1ApiGetThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getThumbnail(l, r) {
      return n.getThumbnail(l.name, r).then((t) => t(s, a));
    },
    /**
     * List Thumbnail
     * @param {ThumbnailV1alpha1ApiListThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listThumbnail(l = {}, r) {
      return n.listThumbnail(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch Thumbnail
     * @param {ThumbnailV1alpha1ApiPatchThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchThumbnail(l, r) {
      return n.patchThumbnail(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update Thumbnail
     * @param {ThumbnailV1alpha1ApiUpdateThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateThumbnail(l, r) {
      return n.updateThumbnail(l.name, l.thumbnail, r).then((t) => t(s, a));
    }
  };
};
class oh extends U {
  /**
   * Create Thumbnail
   * @param {ThumbnailV1alpha1ApiCreateThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThumbnailV1alpha1Api
   */
  createThumbnail(a = {}, s) {
    return Ge(this.configuration).createThumbnail(a.thumbnail, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete Thumbnail
   * @param {ThumbnailV1alpha1ApiDeleteThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThumbnailV1alpha1Api
   */
  deleteThumbnail(a, s) {
    return Ge(this.configuration).deleteThumbnail(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get Thumbnail
   * @param {ThumbnailV1alpha1ApiGetThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThumbnailV1alpha1Api
   */
  getThumbnail(a, s) {
    return Ge(this.configuration).getThumbnail(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List Thumbnail
   * @param {ThumbnailV1alpha1ApiListThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThumbnailV1alpha1Api
   */
  listThumbnail(a = {}, s) {
    return Ge(this.configuration).listThumbnail(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch Thumbnail
   * @param {ThumbnailV1alpha1ApiPatchThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThumbnailV1alpha1Api
   */
  patchThumbnail(a, s) {
    return Ge(this.configuration).patchThumbnail(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update Thumbnail
   * @param {ThumbnailV1alpha1ApiUpdateThumbnailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThumbnailV1alpha1Api
   */
  updateThumbnail(a, s) {
    return Ge(this.configuration).updateThumbnail(a.name, a.thumbnail, s).then((n) => n(this.axios, this.basePath));
  }
}
const zl = function(e) {
  return {
    /**
     * Get thumbnail by URI
     * @param {string} uri The URI of the image
     * @param {string} size The size of the thumbnail,available values are s,m,l,xl
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getThumbnailByUri: async (a, s, n = {}) => {
      R("getThumbnailByUri", "uri", a), R("getThumbnailByUri", "size", s);
      const l = "/apis/api.storage.halo.run/v1alpha1/thumbnails/-/via-uri", r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "GET", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), a !== void 0 && (p.uri = a), s !== void 0 && (p.size = s), v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, {
        url: S(r),
        options: o
      };
    }
  };
}, Zt = function(e) {
  const a = zl(e);
  return {
    /**
     * Get thumbnail by URI
     * @param {string} uri The URI of the image
     * @param {string} size The size of the thumbnail,available values are s,m,l,xl
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getThumbnailByUri(s, n, l) {
      var c, p;
      const r = await a.getThumbnailByUri(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["ThumbnailV1alpha1PublicApi.getThumbnailByUri"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, ch = function(e, a, s) {
  const n = Zt(e);
  return {
    /**
     * Get thumbnail by URI
     * @param {ThumbnailV1alpha1PublicApiGetThumbnailByUriRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getThumbnailByUri(l, r) {
      return n.getThumbnailByUri(l.uri, l.size, r).then((t) => t(s, a));
    }
  };
};
class ph extends U {
  /**
   * Get thumbnail by URI
   * @param {ThumbnailV1alpha1PublicApiGetThumbnailByUriRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThumbnailV1alpha1PublicApi
   */
  getThumbnailByUri(a, s) {
    return Zt(this.configuration).getThumbnailByUri(a.uri, a.size, s).then((n) => n(this.axios, this.basePath));
  }
}
const _l = function(e) {
  return {
    /**
     * Configure a TOTP
     * @param {TotpRequest} [totpRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    configurerTotp: async (a, s = {}) => {
      const n = "/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/totp", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * 
     * @param {PasswordRequest} [passwordRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTotp: async (a, s = {}) => {
      const n = "/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/totp/-", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Disable Two-factor authentication
     * @param {PasswordRequest} [passwordRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    disableTwoFactor: async (a, s = {}) => {
      const n = "/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/settings/disabled", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Enable Two-factor authentication
     * @param {PasswordRequest} [passwordRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    enableTwoFactor: async (a, s = {}) => {
      const n = "/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/settings/enabled", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Get TOTP auth link, including secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotpAuthLink: async (a = {}) => {
      const s = "/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/totp/auth-link", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Get Two-factor authentication settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTwoFactorAuthenticationSettings: async (a = {}) => {
      const s = "/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/settings", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    }
  };
}, ze = function(e) {
  const a = _l(e);
  return {
    /**
     * Configure a TOTP
     * @param {TotpRequest} [totpRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async configurerTotp(s, n) {
      var o, c;
      const l = await a.configurerTotp(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["TwoFactorAuthV1alpha1UcApi.configurerTotp"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * 
     * @param {PasswordRequest} [passwordRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteTotp(s, n) {
      var o, c;
      const l = await a.deleteTotp(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["TwoFactorAuthV1alpha1UcApi.deleteTotp"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Disable Two-factor authentication
     * @param {PasswordRequest} [passwordRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async disableTwoFactor(s, n) {
      var o, c;
      const l = await a.disableTwoFactor(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["TwoFactorAuthV1alpha1UcApi.disableTwoFactor"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Enable Two-factor authentication
     * @param {PasswordRequest} [passwordRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async enableTwoFactor(s, n) {
      var o, c;
      const l = await a.enableTwoFactor(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["TwoFactorAuthV1alpha1UcApi.enableTwoFactor"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get TOTP auth link, including secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTotpAuthLink(s) {
      var t, o;
      const n = await a.getTotpAuthLink(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["TwoFactorAuthV1alpha1UcApi.getTotpAuthLink"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Get Two-factor authentication settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTwoFactorAuthenticationSettings(s) {
      var t, o;
      const n = await a.getTwoFactorAuthenticationSettings(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["TwoFactorAuthV1alpha1UcApi.getTwoFactorAuthenticationSettings"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    }
  };
}, hh = function(e, a, s) {
  const n = ze(e);
  return {
    /**
     * Configure a TOTP
     * @param {TwoFactorAuthV1alpha1UcApiConfigurerTotpRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    configurerTotp(l = {}, r) {
      return n.configurerTotp(l.totpRequest, r).then((t) => t(s, a));
    },
    /**
     * 
     * @param {TwoFactorAuthV1alpha1UcApiDeleteTotpRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteTotp(l = {}, r) {
      return n.deleteTotp(l.passwordRequest, r).then((t) => t(s, a));
    },
    /**
     * Disable Two-factor authentication
     * @param {TwoFactorAuthV1alpha1UcApiDisableTwoFactorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    disableTwoFactor(l = {}, r) {
      return n.disableTwoFactor(l.passwordRequest, r).then((t) => t(s, a));
    },
    /**
     * Enable Two-factor authentication
     * @param {TwoFactorAuthV1alpha1UcApiEnableTwoFactorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    enableTwoFactor(l = {}, r) {
      return n.enableTwoFactor(l.passwordRequest, r).then((t) => t(s, a));
    },
    /**
     * Get TOTP auth link, including secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTotpAuthLink(l) {
      return n.getTotpAuthLink(l).then((r) => r(s, a));
    },
    /**
     * Get Two-factor authentication settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTwoFactorAuthenticationSettings(l) {
      return n.getTwoFactorAuthenticationSettings(l).then((r) => r(s, a));
    }
  };
};
class Jl extends U {
  /**
   * Configure a TOTP
   * @param {TwoFactorAuthV1alpha1UcApiConfigurerTotpRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TwoFactorAuthV1alpha1UcApi
   */
  configurerTotp(a = {}, s) {
    return ze(this.configuration).configurerTotp(a.totpRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * 
   * @param {TwoFactorAuthV1alpha1UcApiDeleteTotpRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TwoFactorAuthV1alpha1UcApi
   */
  deleteTotp(a = {}, s) {
    return ze(this.configuration).deleteTotp(a.passwordRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Disable Two-factor authentication
   * @param {TwoFactorAuthV1alpha1UcApiDisableTwoFactorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TwoFactorAuthV1alpha1UcApi
   */
  disableTwoFactor(a = {}, s) {
    return ze(this.configuration).disableTwoFactor(a.passwordRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Enable Two-factor authentication
   * @param {TwoFactorAuthV1alpha1UcApiEnableTwoFactorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TwoFactorAuthV1alpha1UcApi
   */
  enableTwoFactor(a = {}, s) {
    return ze(this.configuration).enableTwoFactor(a.passwordRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get TOTP auth link, including secret
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TwoFactorAuthV1alpha1UcApi
   */
  getTotpAuthLink(a) {
    return ze(this.configuration).getTotpAuthLink(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Get Two-factor authentication settings.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TwoFactorAuthV1alpha1UcApi
   */
  getTwoFactorAuthenticationSettings(a) {
    return ze(this.configuration).getTwoFactorAuthenticationSettings(a).then((s) => s(this.axios, this.basePath));
  }
}
const Wl = function(e) {
  return {
    /**
     * Create UserConnection
     * @param {UserConnection} [userConnection] Fresh userconnection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserConnection: async (a, s = {}) => {
      const n = "/apis/auth.halo.run/v1alpha1/userconnections", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete UserConnection
     * @param {string} name Name of userconnection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserConnection: async (a, s = {}) => {
      R("deleteUserConnection", "name", a);
      const n = "/apis/auth.halo.run/v1alpha1/userconnections/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get UserConnection
     * @param {string} name Name of userconnection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserConnection: async (a, s = {}) => {
      R("getUserConnection", "name", a);
      const n = "/apis/auth.halo.run/v1alpha1/userconnections/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List UserConnection
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUserConnection: async (a, s, n, l, r, t = {}) => {
      const o = "/apis/auth.halo.run/v1alpha1/userconnections", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch UserConnection
     * @param {string} name Name of userconnection
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchUserConnection: async (a, s, n = {}) => {
      R("patchUserConnection", "name", a);
      const l = "/apis/auth.halo.run/v1alpha1/userconnections/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update UserConnection
     * @param {string} name Name of userconnection
     * @param {UserConnection} [userConnection] Updated userconnection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserConnection: async (a, s, n = {}) => {
      R("updateUserConnection", "name", a);
      const l = "/apis/auth.halo.run/v1alpha1/userconnections/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, _e = function(e) {
  const a = Wl(e);
  return {
    /**
     * Create UserConnection
     * @param {UserConnection} [userConnection] Fresh userconnection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUserConnection(s, n) {
      var o, c;
      const l = await a.createUserConnection(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserConnectionV1alpha1Api.createUserConnection"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete UserConnection
     * @param {string} name Name of userconnection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteUserConnection(s, n) {
      var o, c;
      const l = await a.deleteUserConnection(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserConnectionV1alpha1Api.deleteUserConnection"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get UserConnection
     * @param {string} name Name of userconnection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserConnection(s, n) {
      var o, c;
      const l = await a.getUserConnection(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserConnectionV1alpha1Api.getUserConnection"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List UserConnection
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listUserConnection(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listUserConnection(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["UserConnectionV1alpha1Api.listUserConnection"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch UserConnection
     * @param {string} name Name of userconnection
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchUserConnection(s, n, l) {
      var c, p;
      const r = await a.patchUserConnection(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["UserConnectionV1alpha1Api.patchUserConnection"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update UserConnection
     * @param {string} name Name of userconnection
     * @param {UserConnection} [userConnection] Updated userconnection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUserConnection(s, n, l) {
      var c, p;
      const r = await a.updateUserConnection(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["UserConnectionV1alpha1Api.updateUserConnection"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, ih = function(e, a, s) {
  const n = _e(e);
  return {
    /**
     * Create UserConnection
     * @param {UserConnectionV1alpha1ApiCreateUserConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserConnection(l = {}, r) {
      return n.createUserConnection(l.userConnection, r).then((t) => t(s, a));
    },
    /**
     * Delete UserConnection
     * @param {UserConnectionV1alpha1ApiDeleteUserConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserConnection(l, r) {
      return n.deleteUserConnection(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get UserConnection
     * @param {UserConnectionV1alpha1ApiGetUserConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserConnection(l, r) {
      return n.getUserConnection(l.name, r).then((t) => t(s, a));
    },
    /**
     * List UserConnection
     * @param {UserConnectionV1alpha1ApiListUserConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUserConnection(l = {}, r) {
      return n.listUserConnection(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch UserConnection
     * @param {UserConnectionV1alpha1ApiPatchUserConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchUserConnection(l, r) {
      return n.patchUserConnection(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update UserConnection
     * @param {UserConnectionV1alpha1ApiUpdateUserConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserConnection(l, r) {
      return n.updateUserConnection(l.name, l.userConnection, r).then((t) => t(s, a));
    }
  };
};
class Kl extends U {
  /**
   * Create UserConnection
   * @param {UserConnectionV1alpha1ApiCreateUserConnectionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserConnectionV1alpha1Api
   */
  createUserConnection(a = {}, s) {
    return _e(this.configuration).createUserConnection(a.userConnection, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete UserConnection
   * @param {UserConnectionV1alpha1ApiDeleteUserConnectionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserConnectionV1alpha1Api
   */
  deleteUserConnection(a, s) {
    return _e(this.configuration).deleteUserConnection(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get UserConnection
   * @param {UserConnectionV1alpha1ApiGetUserConnectionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserConnectionV1alpha1Api
   */
  getUserConnection(a, s) {
    return _e(this.configuration).getUserConnection(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List UserConnection
   * @param {UserConnectionV1alpha1ApiListUserConnectionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserConnectionV1alpha1Api
   */
  listUserConnection(a = {}, s) {
    return _e(this.configuration).listUserConnection(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch UserConnection
   * @param {UserConnectionV1alpha1ApiPatchUserConnectionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserConnectionV1alpha1Api
   */
  patchUserConnection(a, s) {
    return _e(this.configuration).patchUserConnection(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update UserConnection
   * @param {UserConnectionV1alpha1ApiUpdateUserConnectionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserConnectionV1alpha1Api
   */
  updateUserConnection(a, s) {
    return _e(this.configuration).updateUserConnection(a.name, a.userConnection, s).then((n) => n(this.axios, this.basePath));
  }
}
const Xl = function(e) {
  return {
    /**
     * Disconnect my connection from a third-party platform.
     * @param {string} registerId The registration ID of the third-party platform.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    disconnectMyConnection: async (a, s = {}) => {
      R("disconnectMyConnection", "registerId", a);
      const n = "/apis/uc.api.auth.halo.run/v1alpha1/user-connections/{registerId}/disconnect".replace("{registerId}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    }
  };
}, qt = function(e) {
  const a = Xl(e);
  return {
    /**
     * Disconnect my connection from a third-party platform.
     * @param {string} registerId The registration ID of the third-party platform.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async disconnectMyConnection(s, n) {
      var o, c;
      const l = await a.disconnectMyConnection(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserConnectionV1alpha1UcApi.disconnectMyConnection"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    }
  };
}, dh = function(e, a, s) {
  const n = qt(e);
  return {
    /**
     * Disconnect my connection from a third-party platform.
     * @param {UserConnectionV1alpha1UcApiDisconnectMyConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    disconnectMyConnection(l, r) {
      return n.disconnectMyConnection(l.registerId, r).then((t) => t(s, a));
    }
  };
};
class mh extends U {
  /**
   * Disconnect my connection from a third-party platform.
   * @param {UserConnectionV1alpha1UcApiDisconnectMyConnectionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserConnectionV1alpha1UcApi
   */
  disconnectMyConnection(a, s) {
    return qt(this.configuration).disconnectMyConnection(a.registerId, s).then((n) => n(this.axios, this.basePath));
  }
}
const Yl = function(e) {
  return {
    /**
     * Create User
     * @param {User} [user] Fresh user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser: async (a, s = {}) => {
      const n = "/api/v1alpha1/users", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Delete User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUser: async (a, s = {}) => {
      R("deleteUser", "name", a);
      const n = "/api/v1alpha1/users/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUser: async (a, s = {}) => {
      R("getUser", "name", a);
      const n = "/api/v1alpha1/users/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * List User
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUser: async (a, s, n, l, r, t = {}) => {
      const o = "/api/v1alpha1/users", c = new URL(o, O);
      let p;
      e && (p = e.baseOptions);
      const h = { method: "GET", ...p, ...t }, i = {}, d = {};
      P(h, e), await u(i, e), a !== void 0 && (d.page = a), s !== void 0 && (d.size = s), n && (d.labelSelector = n), l && (d.fieldSelector = l), r && (d.sort = r), v(c, d);
      let b = p && p.headers ? p.headers : {};
      return h.headers = { ...i, ...b, ...t.headers }, {
        url: S(c),
        options: h
      };
    },
    /**
     * Patch User
     * @param {string} name Name of user
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchUser: async (a, s, n = {}) => {
      R("patchUser", "name", a);
      const l = "/api/v1alpha1/users/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PATCH", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json-patch+json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Update User
     * @param {string} name Name of user
     * @param {User} [user] Updated user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser: async (a, s, n = {}) => {
      R("updateUser", "name", a);
      const l = "/api/v1alpha1/users/{name}".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    }
  };
}, Je = function(e) {
  const a = Yl(e);
  return {
    /**
     * Create User
     * @param {User} [user] Fresh user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUser(s, n) {
      var o, c;
      const l = await a.createUser(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1Api.createUser"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Delete User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteUser(s, n) {
      var o, c;
      const l = await a.deleteUser(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1Api.deleteUser"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUser(s, n) {
      var o, c;
      const l = await a.getUser(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1Api.getUser"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * List User
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listUser(s, n, l, r, t, o) {
      var i, d;
      const c = await a.listUser(s, n, l, r, t, o), p = (e == null ? void 0 : e.serverIndex) ?? 0, h = (d = (i = y["UserV1alpha1Api.listUser"]) == null ? void 0 : i[p]) == null ? void 0 : d.url;
      return (b, x) => A(c, m, V, e)(b, h || x);
    },
    /**
     * Patch User
     * @param {string} name Name of user
     * @param {Array<JsonPatchInner>} [jsonPatchInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchUser(s, n, l) {
      var c, p;
      const r = await a.patchUser(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["UserV1alpha1Api.patchUser"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Update User
     * @param {string} name Name of user
     * @param {User} [user] Updated user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUser(s, n, l) {
      var c, p;
      const r = await a.updateUser(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["UserV1alpha1Api.updateUser"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    }
  };
}, Vh = function(e, a, s) {
  const n = Je(e);
  return {
    /**
     * Create User
     * @param {UserV1alpha1ApiCreateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser(l = {}, r) {
      return n.createUser(l.user, r).then((t) => t(s, a));
    },
    /**
     * Delete User
     * @param {UserV1alpha1ApiDeleteUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUser(l, r) {
      return n.deleteUser(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get User
     * @param {UserV1alpha1ApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUser(l, r) {
      return n.getUser(l.name, r).then((t) => t(s, a));
    },
    /**
     * List User
     * @param {UserV1alpha1ApiListUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUser(l = {}, r) {
      return n.listUser(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, r).then((t) => t(s, a));
    },
    /**
     * Patch User
     * @param {UserV1alpha1ApiPatchUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchUser(l, r) {
      return n.patchUser(l.name, l.jsonPatchInner, r).then((t) => t(s, a));
    },
    /**
     * Update User
     * @param {UserV1alpha1ApiUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser(l, r) {
      return n.updateUser(l.name, l.user, r).then((t) => t(s, a));
    }
  };
};
class Zl extends U {
  /**
   * Create User
   * @param {UserV1alpha1ApiCreateUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1Api
   */
  createUser(a = {}, s) {
    return Je(this.configuration).createUser(a.user, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Delete User
   * @param {UserV1alpha1ApiDeleteUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1Api
   */
  deleteUser(a, s) {
    return Je(this.configuration).deleteUser(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get User
   * @param {UserV1alpha1ApiGetUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1Api
   */
  getUser(a, s) {
    return Je(this.configuration).getUser(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List User
   * @param {UserV1alpha1ApiListUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1Api
   */
  listUser(a = {}, s) {
    return Je(this.configuration).listUser(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Patch User
   * @param {UserV1alpha1ApiPatchUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1Api
   */
  patchUser(a, s) {
    return Je(this.configuration).patchUser(a.name, a.jsonPatchInner, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update User
   * @param {UserV1alpha1ApiUpdateUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1Api
   */
  updateUser(a, s) {
    return Je(this.configuration).updateUser(a.name, a.user, s).then((n) => n(this.axios, this.basePath));
  }
}
const ql = function(e) {
  return {
    /**
     * Change anyone password of user for admin.
     * @param {string} name Name of user. If the name is equal to \&#39;-\&#39;, it will change the password of current user.
     * @param {ChangePasswordRequest} changePasswordRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changeAnyonePassword: async (a, s, n = {}) => {
      R("changeAnyonePassword", "name", a), R("changeAnyonePassword", "changePasswordRequest", s);
      const l = "/apis/api.console.halo.run/v1alpha1/users/{name}/password".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "PUT", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * Change own password of user.
     * @param {ChangeOwnPasswordRequest} changeOwnPasswordRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changeOwnPassword: async (a, s = {}) => {
      R("changeOwnPassword", "changeOwnPasswordRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/users/-/password", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Creates a new user.
     * @param {CreateUserRequest} createUserRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser: async (a, s = {}) => {
      R("createUser", "createUserRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/users", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * delete user avatar
     * @param {string} name User name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserAvatar: async (a, s = {}) => {
      R("deleteUserAvatar", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/users/{name}/avatar".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "DELETE", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get current user detail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentUserDetail: async (a = {}) => {
      const s = "/apis/api.console.halo.run/v1alpha1/users/-", n = new URL(s, O);
      let l;
      e && (l = e.baseOptions);
      const r = { method: "GET", ...l, ...a }, t = {}, o = {};
      P(r, e), await u(t, e), v(n, o);
      let c = l && l.headers ? l.headers : {};
      return r.headers = { ...t, ...c, ...a.headers }, {
        url: S(n),
        options: r
      };
    },
    /**
     * Get permissions of user
     * @param {string} name User name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPermissions: async (a, s = {}) => {
      R("getPermissions", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/users/{name}/permissions".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Get user detail by name
     * @param {string} name User name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserDetail: async (a, s = {}) => {
      R("getUserDetail", "name", a);
      const n = "/apis/api.console.halo.run/v1alpha1/users/{name}".replace("{name}", encodeURIComponent(String(a))), l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "GET", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, {
        url: S(l),
        options: t
      };
    },
    /**
     * Grant permissions to user
     * @param {string} name User name
     * @param {GrantRequest} grantRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    grantPermission: async (a, s, n = {}) => {
      R("grantPermission", "name", a), R("grantPermission", "grantRequest", s);
      const l = "/apis/api.console.halo.run/v1alpha1/users/{name}/permissions".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {};
      P(o, e), await u(c, e), c["Content-Type"] = "application/json", v(r, p);
      let h = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...h, ...n.headers }, o.data = C(s, o, e), {
        url: S(r),
        options: o
      };
    },
    /**
     * List users
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [keyword] Keyword to search
     * @param {string} [role] Role name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUsers: async (a, s, n, l, r, t, o, c = {}) => {
      const p = "/apis/api.console.halo.run/v1alpha1/users", h = new URL(p, O);
      let i;
      e && (i = e.baseOptions);
      const d = { method: "GET", ...i, ...c }, b = {}, x = {};
      P(d, e), await u(b, e), a !== void 0 && (x.page = a), s !== void 0 && (x.size = s), n && (x.labelSelector = n), l && (x.fieldSelector = l), r && (x.sort = r), t !== void 0 && (x.keyword = t), o !== void 0 && (x.role = o), v(h, x);
      let w = i && i.headers ? i.headers : {};
      return d.headers = { ...b, ...w, ...c.headers }, {
        url: S(h),
        options: d
      };
    },
    /**
     * Send email verification code for user
     * @param {EmailVerifyRequest} emailVerifyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendEmailVerificationCode: async (a, s = {}) => {
      R("sendEmailVerificationCode", "emailVerifyRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/users/-/send-email-verification-code", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * Update current user profile, but password.
     * @param {User} user 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCurrentUser: async (a, s = {}) => {
      R("updateCurrentUser", "user", a);
      const n = "/apis/api.console.halo.run/v1alpha1/users/-", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "PUT", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    },
    /**
     * upload user avatar
     * @param {string} name User name
     * @param {File} file 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadUserAvatar: async (a, s, n = {}) => {
      R("uploadUserAvatar", "name", a), R("uploadUserAvatar", "file", s);
      const l = "/apis/api.console.halo.run/v1alpha1/users/{name}/avatar".replace("{name}", encodeURIComponent(String(a))), r = new URL(l, O);
      let t;
      e && (t = e.baseOptions);
      const o = { method: "POST", ...t, ...n }, c = {}, p = {}, h = new (e && e.formDataCtor || FormData)();
      P(o, e), await u(c, e), s !== void 0 && h.append("file", s), c["Content-Type"] = "multipart/form-data", v(r, p);
      let i = t && t.headers ? t.headers : {};
      return o.headers = { ...c, ...i, ...n.headers }, o.data = h, {
        url: S(r),
        options: o
      };
    },
    /**
     * Verify email for user by code.
     * @param {VerifyCodeRequest} verifyCodeRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyEmail: async (a, s = {}) => {
      R("verifyEmail", "verifyCodeRequest", a);
      const n = "/apis/api.console.halo.run/v1alpha1/users/-/verify-email", l = new URL(n, O);
      let r;
      e && (r = e.baseOptions);
      const t = { method: "POST", ...r, ...s }, o = {}, c = {};
      P(t, e), await u(o, e), o["Content-Type"] = "application/json", v(l, c);
      let p = r && r.headers ? r.headers : {};
      return t.headers = { ...o, ...p, ...s.headers }, t.data = C(a, t, e), {
        url: S(l),
        options: t
      };
    }
  };
}, Q = function(e) {
  const a = ql(e);
  return {
    /**
     * Change anyone password of user for admin.
     * @param {string} name Name of user. If the name is equal to \&#39;-\&#39;, it will change the password of current user.
     * @param {ChangePasswordRequest} changePasswordRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async changeAnyonePassword(s, n, l) {
      var c, p;
      const r = await a.changeAnyonePassword(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["UserV1alpha1ConsoleApi.changeAnyonePassword"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Change own password of user.
     * @param {ChangeOwnPasswordRequest} changeOwnPasswordRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async changeOwnPassword(s, n) {
      var o, c;
      const l = await a.changeOwnPassword(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1ConsoleApi.changeOwnPassword"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Creates a new user.
     * @param {CreateUserRequest} createUserRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUser(s, n) {
      var o, c;
      const l = await a.createUser(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1ConsoleApi.createUser"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * delete user avatar
     * @param {string} name User name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteUserAvatar(s, n) {
      var o, c;
      const l = await a.deleteUserAvatar(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1ConsoleApi.deleteUserAvatar"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get current user detail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCurrentUserDetail(s) {
      var t, o;
      const n = await a.getCurrentUserDetail(s), l = (e == null ? void 0 : e.serverIndex) ?? 0, r = (o = (t = y["UserV1alpha1ConsoleApi.getCurrentUserDetail"]) == null ? void 0 : t[l]) == null ? void 0 : o.url;
      return (c, p) => A(n, m, V, e)(c, r || p);
    },
    /**
     * Get permissions of user
     * @param {string} name User name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPermissions(s, n) {
      var o, c;
      const l = await a.getPermissions(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1ConsoleApi.getPermissions"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Get user detail by name
     * @param {string} name User name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserDetail(s, n) {
      var o, c;
      const l = await a.getUserDetail(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1ConsoleApi.getUserDetail"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Grant permissions to user
     * @param {string} name User name
     * @param {GrantRequest} grantRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async grantPermission(s, n, l) {
      var c, p;
      const r = await a.grantPermission(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["UserV1alpha1ConsoleApi.grantPermission"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * List users
     * @param {number} [page] Page number. Default is 0.
     * @param {number} [size] Size number. Default is 0.
     * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
     * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {string} [keyword] Keyword to search
     * @param {string} [role] Role name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listUsers(s, n, l, r, t, o, c, p) {
      var b, x;
      const h = await a.listUsers(s, n, l, r, t, o, c, p), i = (e == null ? void 0 : e.serverIndex) ?? 0, d = (x = (b = y["UserV1alpha1ConsoleApi.listUsers"]) == null ? void 0 : b[i]) == null ? void 0 : x.url;
      return (w, T) => A(h, m, V, e)(w, d || T);
    },
    /**
     * Send email verification code for user
     * @param {EmailVerifyRequest} emailVerifyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async sendEmailVerificationCode(s, n) {
      var o, c;
      const l = await a.sendEmailVerificationCode(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1ConsoleApi.sendEmailVerificationCode"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * Update current user profile, but password.
     * @param {User} user 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateCurrentUser(s, n) {
      var o, c;
      const l = await a.updateCurrentUser(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1ConsoleApi.updateCurrentUser"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    },
    /**
     * upload user avatar
     * @param {string} name User name
     * @param {File} file 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async uploadUserAvatar(s, n, l) {
      var c, p;
      const r = await a.uploadUserAvatar(s, n, l), t = (e == null ? void 0 : e.serverIndex) ?? 0, o = (p = (c = y["UserV1alpha1ConsoleApi.uploadUserAvatar"]) == null ? void 0 : c[t]) == null ? void 0 : p.url;
      return (h, i) => A(r, m, V, e)(h, o || i);
    },
    /**
     * Verify email for user by code.
     * @param {VerifyCodeRequest} verifyCodeRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verifyEmail(s, n) {
      var o, c;
      const l = await a.verifyEmail(s, n), r = (e == null ? void 0 : e.serverIndex) ?? 0, t = (c = (o = y["UserV1alpha1ConsoleApi.verifyEmail"]) == null ? void 0 : o[r]) == null ? void 0 : c.url;
      return (p, h) => A(l, m, V, e)(p, t || h);
    }
  };
}, yh = function(e, a, s) {
  const n = Q(e);
  return {
    /**
     * Change anyone password of user for admin.
     * @param {UserV1alpha1ConsoleApiChangeAnyonePasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changeAnyonePassword(l, r) {
      return n.changeAnyonePassword(l.name, l.changePasswordRequest, r).then((t) => t(s, a));
    },
    /**
     * Change own password of user.
     * @param {UserV1alpha1ConsoleApiChangeOwnPasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changeOwnPassword(l, r) {
      return n.changeOwnPassword(l.changeOwnPasswordRequest, r).then((t) => t(s, a));
    },
    /**
     * Creates a new user.
     * @param {UserV1alpha1ConsoleApiCreateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser(l, r) {
      return n.createUser(l.createUserRequest, r).then((t) => t(s, a));
    },
    /**
     * delete user avatar
     * @param {UserV1alpha1ConsoleApiDeleteUserAvatarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserAvatar(l, r) {
      return n.deleteUserAvatar(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get current user detail
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentUserDetail(l) {
      return n.getCurrentUserDetail(l).then((r) => r(s, a));
    },
    /**
     * Get permissions of user
     * @param {UserV1alpha1ConsoleApiGetPermissionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPermissions(l, r) {
      return n.getPermissions(l.name, r).then((t) => t(s, a));
    },
    /**
     * Get user detail by name
     * @param {UserV1alpha1ConsoleApiGetUserDetailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserDetail(l, r) {
      return n.getUserDetail(l.name, r).then((t) => t(s, a));
    },
    /**
     * Grant permissions to user
     * @param {UserV1alpha1ConsoleApiGrantPermissionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    grantPermission(l, r) {
      return n.grantPermission(l.name, l.grantRequest, r).then((t) => t(s, a));
    },
    /**
     * List users
     * @param {UserV1alpha1ConsoleApiListUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUsers(l = {}, r) {
      return n.listUsers(l.page, l.size, l.labelSelector, l.fieldSelector, l.sort, l.keyword, l.role, r).then((t) => t(s, a));
    },
    /**
     * Send email verification code for user
     * @param {UserV1alpha1ConsoleApiSendEmailVerificationCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendEmailVerificationCode(l, r) {
      return n.sendEmailVerificationCode(l.emailVerifyRequest, r).then((t) => t(s, a));
    },
    /**
     * Update current user profile, but password.
     * @param {UserV1alpha1ConsoleApiUpdateCurrentUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCurrentUser(l, r) {
      return n.updateCurrentUser(l.user, r).then((t) => t(s, a));
    },
    /**
     * upload user avatar
     * @param {UserV1alpha1ConsoleApiUploadUserAvatarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadUserAvatar(l, r) {
      return n.uploadUserAvatar(l.name, l.file, r).then((t) => t(s, a));
    },
    /**
     * Verify email for user by code.
     * @param {UserV1alpha1ConsoleApiVerifyEmailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyEmail(l, r) {
      return n.verifyEmail(l.verifyCodeRequest, r).then((t) => t(s, a));
    }
  };
};
class gl extends U {
  /**
   * Change anyone password of user for admin.
   * @param {UserV1alpha1ConsoleApiChangeAnyonePasswordRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  changeAnyonePassword(a, s) {
    return Q(this.configuration).changeAnyonePassword(a.name, a.changePasswordRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Change own password of user.
   * @param {UserV1alpha1ConsoleApiChangeOwnPasswordRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  changeOwnPassword(a, s) {
    return Q(this.configuration).changeOwnPassword(a.changeOwnPasswordRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Creates a new user.
   * @param {UserV1alpha1ConsoleApiCreateUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  createUser(a, s) {
    return Q(this.configuration).createUser(a.createUserRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * delete user avatar
   * @param {UserV1alpha1ConsoleApiDeleteUserAvatarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  deleteUserAvatar(a, s) {
    return Q(this.configuration).deleteUserAvatar(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get current user detail
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  getCurrentUserDetail(a) {
    return Q(this.configuration).getCurrentUserDetail(a).then((s) => s(this.axios, this.basePath));
  }
  /**
   * Get permissions of user
   * @param {UserV1alpha1ConsoleApiGetPermissionsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  getPermissions(a, s) {
    return Q(this.configuration).getPermissions(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Get user detail by name
   * @param {UserV1alpha1ConsoleApiGetUserDetailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  getUserDetail(a, s) {
    return Q(this.configuration).getUserDetail(a.name, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Grant permissions to user
   * @param {UserV1alpha1ConsoleApiGrantPermissionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  grantPermission(a, s) {
    return Q(this.configuration).grantPermission(a.name, a.grantRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * List users
   * @param {UserV1alpha1ConsoleApiListUsersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  listUsers(a = {}, s) {
    return Q(this.configuration).listUsers(a.page, a.size, a.labelSelector, a.fieldSelector, a.sort, a.keyword, a.role, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Send email verification code for user
   * @param {UserV1alpha1ConsoleApiSendEmailVerificationCodeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  sendEmailVerificationCode(a, s) {
    return Q(this.configuration).sendEmailVerificationCode(a.emailVerifyRequest, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Update current user profile, but password.
   * @param {UserV1alpha1ConsoleApiUpdateCurrentUserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  updateCurrentUser(a, s) {
    return Q(this.configuration).updateCurrentUser(a.user, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * upload user avatar
   * @param {UserV1alpha1ConsoleApiUploadUserAvatarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  uploadUserAvatar(a, s) {
    return Q(this.configuration).uploadUserAvatar(a.name, a.file, s).then((n) => n(this.axios, this.basePath));
  }
  /**
   * Verify email for user by code.
   * @param {UserV1alpha1ConsoleApiVerifyEmailRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserV1alpha1ConsoleApi
   */
  verifyEmail(a, s) {
    return Q(this.configuration).verifyEmail(a.verifyCodeRequest, s).then((n) => n(this.axios, this.basePath));
  }
}
class Oh {
  constructor(a = {}) {
    this.apiKey = a.apiKey, this.username = a.username, this.password = a.password, this.accessToken = a.accessToken, this.basePath = a.basePath, this.serverIndex = a.serverIndex, this.baseOptions = a.baseOptions, this.formDataCtor = a.formDataCtor;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(a) {
    const s = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
    return a !== null && (s.test(a) || a.toLowerCase() === "application/json-patch+json");
  }
}
const Ph = {
  Add: "add"
}, uh = {
  Form: "FORM",
  Oauth2: "OAUTH2"
}, vh = {
  Pending: "PENDING",
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED"
}, Sh = {
  True: "TRUE",
  False: "FALSE",
  Unknown: "UNKNOWN"
}, Ah = {
  Copy: "copy"
}, bh = {
  Singleton: "SINGLETON",
  MultiInstance: "MULTI_INSTANCE"
}, Rh = {
  Form: "FORM",
  Oauth2: "OAUTH2"
}, xh = {
  S: "S",
  M: "M",
  L: "L",
  Xl: "XL"
}, Ch = {
  Pending: "PENDING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED"
}, wh = {
  Blank: "_blank",
  Self: "_self",
  Parent: "_parent",
  Top: "_top"
}, Uh = {
  Move: "move"
}, Th = {
  Created: "CREATED",
  Disabled: "DISABLED",
  Resolved: "RESOLVED",
  Started: "STARTED",
  Stopped: "STOPPED",
  Failed: "FAILED",
  Unloaded: "UNLOADED"
}, Ih = {
  Pending: "PENDING",
  Starting: "STARTING",
  Created: "CREATED",
  Disabling: "DISABLING",
  Disabled: "DISABLED",
  Resolved: "RESOLVED",
  Started: "STARTED",
  Stopped: "STOPPED",
  Failed: "FAILED",
  Unknown: "UNKNOWN"
}, Bh = {
  Public: "PUBLIC",
  Internal: "INTERNAL",
  Private: "PRIVATE"
}, Fh = {
  Remove: "remove"
}, Eh = {
  Replace: "replace"
}, jh = {
  Public: "PUBLIC",
  Internal: "INTERNAL",
  Private: "PRIVATE"
}, Lh = {
  Test: "test"
}, Dh = {
  Ready: "READY",
  Failed: "FAILED",
  Unknown: "UNKNOWN"
}, Nh = {
  S: "S",
  M: "M",
  L: "L",
  Xl: "XL"
};
var fl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function en(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function an(e) {
  if (e.__esModule) return e;
  var a = e.default;
  if (typeof a == "function") {
    var s = function n() {
      return this instanceof n ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments);
    };
    s.prototype = a.prototype;
  } else s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var l = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(s, n, l.get ? l : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), s;
}
var tn = Error, rn = EvalError, sn = RangeError, ln = ReferenceError, gt = SyntaxError, Va = TypeError, nn = URIError, on = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var a = {}, s = Symbol("test"), n = Object(s);
  if (typeof s == "string" || Object.prototype.toString.call(s) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var l = 42;
  a[s] = l;
  for (s in a)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(a).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(a).length !== 0)
    return !1;
  var r = Object.getOwnPropertySymbols(a);
  if (r.length !== 1 || r[0] !== s || !Object.prototype.propertyIsEnumerable.call(a, s))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var t = Object.getOwnPropertyDescriptor(a, s);
    if (t.value !== l || t.enumerable !== !0)
      return !1;
  }
  return !0;
}, St = typeof Symbol < "u" && Symbol, cn = on, pn = function() {
  return typeof St != "function" || typeof Symbol != "function" || typeof St("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : cn();
}, Qa = {
  __proto__: null,
  foo: {}
}, hn = Object, dn = function() {
  return { __proto__: Qa }.foo === Qa.foo && !(Qa instanceof hn);
}, mn = "Function.prototype.bind called on incompatible ", Vn = Object.prototype.toString, yn = Math.max, On = "[object Function]", At = function(a, s) {
  for (var n = [], l = 0; l < a.length; l += 1)
    n[l] = a[l];
  for (var r = 0; r < s.length; r += 1)
    n[r + a.length] = s[r];
  return n;
}, Pn = function(a, s) {
  for (var n = [], l = s, r = 0; l < a.length; l += 1, r += 1)
    n[r] = a[l];
  return n;
}, un = function(e, a) {
  for (var s = "", n = 0; n < e.length; n += 1)
    s += e[n], n + 1 < e.length && (s += a);
  return s;
}, vn = function(a) {
  var s = this;
  if (typeof s != "function" || Vn.apply(s) !== On)
    throw new TypeError(mn + s);
  for (var n = Pn(arguments, 1), l, r = function() {
    if (this instanceof l) {
      var h = s.apply(
        this,
        At(n, arguments)
      );
      return Object(h) === h ? h : this;
    }
    return s.apply(
      a,
      At(n, arguments)
    );
  }, t = yn(0, s.length - n.length), o = [], c = 0; c < t; c++)
    o[c] = "$" + c;
  if (l = Function("binder", "return function (" + un(o, ",") + "){ return binder.apply(this,arguments); }")(r), s.prototype) {
    var p = function() {
    };
    p.prototype = s.prototype, l.prototype = new p(), p.prototype = null;
  }
  return l;
}, Sn = vn, dt = Function.prototype.bind || Sn, An = Function.prototype.call, bn = Object.prototype.hasOwnProperty, Rn = dt, xn = Rn.call(An, bn), I, Cn = tn, wn = rn, Un = sn, Tn = ln, ta = gt, aa = Va, In = nn, ft = Function, ka = function(e) {
  try {
    return ft('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Ke = Object.getOwnPropertyDescriptor;
if (Ke)
  try {
    Ke({}, "");
  } catch {
    Ke = null;
  }
var $a = function() {
  throw new aa();
}, Bn = Ke ? function() {
  try {
    return arguments.callee, $a;
  } catch {
    try {
      return Ke(arguments, "callee").get;
    } catch {
      return $a;
    }
  }
}() : $a, qe = pn(), Fn = dn(), L = Object.getPrototypeOf || (Fn ? function(e) {
  return e.__proto__;
} : null), ea = {}, En = typeof Uint8Array > "u" || !L ? I : L(Uint8Array), Xe = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? I : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? I : ArrayBuffer,
  "%ArrayIteratorPrototype%": qe && L ? L([][Symbol.iterator]()) : I,
  "%AsyncFromSyncIteratorPrototype%": I,
  "%AsyncFunction%": ea,
  "%AsyncGenerator%": ea,
  "%AsyncGeneratorFunction%": ea,
  "%AsyncIteratorPrototype%": ea,
  "%Atomics%": typeof Atomics > "u" ? I : Atomics,
  "%BigInt%": typeof BigInt > "u" ? I : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? I : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? I : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? I : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Cn,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": wn,
  "%Float32Array%": typeof Float32Array > "u" ? I : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? I : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? I : FinalizationRegistry,
  "%Function%": ft,
  "%GeneratorFunction%": ea,
  "%Int8Array%": typeof Int8Array > "u" ? I : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? I : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? I : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": qe && L ? L(L([][Symbol.iterator]())) : I,
  "%JSON%": typeof JSON == "object" ? JSON : I,
  "%Map%": typeof Map > "u" ? I : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !qe || !L ? I : L((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? I : Promise,
  "%Proxy%": typeof Proxy > "u" ? I : Proxy,
  "%RangeError%": Un,
  "%ReferenceError%": Tn,
  "%Reflect%": typeof Reflect > "u" ? I : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? I : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !qe || !L ? I : L((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? I : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": qe && L ? L(""[Symbol.iterator]()) : I,
  "%Symbol%": qe ? Symbol : I,
  "%SyntaxError%": ta,
  "%ThrowTypeError%": Bn,
  "%TypedArray%": En,
  "%TypeError%": aa,
  "%Uint8Array%": typeof Uint8Array > "u" ? I : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? I : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? I : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? I : Uint32Array,
  "%URIError%": In,
  "%WeakMap%": typeof WeakMap > "u" ? I : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? I : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? I : WeakSet
};
if (L)
  try {
    null.error;
  } catch (e) {
    var jn = L(L(e));
    Xe["%Error.prototype%"] = jn;
  }
var Ln = function e(a) {
  var s;
  if (a === "%AsyncFunction%")
    s = ka("async function () {}");
  else if (a === "%GeneratorFunction%")
    s = ka("function* () {}");
  else if (a === "%AsyncGeneratorFunction%")
    s = ka("async function* () {}");
  else if (a === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (s = n.prototype);
  } else if (a === "%AsyncIteratorPrototype%") {
    var l = e("%AsyncGenerator%");
    l && L && (s = L(l.prototype));
  }
  return Xe[a] = s, s;
}, bt = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ya = dt, ja = xn, Dn = ya.call(Function.call, Array.prototype.concat), Nn = ya.call(Function.apply, Array.prototype.splice), Rt = ya.call(Function.call, String.prototype.replace), La = ya.call(Function.call, String.prototype.slice), Hn = ya.call(Function.call, RegExp.prototype.exec), Mn = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Qn = /\\(\\)?/g, kn = function(a) {
  var s = La(a, 0, 1), n = La(a, -1);
  if (s === "%" && n !== "%")
    throw new ta("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && s !== "%")
    throw new ta("invalid intrinsic syntax, expected opening `%`");
  var l = [];
  return Rt(a, Mn, function(r, t, o, c) {
    l[l.length] = o ? Rt(c, Qn, "$1") : t || r;
  }), l;
}, $n = function(a, s) {
  var n = a, l;
  if (ja(bt, n) && (l = bt[n], n = "%" + l[0] + "%"), ja(Xe, n)) {
    var r = Xe[n];
    if (r === ea && (r = Ln(n)), typeof r > "u" && !s)
      throw new aa("intrinsic " + a + " exists, but is not available. Please file an issue!");
    return {
      alias: l,
      name: n,
      value: r
    };
  }
  throw new ta("intrinsic " + a + " does not exist!");
}, la = function(a, s) {
  if (typeof a != "string" || a.length === 0)
    throw new aa("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof s != "boolean")
    throw new aa('"allowMissing" argument must be a boolean');
  if (Hn(/^%?[^%]*%?$/, a) === null)
    throw new ta("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = kn(a), l = n.length > 0 ? n[0] : "", r = $n("%" + l + "%", s), t = r.name, o = r.value, c = !1, p = r.alias;
  p && (l = p[0], Nn(n, Dn([0, 1], p)));
  for (var h = 1, i = !0; h < n.length; h += 1) {
    var d = n[h], b = La(d, 0, 1), x = La(d, -1);
    if ((b === '"' || b === "'" || b === "`" || x === '"' || x === "'" || x === "`") && b !== x)
      throw new ta("property names with quotes must have matching quotes");
    if ((d === "constructor" || !i) && (c = !0), l += "." + d, t = "%" + l + "%", ja(Xe, t))
      o = Xe[t];
    else if (o != null) {
      if (!(d in o)) {
        if (!s)
          throw new aa("base intrinsic for " + a + " exists, but the property is not available.");
        return;
      }
      if (Ke && h + 1 >= n.length) {
        var w = Ke(o, d);
        i = !!w, i && "get" in w && !("originalValue" in w.get) ? o = w.get : o = o[d];
      } else
        i = ja(o, d), o = o[d];
      i && !c && (Xe[t] = o);
    }
  }
  return o;
}, er = { exports: {} }, Ga, xt;
function mt() {
  if (xt) return Ga;
  xt = 1;
  var e = la, a = e("%Object.defineProperty%", !0) || !1;
  if (a)
    try {
      a({}, "a", { value: 1 });
    } catch {
      a = !1;
    }
  return Ga = a, Ga;
}
var Gn = la, Fa = Gn("%Object.getOwnPropertyDescriptor%", !0);
if (Fa)
  try {
    Fa([], "length");
  } catch {
    Fa = null;
  }
var ar = Fa, Ct = mt(), zn = gt, ge = Va, wt = ar, _n = function(a, s, n) {
  if (!a || typeof a != "object" && typeof a != "function")
    throw new ge("`obj` must be an object or a function`");
  if (typeof s != "string" && typeof s != "symbol")
    throw new ge("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new ge("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new ge("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new ge("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new ge("`loose`, if provided, must be a boolean");
  var l = arguments.length > 3 ? arguments[3] : null, r = arguments.length > 4 ? arguments[4] : null, t = arguments.length > 5 ? arguments[5] : null, o = arguments.length > 6 ? arguments[6] : !1, c = !!wt && wt(a, s);
  if (Ct)
    Ct(a, s, {
      configurable: t === null && c ? c.configurable : !t,
      enumerable: l === null && c ? c.enumerable : !l,
      value: n,
      writable: r === null && c ? c.writable : !r
    });
  else if (o || !l && !r && !t)
    a[s] = n;
  else
    throw new zn("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, lt = mt(), tr = function() {
  return !!lt;
};
tr.hasArrayLengthDefineBug = function() {
  if (!lt)
    return null;
  try {
    return lt([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Jn = tr, Wn = la, Ut = _n, Kn = Jn(), Tt = ar, It = Va, Xn = Wn("%Math.floor%"), Yn = function(a, s) {
  if (typeof a != "function")
    throw new It("`fn` is not a function");
  if (typeof s != "number" || s < 0 || s > 4294967295 || Xn(s) !== s)
    throw new It("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], l = !0, r = !0;
  if ("length" in a && Tt) {
    var t = Tt(a, "length");
    t && !t.configurable && (l = !1), t && !t.writable && (r = !1);
  }
  return (l || r || !n) && (Kn ? Ut(
    /** @type {Parameters<define>[0]} */
    a,
    "length",
    s,
    !0,
    !0
  ) : Ut(
    /** @type {Parameters<define>[0]} */
    a,
    "length",
    s
  )), a;
};
(function(e) {
  var a = dt, s = la, n = Yn, l = Va, r = s("%Function.prototype.apply%"), t = s("%Function.prototype.call%"), o = s("%Reflect.apply%", !0) || a.call(t, r), c = mt(), p = s("%Math.max%");
  e.exports = function(d) {
    if (typeof d != "function")
      throw new l("a function is required");
    var b = o(a, t, arguments);
    return n(
      b,
      1 + p(0, d.length - (arguments.length - 1)),
      !0
    );
  };
  var h = function() {
    return o(a, r, arguments);
  };
  c ? c(e.exports, "apply", { value: h }) : e.exports.apply = h;
})(er);
var Zn = er.exports, rr = la, sr = Zn, qn = sr(rr("String.prototype.indexOf")), gn = function(a, s) {
  var n = rr(a, !!s);
  return typeof n == "function" && qn(a, ".prototype.") > -1 ? sr(n) : n;
};
const fn = {}, eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn
}, Symbol.toStringTag, { value: "Module" })), ao = /* @__PURE__ */ an(eo);
var Vt = typeof Map == "function" && Map.prototype, za = Object.getOwnPropertyDescriptor && Vt ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Da = Vt && za && typeof za.get == "function" ? za.get : null, Bt = Vt && Map.prototype.forEach, yt = typeof Set == "function" && Set.prototype, _a = Object.getOwnPropertyDescriptor && yt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Na = yt && _a && typeof _a.get == "function" ? _a.get : null, Ft = yt && Set.prototype.forEach, to = typeof WeakMap == "function" && WeakMap.prototype, ia = to ? WeakMap.prototype.has : null, ro = typeof WeakSet == "function" && WeakSet.prototype, da = ro ? WeakSet.prototype.has : null, so = typeof WeakRef == "function" && WeakRef.prototype, Et = so ? WeakRef.prototype.deref : null, lo = Boolean.prototype.valueOf, no = Object.prototype.toString, oo = Function.prototype.toString, co = String.prototype.match, Ot = String.prototype.slice, g = String.prototype.replace, po = String.prototype.toUpperCase, jt = String.prototype.toLowerCase, lr = RegExp.prototype.test, Lt = Array.prototype.concat, W = Array.prototype.join, ho = Array.prototype.slice, Dt = Math.floor, nt = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ja = Object.getOwnPropertySymbols, ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ra = typeof Symbol == "function" && typeof Symbol.iterator == "object", H = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ra || !0) ? Symbol.toStringTag : null, nr = Object.prototype.propertyIsEnumerable, Nt = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Ht(e, a) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || lr.call(/e/, a))
    return a;
  var s = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Dt(-e) : Dt(e);
    if (n !== e) {
      var l = String(n), r = Ot.call(a, l.length + 1);
      return g.call(l, s, "$&_") + "." + g.call(g.call(r, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return g.call(a, s, "$&_");
}
var ct = ao, Mt = ct.custom, Qt = cr(Mt) ? Mt : null, io = function e(a, s, n, l) {
  var r = s || {};
  if (q(r, "quoteStyle") && r.quoteStyle !== "single" && r.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (q(r, "maxStringLength") && (typeof r.maxStringLength == "number" ? r.maxStringLength < 0 && r.maxStringLength !== 1 / 0 : r.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var t = q(r, "customInspect") ? r.customInspect : !0;
  if (typeof t != "boolean" && t !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (q(r, "indent") && r.indent !== null && r.indent !== "	" && !(parseInt(r.indent, 10) === r.indent && r.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (q(r, "numericSeparator") && typeof r.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var o = r.numericSeparator;
  if (typeof a > "u")
    return "undefined";
  if (a === null)
    return "null";
  if (typeof a == "boolean")
    return a ? "true" : "false";
  if (typeof a == "string")
    return hr(a, r);
  if (typeof a == "number") {
    if (a === 0)
      return 1 / 0 / a > 0 ? "0" : "-0";
    var c = String(a);
    return o ? Ht(a, c) : c;
  }
  if (typeof a == "bigint") {
    var p = String(a) + "n";
    return o ? Ht(a, p) : p;
  }
  var h = typeof r.depth > "u" ? 5 : r.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof a == "object")
    return pt(a) ? "[Array]" : "[Object]";
  var i = Bo(r, n);
  if (typeof l > "u")
    l = [];
  else if (pr(l, a) >= 0)
    return "[Circular]";
  function d(G, Y, Z) {
    if (Y && (l = ho.call(l), l.push(Y)), Z) {
      var ca = {
        depth: r.depth
      };
      return q(r, "quoteStyle") && (ca.quoteStyle = r.quoteStyle), e(G, ca, n + 1, l);
    }
    return e(G, r, n + 1, l);
  }
  if (typeof a == "function" && !kt(a)) {
    var b = Ao(a), x = va(a, d);
    return "[Function" + (b ? ": " + b : " (anonymous)") + "]" + (x.length > 0 ? " { " + W.call(x, ", ") + " }" : "");
  }
  if (cr(a)) {
    var w = ra ? g.call(String(a), /^(Symbol\(.*\))_[^)]*$/, "$1") : ot.call(a);
    return typeof a == "object" && !ra ? pa(w) : w;
  }
  if (Uo(a)) {
    for (var T = "<" + jt.call(String(a.nodeName)), F = a.attributes || [], k = 0; k < F.length; k++)
      T += " " + F[k].name + "=" + or(mo(F[k].value), "double", r);
    return T += ">", a.childNodes && a.childNodes.length && (T += "..."), T += "</" + jt.call(String(a.nodeName)) + ">", T;
  }
  if (pt(a)) {
    if (a.length === 0)
      return "[]";
    var B = va(a, d);
    return i && !Io(B) ? "[" + ht(B, i) + "]" : "[ " + W.call(B, ", ") + " ]";
  }
  if (yo(a)) {
    var K = va(a, d);
    return !("cause" in Error.prototype) && "cause" in a && !nr.call(a, "cause") ? "{ [" + String(a) + "] " + W.call(Lt.call("[cause]: " + d(a.cause), K), ", ") + " }" : K.length === 0 ? "[" + String(a) + "]" : "{ [" + String(a) + "] " + W.call(K, ", ") + " }";
  }
  if (typeof a == "object" && t) {
    if (Qt && typeof a[Qt] == "function" && ct)
      return ct(a, { depth: h - n });
    if (t !== "symbol" && typeof a.inspect == "function")
      return a.inspect();
  }
  if (bo(a)) {
    var ee = [];
    return Bt && Bt.call(a, function(G, Y) {
      ee.push(d(Y, a, !0) + " => " + d(G, a));
    }), $t("Map", Da.call(a), ee, i);
  }
  if (Co(a)) {
    var oa = [];
    return Ft && Ft.call(a, function(G) {
      oa.push(d(G, a));
    }), $t("Set", Na.call(a), oa, i);
  }
  if (Ro(a))
    return Wa("WeakMap");
  if (wo(a))
    return Wa("WeakSet");
  if (xo(a))
    return Wa("WeakRef");
  if (Po(a))
    return pa(d(Number(a)));
  if (vo(a))
    return pa(d(nt.call(a)));
  if (uo(a))
    return pa(lo.call(a));
  if (Oo(a))
    return pa(d(String(a)));
  if (typeof window < "u" && a === window)
    return "{ [object Window] }";
  if (a === fl)
    return "{ [object globalThis] }";
  if (!Vo(a) && !kt(a)) {
    var Ye = va(a, d), Pa = Nt ? Nt(a) === Object.prototype : a instanceof Object || a.constructor === Object, ae = a instanceof Object ? "" : "null prototype", X = !Pa && H && Object(a) === a && H in a ? Ot.call(f(a), 8, -1) : ae ? "Object" : "", ua = Pa || typeof a.constructor != "function" ? "" : a.constructor.name ? a.constructor.name + " " : "", Ze = ua + (X || ae ? "[" + W.call(Lt.call([], X || [], ae || []), ": ") + "] " : "");
    return Ye.length === 0 ? Ze + "{}" : i ? Ze + "{" + ht(Ye, i) + "}" : Ze + "{ " + W.call(Ye, ", ") + " }";
  }
  return String(a);
};
function or(e, a, s) {
  var n = (s.quoteStyle || a) === "double" ? '"' : "'";
  return n + e + n;
}
function mo(e) {
  return g.call(String(e), /"/g, "&quot;");
}
function pt(e) {
  return f(e) === "[object Array]" && (!H || !(typeof e == "object" && H in e));
}
function Vo(e) {
  return f(e) === "[object Date]" && (!H || !(typeof e == "object" && H in e));
}
function kt(e) {
  return f(e) === "[object RegExp]" && (!H || !(typeof e == "object" && H in e));
}
function yo(e) {
  return f(e) === "[object Error]" && (!H || !(typeof e == "object" && H in e));
}
function Oo(e) {
  return f(e) === "[object String]" && (!H || !(typeof e == "object" && H in e));
}
function Po(e) {
  return f(e) === "[object Number]" && (!H || !(typeof e == "object" && H in e));
}
function uo(e) {
  return f(e) === "[object Boolean]" && (!H || !(typeof e == "object" && H in e));
}
function cr(e) {
  if (ra)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !ot)
    return !1;
  try {
    return ot.call(e), !0;
  } catch {
  }
  return !1;
}
function vo(e) {
  if (!e || typeof e != "object" || !nt)
    return !1;
  try {
    return nt.call(e), !0;
  } catch {
  }
  return !1;
}
var So = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function q(e, a) {
  return So.call(e, a);
}
function f(e) {
  return no.call(e);
}
function Ao(e) {
  if (e.name)
    return e.name;
  var a = co.call(oo.call(e), /^function\s*([\w$]+)/);
  return a ? a[1] : null;
}
function pr(e, a) {
  if (e.indexOf)
    return e.indexOf(a);
  for (var s = 0, n = e.length; s < n; s++)
    if (e[s] === a)
      return s;
  return -1;
}
function bo(e) {
  if (!Da || !e || typeof e != "object")
    return !1;
  try {
    Da.call(e);
    try {
      Na.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Ro(e) {
  if (!ia || !e || typeof e != "object")
    return !1;
  try {
    ia.call(e, ia);
    try {
      da.call(e, da);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function xo(e) {
  if (!Et || !e || typeof e != "object")
    return !1;
  try {
    return Et.call(e), !0;
  } catch {
  }
  return !1;
}
function Co(e) {
  if (!Na || !e || typeof e != "object")
    return !1;
  try {
    Na.call(e);
    try {
      Da.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function wo(e) {
  if (!da || !e || typeof e != "object")
    return !1;
  try {
    da.call(e, da);
    try {
      ia.call(e, ia);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Uo(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function hr(e, a) {
  if (e.length > a.maxStringLength) {
    var s = e.length - a.maxStringLength, n = "... " + s + " more character" + (s > 1 ? "s" : "");
    return hr(Ot.call(e, 0, a.maxStringLength), a) + n;
  }
  var l = g.call(g.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, To);
  return or(l, "single", a);
}
function To(e) {
  var a = e.charCodeAt(0), s = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[a];
  return s ? "\\" + s : "\\x" + (a < 16 ? "0" : "") + po.call(a.toString(16));
}
function pa(e) {
  return "Object(" + e + ")";
}
function Wa(e) {
  return e + " { ? }";
}
function $t(e, a, s, n) {
  var l = n ? ht(s, n) : W.call(s, ", ");
  return e + " (" + a + ") {" + l + "}";
}
function Io(e) {
  for (var a = 0; a < e.length; a++)
    if (pr(e[a], `
`) >= 0)
      return !1;
  return !0;
}
function Bo(e, a) {
  var s;
  if (e.indent === "	")
    s = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    s = W.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: s,
    prev: W.call(Array(a + 1), s)
  };
}
function ht(e, a) {
  if (e.length === 0)
    return "";
  var s = `
` + a.prev + a.base;
  return s + W.call(e, "," + s) + `
` + a.prev;
}
function va(e, a) {
  var s = pt(e), n = [];
  if (s) {
    n.length = e.length;
    for (var l = 0; l < e.length; l++)
      n[l] = q(e, l) ? a(e[l], e) : "";
  }
  var r = typeof Ja == "function" ? Ja(e) : [], t;
  if (ra) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = r[o];
  }
  for (var c in e)
    q(e, c) && (s && String(Number(c)) === c && c < e.length || ra && t["$" + c] instanceof Symbol || (lr.call(/[^\w$]/, c) ? n.push(a(c, e) + ": " + a(e[c], e)) : n.push(c + ": " + a(e[c], e))));
  if (typeof Ja == "function")
    for (var p = 0; p < r.length; p++)
      nr.call(e, r[p]) && n.push("[" + a(r[p]) + "]: " + a(e[r[p]], e));
  return n;
}
var ir = la, na = gn, Fo = io, Eo = Va, Sa = ir("%WeakMap%", !0), Aa = ir("%Map%", !0), jo = na("WeakMap.prototype.get", !0), Lo = na("WeakMap.prototype.set", !0), Do = na("WeakMap.prototype.has", !0), No = na("Map.prototype.get", !0), Ho = na("Map.prototype.set", !0), Mo = na("Map.prototype.has", !0), Pt = function(e, a) {
  for (var s = e, n; (n = s.next) !== null; s = n)
    if (n.key === a)
      return s.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = n, n;
}, Qo = function(e, a) {
  var s = Pt(e, a);
  return s && s.value;
}, ko = function(e, a, s) {
  var n = Pt(e, a);
  n ? n.value = s : e.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: a,
    next: e.next,
    value: s
  };
}, $o = function(e, a) {
  return !!Pt(e, a);
}, Go = function() {
  var a, s, n, l = {
    assert: function(r) {
      if (!l.has(r))
        throw new Eo("Side channel does not contain " + Fo(r));
    },
    get: function(r) {
      if (Sa && r && (typeof r == "object" || typeof r == "function")) {
        if (a)
          return jo(a, r);
      } else if (Aa) {
        if (s)
          return No(s, r);
      } else if (n)
        return Qo(n, r);
    },
    has: function(r) {
      if (Sa && r && (typeof r == "object" || typeof r == "function")) {
        if (a)
          return Do(a, r);
      } else if (Aa) {
        if (s)
          return Mo(s, r);
      } else if (n)
        return $o(n, r);
      return !1;
    },
    set: function(r, t) {
      Sa && r && (typeof r == "object" || typeof r == "function") ? (a || (a = new Sa()), Lo(a, r, t)) : Aa ? (s || (s = new Aa()), Ho(s, r, t)) : (n || (n = { key: {}, next: null }), ko(n, r, t));
    }
  };
  return l;
}, zo = String.prototype.replace, _o = /%20/g, Ka = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, ut = {
  default: Ka.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return zo.call(e, _o, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Ka.RFC1738,
  RFC3986: Ka.RFC3986
}, Jo = ut, Xa = Object.prototype.hasOwnProperty, We = Array.isArray, z = function() {
  for (var e = [], a = 0; a < 256; ++a)
    e.push("%" + ((a < 16 ? "0" : "") + a.toString(16)).toUpperCase());
  return e;
}(), Wo = function(a) {
  for (; a.length > 1; ) {
    var s = a.pop(), n = s.obj[s.prop];
    if (We(n)) {
      for (var l = [], r = 0; r < n.length; ++r)
        typeof n[r] < "u" && l.push(n[r]);
      s.obj[s.prop] = l;
    }
  }
}, dr = function(a, s) {
  for (var n = s && s.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, l = 0; l < a.length; ++l)
    typeof a[l] < "u" && (n[l] = a[l]);
  return n;
}, Ko = function e(a, s, n) {
  if (!s)
    return a;
  if (typeof s != "object") {
    if (We(a))
      a.push(s);
    else if (a && typeof a == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Xa.call(Object.prototype, s)) && (a[s] = !0);
    else
      return [a, s];
    return a;
  }
  if (!a || typeof a != "object")
    return [a].concat(s);
  var l = a;
  return We(a) && !We(s) && (l = dr(a, n)), We(a) && We(s) ? (s.forEach(function(r, t) {
    if (Xa.call(a, t)) {
      var o = a[t];
      o && typeof o == "object" && r && typeof r == "object" ? a[t] = e(o, r, n) : a.push(r);
    } else
      a[t] = r;
  }), a) : Object.keys(s).reduce(function(r, t) {
    var o = s[t];
    return Xa.call(r, t) ? r[t] = e(r[t], o, n) : r[t] = o, r;
  }, l);
}, Xo = function(a, s) {
  return Object.keys(s).reduce(function(n, l) {
    return n[l] = s[l], n;
  }, a);
}, Yo = function(e, a, s) {
  var n = e.replace(/\+/g, " ");
  if (s === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Ya = 1024, Zo = function(a, s, n, l, r) {
  if (a.length === 0)
    return a;
  var t = a;
  if (typeof a == "symbol" ? t = Symbol.prototype.toString.call(a) : typeof a != "string" && (t = String(a)), n === "iso-8859-1")
    return escape(t).replace(/%u[0-9a-f]{4}/gi, function(b) {
      return "%26%23" + parseInt(b.slice(2), 16) + "%3B";
    });
  for (var o = "", c = 0; c < t.length; c += Ya) {
    for (var p = t.length >= Ya ? t.slice(c, c + Ya) : t, h = [], i = 0; i < p.length; ++i) {
      var d = p.charCodeAt(i);
      if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || r === Jo.RFC1738 && (d === 40 || d === 41)) {
        h[h.length] = p.charAt(i);
        continue;
      }
      if (d < 128) {
        h[h.length] = z[d];
        continue;
      }
      if (d < 2048) {
        h[h.length] = z[192 | d >> 6] + z[128 | d & 63];
        continue;
      }
      if (d < 55296 || d >= 57344) {
        h[h.length] = z[224 | d >> 12] + z[128 | d >> 6 & 63] + z[128 | d & 63];
        continue;
      }
      i += 1, d = 65536 + ((d & 1023) << 10 | p.charCodeAt(i) & 1023), h[h.length] = z[240 | d >> 18] + z[128 | d >> 12 & 63] + z[128 | d >> 6 & 63] + z[128 | d & 63];
    }
    o += h.join("");
  }
  return o;
}, qo = function(a) {
  for (var s = [{ obj: { o: a }, prop: "o" }], n = [], l = 0; l < s.length; ++l)
    for (var r = s[l], t = r.obj[r.prop], o = Object.keys(t), c = 0; c < o.length; ++c) {
      var p = o[c], h = t[p];
      typeof h == "object" && h !== null && n.indexOf(h) === -1 && (s.push({ obj: t, prop: p }), n.push(h));
    }
  return Wo(s), a;
}, go = function(a) {
  return Object.prototype.toString.call(a) === "[object RegExp]";
}, fo = function(a) {
  return !a || typeof a != "object" ? !1 : !!(a.constructor && a.constructor.isBuffer && a.constructor.isBuffer(a));
}, ec = function(a, s) {
  return [].concat(a, s);
}, ac = function(a, s) {
  if (We(a)) {
    for (var n = [], l = 0; l < a.length; l += 1)
      n.push(s(a[l]));
    return n;
  }
  return s(a);
}, mr = {
  arrayToObject: dr,
  assign: Xo,
  combine: ec,
  compact: qo,
  decode: Yo,
  encode: Zo,
  isBuffer: fo,
  isRegExp: go,
  maybeMap: ac,
  merge: Ko
}, Vr = Go, Ea = mr, ma = ut, tc = Object.prototype.hasOwnProperty, yr = {
  brackets: function(a) {
    return a + "[]";
  },
  comma: "comma",
  indices: function(a, s) {
    return a + "[" + s + "]";
  },
  repeat: function(a) {
    return a;
  }
}, J = Array.isArray, rc = Array.prototype.push, Or = function(e, a) {
  rc.apply(e, J(a) ? a : [a]);
}, sc = Date.prototype.toISOString, Gt = ma.default, j = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Ea.encode,
  encodeValuesOnly: !1,
  format: Gt,
  formatter: ma.formatters[Gt],
  // deprecated
  indices: !1,
  serializeDate: function(a) {
    return sc.call(a);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, lc = function(a) {
  return typeof a == "string" || typeof a == "number" || typeof a == "boolean" || typeof a == "symbol" || typeof a == "bigint";
}, Za = {}, nc = function e(a, s, n, l, r, t, o, c, p, h, i, d, b, x, w, T, F, k) {
  for (var B = a, K = k, ee = 0, oa = !1; (K = K.get(Za)) !== void 0 && !oa; ) {
    var Ye = K.get(a);
    if (ee += 1, typeof Ye < "u") {
      if (Ye === ee)
        throw new RangeError("Cyclic object value");
      oa = !0;
    }
    typeof K.get(Za) > "u" && (ee = 0);
  }
  if (typeof h == "function" ? B = h(s, B) : B instanceof Date ? B = b(B) : n === "comma" && J(B) && (B = Ea.maybeMap(B, function(Ma) {
    return Ma instanceof Date ? b(Ma) : Ma;
  })), B === null) {
    if (t)
      return p && !T ? p(s, j.encoder, F, "key", x) : s;
    B = "";
  }
  if (lc(B) || Ea.isBuffer(B)) {
    if (p) {
      var Pa = T ? s : p(s, j.encoder, F, "key", x);
      return [w(Pa) + "=" + w(p(B, j.encoder, F, "value", x))];
    }
    return [w(s) + "=" + w(String(B))];
  }
  var ae = [];
  if (typeof B > "u")
    return ae;
  var X;
  if (n === "comma" && J(B))
    T && p && (B = Ea.maybeMap(B, p)), X = [{ value: B.length > 0 ? B.join(",") || null : void 0 }];
  else if (J(h))
    X = h;
  else {
    var ua = Object.keys(B);
    X = i ? ua.sort(i) : ua;
  }
  var Ze = c ? s.replace(/\./g, "%2E") : s, G = l && J(B) && B.length === 1 ? Ze + "[]" : Ze;
  if (r && J(B) && B.length === 0)
    return G + "[]";
  for (var Y = 0; Y < X.length; ++Y) {
    var Z = X[Y], ca = typeof Z == "object" && typeof Z.value < "u" ? Z.value : B[Z];
    if (!(o && ca === null)) {
      var Ha = d && c ? Z.replace(/\./g, "%2E") : Z, ur = J(B) ? typeof n == "function" ? n(G, Ha) : G : G + (d ? "." + Ha : "[" + Ha + "]");
      k.set(a, ee);
      var vt = Vr();
      vt.set(Za, k), Or(ae, e(
        ca,
        ur,
        n,
        l,
        r,
        t,
        o,
        c,
        n === "comma" && T && J(B) ? null : p,
        h,
        i,
        d,
        b,
        x,
        w,
        T,
        F,
        vt
      ));
    }
  }
  return ae;
}, oc = function(a) {
  if (!a)
    return j;
  if (typeof a.allowEmptyArrays < "u" && typeof a.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof a.encodeDotInKeys < "u" && typeof a.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (a.encoder !== null && typeof a.encoder < "u" && typeof a.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var s = a.charset || j.charset;
  if (typeof a.charset < "u" && a.charset !== "utf-8" && a.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = ma.default;
  if (typeof a.format < "u") {
    if (!tc.call(ma.formatters, a.format))
      throw new TypeError("Unknown format option provided.");
    n = a.format;
  }
  var l = ma.formatters[n], r = j.filter;
  (typeof a.filter == "function" || J(a.filter)) && (r = a.filter);
  var t;
  if (a.arrayFormat in yr ? t = a.arrayFormat : "indices" in a ? t = a.indices ? "indices" : "repeat" : t = j.arrayFormat, "commaRoundTrip" in a && typeof a.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var o = typeof a.allowDots > "u" ? a.encodeDotInKeys === !0 ? !0 : j.allowDots : !!a.allowDots;
  return {
    addQueryPrefix: typeof a.addQueryPrefix == "boolean" ? a.addQueryPrefix : j.addQueryPrefix,
    allowDots: o,
    allowEmptyArrays: typeof a.allowEmptyArrays == "boolean" ? !!a.allowEmptyArrays : j.allowEmptyArrays,
    arrayFormat: t,
    charset: s,
    charsetSentinel: typeof a.charsetSentinel == "boolean" ? a.charsetSentinel : j.charsetSentinel,
    commaRoundTrip: a.commaRoundTrip,
    delimiter: typeof a.delimiter > "u" ? j.delimiter : a.delimiter,
    encode: typeof a.encode == "boolean" ? a.encode : j.encode,
    encodeDotInKeys: typeof a.encodeDotInKeys == "boolean" ? a.encodeDotInKeys : j.encodeDotInKeys,
    encoder: typeof a.encoder == "function" ? a.encoder : j.encoder,
    encodeValuesOnly: typeof a.encodeValuesOnly == "boolean" ? a.encodeValuesOnly : j.encodeValuesOnly,
    filter: r,
    format: n,
    formatter: l,
    serializeDate: typeof a.serializeDate == "function" ? a.serializeDate : j.serializeDate,
    skipNulls: typeof a.skipNulls == "boolean" ? a.skipNulls : j.skipNulls,
    sort: typeof a.sort == "function" ? a.sort : null,
    strictNullHandling: typeof a.strictNullHandling == "boolean" ? a.strictNullHandling : j.strictNullHandling
  };
}, cc = function(e, a) {
  var s = e, n = oc(a), l, r;
  typeof n.filter == "function" ? (r = n.filter, s = r("", s)) : J(n.filter) && (r = n.filter, l = r);
  var t = [];
  if (typeof s != "object" || s === null)
    return "";
  var o = yr[n.arrayFormat], c = o === "comma" && n.commaRoundTrip;
  l || (l = Object.keys(s)), n.sort && l.sort(n.sort);
  for (var p = Vr(), h = 0; h < l.length; ++h) {
    var i = l[h];
    n.skipNulls && s[i] === null || Or(t, nc(
      s[i],
      i,
      o,
      c,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      p
    ));
  }
  var d = t.join(n.delimiter), b = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), d.length > 0 ? b + d : "";
}, sa = mr, it = Object.prototype.hasOwnProperty, pc = Array.isArray, E = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: sa.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1
}, hc = function(e) {
  return e.replace(/&#(\d+);/g, function(a, s) {
    return String.fromCharCode(parseInt(s, 10));
  });
}, Pr = function(e, a) {
  return e && typeof e == "string" && a.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, ic = "utf8=%26%2310003%3B", dc = "utf8=%E2%9C%93", mc = function(a, s) {
  var n = { __proto__: null }, l = s.ignoreQueryPrefix ? a.replace(/^\?/, "") : a;
  l = l.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var r = s.parameterLimit === 1 / 0 ? void 0 : s.parameterLimit, t = l.split(s.delimiter, r), o = -1, c, p = s.charset;
  if (s.charsetSentinel)
    for (c = 0; c < t.length; ++c)
      t[c].indexOf("utf8=") === 0 && (t[c] === dc ? p = "utf-8" : t[c] === ic && (p = "iso-8859-1"), o = c, c = t.length);
  for (c = 0; c < t.length; ++c)
    if (c !== o) {
      var h = t[c], i = h.indexOf("]="), d = i === -1 ? h.indexOf("=") : i + 1, b, x;
      d === -1 ? (b = s.decoder(h, E.decoder, p, "key"), x = s.strictNullHandling ? null : "") : (b = s.decoder(h.slice(0, d), E.decoder, p, "key"), x = sa.maybeMap(
        Pr(h.slice(d + 1), s),
        function(T) {
          return s.decoder(T, E.decoder, p, "value");
        }
      )), x && s.interpretNumericEntities && p === "iso-8859-1" && (x = hc(x)), h.indexOf("[]=") > -1 && (x = pc(x) ? [x] : x);
      var w = it.call(n, b);
      w && s.duplicates === "combine" ? n[b] = sa.combine(n[b], x) : (!w || s.duplicates === "last") && (n[b] = x);
    }
  return n;
}, Vc = function(e, a, s, n) {
  for (var l = n ? a : Pr(a, s), r = e.length - 1; r >= 0; --r) {
    var t, o = e[r];
    if (o === "[]" && s.parseArrays)
      t = s.allowEmptyArrays && (l === "" || s.strictNullHandling && l === null) ? [] : [].concat(l);
    else {
      t = s.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o, p = s.decodeDotInKeys ? c.replace(/%2E/g, ".") : c, h = parseInt(p, 10);
      !s.parseArrays && p === "" ? t = { 0: l } : !isNaN(h) && o !== p && String(h) === p && h >= 0 && s.parseArrays && h <= s.arrayLimit ? (t = [], t[h] = l) : p !== "__proto__" && (t[p] = l);
    }
    l = t;
  }
  return l;
}, yc = function(a, s, n, l) {
  if (a) {
    var r = n.allowDots ? a.replace(/\.([^.[]+)/g, "[$1]") : a, t = /(\[[^[\]]*])/, o = /(\[[^[\]]*])/g, c = n.depth > 0 && t.exec(r), p = c ? r.slice(0, c.index) : r, h = [];
    if (p) {
      if (!n.plainObjects && it.call(Object.prototype, p) && !n.allowPrototypes)
        return;
      h.push(p);
    }
    for (var i = 0; n.depth > 0 && (c = o.exec(r)) !== null && i < n.depth; ) {
      if (i += 1, !n.plainObjects && it.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      h.push(c[1]);
    }
    if (c) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      h.push("[" + r.slice(c.index) + "]");
    }
    return Vc(h, s, n, l);
  }
}, Oc = function(a) {
  if (!a)
    return E;
  if (typeof a.allowEmptyArrays < "u" && typeof a.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof a.decodeDotInKeys < "u" && typeof a.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (a.decoder !== null && typeof a.decoder < "u" && typeof a.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof a.charset < "u" && a.charset !== "utf-8" && a.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var s = typeof a.charset > "u" ? E.charset : a.charset, n = typeof a.duplicates > "u" ? E.duplicates : a.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var l = typeof a.allowDots > "u" ? a.decodeDotInKeys === !0 ? !0 : E.allowDots : !!a.allowDots;
  return {
    allowDots: l,
    allowEmptyArrays: typeof a.allowEmptyArrays == "boolean" ? !!a.allowEmptyArrays : E.allowEmptyArrays,
    allowPrototypes: typeof a.allowPrototypes == "boolean" ? a.allowPrototypes : E.allowPrototypes,
    allowSparse: typeof a.allowSparse == "boolean" ? a.allowSparse : E.allowSparse,
    arrayLimit: typeof a.arrayLimit == "number" ? a.arrayLimit : E.arrayLimit,
    charset: s,
    charsetSentinel: typeof a.charsetSentinel == "boolean" ? a.charsetSentinel : E.charsetSentinel,
    comma: typeof a.comma == "boolean" ? a.comma : E.comma,
    decodeDotInKeys: typeof a.decodeDotInKeys == "boolean" ? a.decodeDotInKeys : E.decodeDotInKeys,
    decoder: typeof a.decoder == "function" ? a.decoder : E.decoder,
    delimiter: typeof a.delimiter == "string" || sa.isRegExp(a.delimiter) ? a.delimiter : E.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof a.depth == "number" || a.depth === !1 ? +a.depth : E.depth,
    duplicates: n,
    ignoreQueryPrefix: a.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof a.interpretNumericEntities == "boolean" ? a.interpretNumericEntities : E.interpretNumericEntities,
    parameterLimit: typeof a.parameterLimit == "number" ? a.parameterLimit : E.parameterLimit,
    parseArrays: a.parseArrays !== !1,
    plainObjects: typeof a.plainObjects == "boolean" ? a.plainObjects : E.plainObjects,
    strictDepth: typeof a.strictDepth == "boolean" ? !!a.strictDepth : E.strictDepth,
    strictNullHandling: typeof a.strictNullHandling == "boolean" ? a.strictNullHandling : E.strictNullHandling
  };
}, Pc = function(e, a) {
  var s = Oc(a);
  if (e === "" || e === null || typeof e > "u")
    return s.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? mc(e, s) : e, l = s.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, r = Object.keys(n), t = 0; t < r.length; ++t) {
    var o = r[t], c = yc(o, n[o], s, typeof e == "string");
    l = sa.merge(l, c, s);
  }
  return s.allowSparse === !0 ? l : sa.compact(l);
}, uc = cc, vc = Pc, Sc = ut, Ac = {
  formats: Sc,
  parse: vc,
  stringify: uc
};
const bc = /* @__PURE__ */ en(Ac), Oa = m.create({
  baseURL: "",
  withCredentials: !0,
  paramsSerializer: (e) => bc.stringify(e, { arrayFormat: "repeat" })
});
Oa.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function Rc(e) {
  const a = e.defaults.baseURL;
  return {
    // core
    annotationSetting: new Ar(
      void 0,
      a,
      e
    ),
    menu: new hs(void 0, a, e),
    menuItem: new cs(void 0, a, e),
    setting: new yl(void 0, a, e),
    configMap: new Jr(void 0, a, e),
    secret: new ml(void 0, a, e),
    user: new Zl(void 0, a, e),
    role: new pl(void 0, a, e),
    roleBinding: new ol(void 0, a, e),
    // content.halo.run
    content: {
      category: new Nr(void 0, a, e),
      comment: new Qr(void 0, a, e),
      post: new Gs(void 0, a, e),
      reply: new al(void 0, a, e),
      singlePage: new Pl(void 0, a, e),
      snapshot: new bl(void 0, a, e),
      tag: new Ll(void 0, a, e)
    },
    // auth.halo.run
    auth: {
      authProvider: new Br(
        void 0,
        a,
        e
      ),
      userConnection: new Kl(
        void 0,
        a,
        e
      )
    },
    // storage.halo.run
    storage: {
      attachment: new xr(void 0, a, e),
      group: new ts(void 0, a, e),
      policy: new ks(void 0, a, e),
      policyTemplate: new Ms(
        void 0,
        a,
        e
      )
    },
    // plugin.halo.run
    plugin: {
      extensionDefinition: new gr(
        void 0,
        a,
        e
      ),
      extensionPointDefinition: new es(
        void 0,
        a,
        e
      ),
      plugin: new js(void 0, a, e),
      reverseProxy: new ll(
        void 0,
        a,
        e
      ),
      searchEngine: new il(
        void 0,
        a,
        e
      )
    },
    // metrics.halo.run
    metrics: {
      counter: new Kr(void 0, a, e)
    },
    // theme.halo.run
    theme: {
      theme: new Ql(void 0, a, e)
    },
    // notification.halo.run
    notification: {
      notification: new Ss(
        void 0,
        a,
        e
      ),
      notificationTemplate: new us(
        void 0,
        a,
        e
      ),
      notifierDescriptor: new xs(
        void 0,
        a,
        e
      ),
      reason: new gs(void 0, a, e),
      reasonType: new Zs(void 0, a, e),
      subscription: new wl(
        void 0,
        a,
        e
      )
    },
    // migration.halo.run
    migration: {
      backup: new Lr(void 0, a, e)
    },
    // security.halo.run
    security: {
      personalAccessToken: new Is(
        void 0,
        a,
        e
      )
    }
  };
}
function xc(e) {
  const a = e.defaults.baseURL;
  return {
    user: new gl(void 0, a, e),
    system: new Bl(void 0, a, e),
    migration: new Os(
      void 0,
      a,
      e
    ),
    storage: {
      attachment: new wr(
        void 0,
        a,
        e
      )
    },
    auth: {
      authProvider: new Er(
        void 0,
        a,
        e
      )
    },
    content: {
      comment: new $r(void 0, a, e),
      reply: new rl(void 0, a, e),
      indices: new ls(void 0, a, e),
      post: new _s(void 0, a, e),
      singlePage: new vl(
        void 0,
        a,
        e
      ),
      tag: new Nl(void 0, a, e)
    },
    notification: {
      notifier: new ws(
        void 0,
        a,
        e
      )
    },
    plugin: {
      plugin: new Ds(void 0, a, e)
    },
    theme: {
      theme: new $l(void 0, a, e)
    },
    configMap: {
      system: new Tl(
        void 0,
        a,
        e
      )
    }
  };
}
function Cc(e) {
  const a = e.defaults.baseURL;
  return {
    storage: {
      attachment: new Tr(
        void 0,
        a,
        e
      )
    },
    content: {
      post: new Xs(void 0, a, e),
      snapshot: new xl(void 0, a, e)
    },
    security: {
      twoFactor: new Jl(
        void 0,
        a,
        e
      ),
      personalAccessToken: new Fs(
        void 0,
        a,
        e
      ),
      device: new Zr(void 0, a, e)
    },
    notification: {
      notification: new bs(
        void 0,
        a,
        e
      )
    }
  };
}
function wc(e) {
  const a = e.defaults.baseURL;
  return {
    menu: new ds(void 0, a, e),
    stats: new El(void 0, a, e),
    content: {
      post: new Ws(void 0, a, e),
      comment: new zr(void 0, a, e)
    },
    metrics: {
      metrics: new Vs(void 0, a, e)
    }
  };
}
const Hh = Rc(Oa), Mh = xc(Oa), Qh = Cc(Oa), kh = wc(Oa);
export {
  Ph as AddOperationOpEnum,
  Ar as AnnotationSettingV1alpha1Api,
  Sr as AnnotationSettingV1alpha1ApiAxiosParamCreator,
  Tc as AnnotationSettingV1alpha1ApiFactory,
  te as AnnotationSettingV1alpha1ApiFp,
  Bc as ApiNotificationHaloRunV1alpha1SubscriptionApi,
  br as ApiNotificationHaloRunV1alpha1SubscriptionApiAxiosParamCreator,
  Ic as ApiNotificationHaloRunV1alpha1SubscriptionApiFactory,
  zt as ApiNotificationHaloRunV1alpha1SubscriptionApiFp,
  xr as AttachmentV1alpha1Api,
  Rr as AttachmentV1alpha1ApiAxiosParamCreator,
  Fc as AttachmentV1alpha1ApiFactory,
  re as AttachmentV1alpha1ApiFp,
  wr as AttachmentV1alpha1ConsoleApi,
  Cr as AttachmentV1alpha1ConsoleApiAxiosParamCreator,
  Ec as AttachmentV1alpha1ConsoleApiFactory,
  ba as AttachmentV1alpha1ConsoleApiFp,
  Tr as AttachmentV1alpha1UcApi,
  Ur as AttachmentV1alpha1UcApiAxiosParamCreator,
  jc as AttachmentV1alpha1UcApiFactory,
  ha as AttachmentV1alpha1UcApiFp,
  uh as AuthProviderSpecAuthTypeEnum,
  Br as AuthProviderV1alpha1Api,
  Ir as AuthProviderV1alpha1ApiAxiosParamCreator,
  Lc as AuthProviderV1alpha1ApiFactory,
  se as AuthProviderV1alpha1ApiFp,
  Er as AuthProviderV1alpha1ConsoleApi,
  Fr as AuthProviderV1alpha1ConsoleApiAxiosParamCreator,
  Dc as AuthProviderV1alpha1ConsoleApiFactory,
  Ra as AuthProviderV1alpha1ConsoleApiFp,
  vh as BackupStatusPhaseEnum,
  Lr as BackupV1alpha1Api,
  jr as BackupV1alpha1ApiAxiosParamCreator,
  Nc as BackupV1alpha1ApiFactory,
  le as BackupV1alpha1ApiFp,
  Nr as CategoryV1alpha1Api,
  Dr as CategoryV1alpha1ApiAxiosParamCreator,
  Hc as CategoryV1alpha1ApiFactory,
  ne as CategoryV1alpha1ApiFp,
  Qc as CategoryV1alpha1PublicApi,
  Hr as CategoryV1alpha1PublicApiAxiosParamCreator,
  Mc as CategoryV1alpha1PublicApiFactory,
  xa as CategoryV1alpha1PublicApiFp,
  Qr as CommentV1alpha1Api,
  Mr as CommentV1alpha1ApiAxiosParamCreator,
  kc as CommentV1alpha1ApiFactory,
  oe as CommentV1alpha1ApiFp,
  $r as CommentV1alpha1ConsoleApi,
  kr as CommentV1alpha1ConsoleApiAxiosParamCreator,
  $c as CommentV1alpha1ConsoleApiFactory,
  Ca as CommentV1alpha1ConsoleApiFp,
  zr as CommentV1alpha1PublicApi,
  Gr as CommentV1alpha1PublicApiAxiosParamCreator,
  Gc as CommentV1alpha1PublicApiFactory,
  fe as CommentV1alpha1PublicApiFp,
  Sh as ConditionStatusEnum,
  Jr as ConfigMapV1alpha1Api,
  _r as ConfigMapV1alpha1ApiAxiosParamCreator,
  zc as ConfigMapV1alpha1ApiFactory,
  ce as ConfigMapV1alpha1ApiFp,
  Oh as Configuration,
  Ah as CopyOperationOpEnum,
  Kr as CounterV1alpha1Api,
  Wr as CounterV1alpha1ApiAxiosParamCreator,
  _c as CounterV1alpha1ApiFactory,
  pe as CounterV1alpha1ApiFp,
  Wc as DeviceV1alpha1Api,
  Xr as DeviceV1alpha1ApiAxiosParamCreator,
  Jc as DeviceV1alpha1ApiFactory,
  he as DeviceV1alpha1ApiFp,
  Zr as DeviceV1alpha1UcApi,
  Yr as DeviceV1alpha1UcApiAxiosParamCreator,
  Kc as DeviceV1alpha1UcApiFactory,
  ga as DeviceV1alpha1UcApiFp,
  gr as ExtensionDefinitionV1alpha1Api,
  qr as ExtensionDefinitionV1alpha1ApiAxiosParamCreator,
  Xc as ExtensionDefinitionV1alpha1ApiFactory,
  ie as ExtensionDefinitionV1alpha1ApiFp,
  es as ExtensionPointDefinitionV1alpha1Api,
  fr as ExtensionPointDefinitionV1alpha1ApiAxiosParamCreator,
  Yc as ExtensionPointDefinitionV1alpha1ApiFactory,
  de as ExtensionPointDefinitionV1alpha1ApiFp,
  bh as ExtensionPointSpecTypeEnum,
  ts as GroupV1alpha1Api,
  as as GroupV1alpha1ApiAxiosParamCreator,
  Zc as GroupV1alpha1ApiFactory,
  me as GroupV1alpha1ApiFp,
  gc as IndexV1alpha1PublicApi,
  rs as IndexV1alpha1PublicApiAxiosParamCreator,
  qc as IndexV1alpha1PublicApiFactory,
  fa as IndexV1alpha1PublicApiFp,
  ls as IndicesV1alpha1ConsoleApi,
  ss as IndicesV1alpha1ConsoleApiAxiosParamCreator,
  fc as IndicesV1alpha1ConsoleApiFactory,
  et as IndicesV1alpha1ConsoleApiFp,
  up as InstallPluginSourceEnum,
  Ip as ListMyPostsPublishPhaseEnum,
  wp as ListPostsPublishPhaseEnum,
  _p as ListSinglePagesPublishPhaseEnum,
  Jp as ListSinglePagesVisibleEnum,
  Rh as ListedAuthProviderAuthTypeEnum,
  xh as LocalThumbnailSpecSizeEnum,
  Ch as LocalThumbnailStatusPhaseEnum,
  ap as LocalThumbnailV1alpha1Api,
  ns as LocalThumbnailV1alpha1ApiAxiosParamCreator,
  ep as LocalThumbnailV1alpha1ApiFactory,
  Ve as LocalThumbnailV1alpha1ApiFp,
  wh as MenuItemSpecTargetEnum,
  cs as MenuItemV1alpha1Api,
  os as MenuItemV1alpha1ApiAxiosParamCreator,
  tp as MenuItemV1alpha1ApiFactory,
  ye as MenuItemV1alpha1ApiFp,
  hs as MenuV1alpha1Api,
  ps as MenuV1alpha1ApiAxiosParamCreator,
  rp as MenuV1alpha1ApiFactory,
  Oe as MenuV1alpha1ApiFp,
  ds as MenuV1alpha1PublicApi,
  is as MenuV1alpha1PublicApiAxiosParamCreator,
  sp as MenuV1alpha1PublicApiFactory,
  at as MenuV1alpha1PublicApiFp,
  Vs as MetricsV1alpha1PublicApi,
  ms as MetricsV1alpha1PublicApiAxiosParamCreator,
  lp as MetricsV1alpha1PublicApiFactory,
  wa as MetricsV1alpha1PublicApiFp,
  Os as MigrationV1alpha1ConsoleApi,
  ys as MigrationV1alpha1ConsoleApiAxiosParamCreator,
  np as MigrationV1alpha1ConsoleApiFactory,
  Ua as MigrationV1alpha1ConsoleApiFp,
  Uh as MoveOperationOpEnum,
  us as NotificationTemplateV1alpha1Api,
  Ps as NotificationTemplateV1alpha1ApiAxiosParamCreator,
  op as NotificationTemplateV1alpha1ApiFactory,
  Pe as NotificationTemplateV1alpha1ApiFp,
  Ss as NotificationV1alpha1Api,
  vs as NotificationV1alpha1ApiAxiosParamCreator,
  cp as NotificationV1alpha1ApiFactory,
  ue as NotificationV1alpha1ApiFp,
  bs as NotificationV1alpha1UcApi,
  As as NotificationV1alpha1UcApiAxiosParamCreator,
  pp as NotificationV1alpha1UcApiFactory,
  ve as NotificationV1alpha1UcApiFp,
  xs as NotifierDescriptorV1alpha1Api,
  Rs as NotifierDescriptorV1alpha1ApiAxiosParamCreator,
  hp as NotifierDescriptorV1alpha1ApiFactory,
  Se as NotifierDescriptorV1alpha1ApiFp,
  ws as NotifierV1alpha1ConsoleApi,
  Cs as NotifierV1alpha1ConsoleApiAxiosParamCreator,
  ip as NotifierV1alpha1ConsoleApiFactory,
  Ta as NotifierV1alpha1ConsoleApiFp,
  mp as NotifierV1alpha1UcApi,
  Us as NotifierV1alpha1UcApiAxiosParamCreator,
  dp as NotifierV1alpha1UcApiFactory,
  tt as NotifierV1alpha1UcApiFp,
  Is as PersonalAccessTokenV1alpha1Api,
  Ts as PersonalAccessTokenV1alpha1ApiAxiosParamCreator,
  Vp as PersonalAccessTokenV1alpha1ApiFactory,
  Ae as PersonalAccessTokenV1alpha1ApiFp,
  Fs as PersonalAccessTokenV1alpha1UcApi,
  Bs as PersonalAccessTokenV1alpha1UcApiAxiosParamCreator,
  yp as PersonalAccessTokenV1alpha1UcApiFactory,
  be as PersonalAccessTokenV1alpha1UcApiFp,
  Th as PluginStatusLastProbeStateEnum,
  Ih as PluginStatusPhaseEnum,
  js as PluginV1alpha1Api,
  Es as PluginV1alpha1ApiAxiosParamCreator,
  Op as PluginV1alpha1ApiFactory,
  Re as PluginV1alpha1ApiFp,
  Ds as PluginV1alpha1ConsoleApi,
  Ls as PluginV1alpha1ConsoleApiAxiosParamCreator,
  Pp as PluginV1alpha1ConsoleApiFactory,
  D as PluginV1alpha1ConsoleApiFp,
  Ap as PluginV1alpha1PublicApi,
  Ns as PluginV1alpha1PublicApiAxiosParamCreator,
  Sp as PluginV1alpha1PublicApiFactory,
  _t as PluginV1alpha1PublicApiFp,
  Ms as PolicyTemplateV1alpha1Api,
  Hs as PolicyTemplateV1alpha1ApiAxiosParamCreator,
  bp as PolicyTemplateV1alpha1ApiFactory,
  xe as PolicyTemplateV1alpha1ApiFp,
  ks as PolicyV1alpha1Api,
  Qs as PolicyV1alpha1ApiAxiosParamCreator,
  Rp as PolicyV1alpha1ApiFactory,
  Ce as PolicyV1alpha1ApiFp,
  Bh as PostSpecVisibleEnum,
  Gs as PostV1alpha1Api,
  $s as PostV1alpha1ApiAxiosParamCreator,
  xp as PostV1alpha1ApiFactory,
  we as PostV1alpha1ApiFp,
  _s as PostV1alpha1ConsoleApi,
  zs as PostV1alpha1ConsoleApiAxiosParamCreator,
  Cp as PostV1alpha1ConsoleApiFactory,
  M as PostV1alpha1ConsoleApiFp,
  Ws as PostV1alpha1PublicApi,
  Js as PostV1alpha1PublicApiAxiosParamCreator,
  Up as PostV1alpha1PublicApiFactory,
  Ia as PostV1alpha1PublicApiFp,
  Xs as PostV1alpha1UcApi,
  Ks as PostV1alpha1UcApiAxiosParamCreator,
  Tp as PostV1alpha1UcApiFactory,
  _ as PostV1alpha1UcApiFp,
  Zs as ReasonTypeV1alpha1Api,
  Ys as ReasonTypeV1alpha1ApiAxiosParamCreator,
  Bp as ReasonTypeV1alpha1ApiFactory,
  Ue as ReasonTypeV1alpha1ApiFp,
  gs as ReasonV1alpha1Api,
  qs as ReasonV1alpha1ApiAxiosParamCreator,
  Fp as ReasonV1alpha1ApiFactory,
  Te as ReasonV1alpha1ApiFp,
  jp as RememberMeTokenV1alpha1Api,
  fs as RememberMeTokenV1alpha1ApiAxiosParamCreator,
  Ep as RememberMeTokenV1alpha1ApiFactory,
  Ie as RememberMeTokenV1alpha1ApiFp,
  Fh as RemoveOperationOpEnum,
  Eh as ReplaceOperationOpEnum,
  al as ReplyV1alpha1Api,
  el as ReplyV1alpha1ApiAxiosParamCreator,
  Lp as ReplyV1alpha1ApiFactory,
  Be as ReplyV1alpha1ApiFp,
  rl as ReplyV1alpha1ConsoleApi,
  tl as ReplyV1alpha1ConsoleApiAxiosParamCreator,
  Dp as ReplyV1alpha1ConsoleApiFactory,
  Jt as ReplyV1alpha1ConsoleApiFp,
  ll as ReverseProxyV1alpha1Api,
  sl as ReverseProxyV1alpha1ApiAxiosParamCreator,
  Np as ReverseProxyV1alpha1ApiFactory,
  Fe as ReverseProxyV1alpha1ApiFp,
  ol as RoleBindingV1alpha1Api,
  nl as RoleBindingV1alpha1ApiAxiosParamCreator,
  Hp as RoleBindingV1alpha1ApiFactory,
  Ee as RoleBindingV1alpha1ApiFp,
  pl as RoleV1alpha1Api,
  cl as RoleV1alpha1ApiAxiosParamCreator,
  Mp as RoleV1alpha1ApiFactory,
  je as RoleV1alpha1ApiFp,
  il as SearchEngineV1alpha1Api,
  hl as SearchEngineV1alpha1ApiAxiosParamCreator,
  Qp as SearchEngineV1alpha1ApiFactory,
  Le as SearchEngineV1alpha1ApiFp,
  ml as SecretV1alpha1Api,
  dl as SecretV1alpha1ApiAxiosParamCreator,
  kp as SecretV1alpha1ApiFactory,
  De as SecretV1alpha1ApiFp,
  yl as SettingV1alpha1Api,
  Vl as SettingV1alpha1ApiAxiosParamCreator,
  $p as SettingV1alpha1ApiFactory,
  Ne as SettingV1alpha1ApiFp,
  jh as SinglePageSpecVisibleEnum,
  Pl as SinglePageV1alpha1Api,
  Ol as SinglePageV1alpha1ApiAxiosParamCreator,
  Gp as SinglePageV1alpha1ApiFactory,
  He as SinglePageV1alpha1ApiFp,
  vl as SinglePageV1alpha1ConsoleApi,
  ul as SinglePageV1alpha1ConsoleApiAxiosParamCreator,
  zp as SinglePageV1alpha1ConsoleApiFactory,
  $ as SinglePageV1alpha1ConsoleApiFp,
  Kp as SinglePageV1alpha1PublicApi,
  Sl as SinglePageV1alpha1PublicApiAxiosParamCreator,
  Wp as SinglePageV1alpha1PublicApiFactory,
  rt as SinglePageV1alpha1PublicApiFp,
  bl as SnapshotV1alpha1Api,
  Al as SnapshotV1alpha1ApiAxiosParamCreator,
  Xp as SnapshotV1alpha1ApiFactory,
  Me as SnapshotV1alpha1ApiFp,
  xl as SnapshotV1alpha1UcApi,
  Rl as SnapshotV1alpha1UcApiAxiosParamCreator,
  Yp as SnapshotV1alpha1UcApiFactory,
  Wt as SnapshotV1alpha1UcApiFp,
  wl as SubscriptionV1alpha1Api,
  Cl as SubscriptionV1alpha1ApiAxiosParamCreator,
  Zp as SubscriptionV1alpha1ApiFactory,
  Qe as SubscriptionV1alpha1ApiFp,
  Tl as SystemConfigV1alpha1ConsoleApi,
  Ul as SystemConfigV1alpha1ConsoleApiAxiosParamCreator,
  qp as SystemConfigV1alpha1ConsoleApiFactory,
  st as SystemConfigV1alpha1ConsoleApiFp,
  Bl as SystemV1alpha1ConsoleApi,
  Il as SystemV1alpha1ConsoleApiAxiosParamCreator,
  gp as SystemV1alpha1ConsoleApiFactory,
  Kt as SystemV1alpha1ConsoleApiFp,
  El as SystemV1alpha1PublicApi,
  Fl as SystemV1alpha1PublicApiAxiosParamCreator,
  fp as SystemV1alpha1PublicApiFactory,
  Xt as SystemV1alpha1PublicApiFp,
  Ll as TagV1alpha1Api,
  jl as TagV1alpha1ApiAxiosParamCreator,
  eh as TagV1alpha1ApiFactory,
  ke as TagV1alpha1ApiFp,
  Nl as TagV1alpha1ConsoleApi,
  Dl as TagV1alpha1ConsoleApiAxiosParamCreator,
  ah as TagV1alpha1ConsoleApiFactory,
  Yt as TagV1alpha1ConsoleApiFp,
  rh as TagV1alpha1PublicApi,
  Hl as TagV1alpha1PublicApiAxiosParamCreator,
  th as TagV1alpha1PublicApiFactory,
  Ba as TagV1alpha1PublicApiFp,
  Lh as TestOperationOpEnum,
  Dh as ThemeStatusPhaseEnum,
  Ql as ThemeV1alpha1Api,
  Ml as ThemeV1alpha1ApiAxiosParamCreator,
  sh as ThemeV1alpha1ApiFactory,
  $e as ThemeV1alpha1ApiFp,
  $l as ThemeV1alpha1ConsoleApi,
  kl as ThemeV1alpha1ConsoleApiAxiosParamCreator,
  lh as ThemeV1alpha1ConsoleApiFactory,
  N as ThemeV1alpha1ConsoleApiFp,
  Nh as ThumbnailSpecSizeEnum,
  oh as ThumbnailV1alpha1Api,
  Gl as ThumbnailV1alpha1ApiAxiosParamCreator,
  nh as ThumbnailV1alpha1ApiFactory,
  Ge as ThumbnailV1alpha1ApiFp,
  ph as ThumbnailV1alpha1PublicApi,
  zl as ThumbnailV1alpha1PublicApiAxiosParamCreator,
  ch as ThumbnailV1alpha1PublicApiFactory,
  Zt as ThumbnailV1alpha1PublicApiFp,
  Jl as TwoFactorAuthV1alpha1UcApi,
  _l as TwoFactorAuthV1alpha1UcApiAxiosParamCreator,
  hh as TwoFactorAuthV1alpha1UcApiFactory,
  ze as TwoFactorAuthV1alpha1UcApiFp,
  vp as UpgradePluginSourceEnum,
  Kl as UserConnectionV1alpha1Api,
  Wl as UserConnectionV1alpha1ApiAxiosParamCreator,
  ih as UserConnectionV1alpha1ApiFactory,
  _e as UserConnectionV1alpha1ApiFp,
  mh as UserConnectionV1alpha1UcApi,
  Xl as UserConnectionV1alpha1UcApiAxiosParamCreator,
  dh as UserConnectionV1alpha1UcApiFactory,
  qt as UserConnectionV1alpha1UcApiFp,
  Zl as UserV1alpha1Api,
  Yl as UserV1alpha1ApiAxiosParamCreator,
  Vh as UserV1alpha1ApiFactory,
  Je as UserV1alpha1ApiFp,
  gl as UserV1alpha1ConsoleApi,
  ql as UserV1alpha1ConsoleApiAxiosParamCreator,
  yh as UserV1alpha1ConsoleApiFactory,
  Q as UserV1alpha1ConsoleApiFp,
  Oa as axiosInstance,
  Mh as consoleApiClient,
  Hh as coreApiClient,
  xc as createConsoleApiClient,
  Rc as createCoreApiClient,
  wc as createPublicApiClient,
  Cc as createUcApiClient,
  kh as publicApiClient,
  Qh as ucApiClient
};
//# sourceMappingURL=halo-api-client.es.js.map
