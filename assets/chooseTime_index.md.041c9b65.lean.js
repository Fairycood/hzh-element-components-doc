import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{a5 as t,O as l,P as r,U as i,C as e,a7 as o,aH as a}from"./framework.9c1109af.js";const v='{"title":"\u65F6\u95F4\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65F6\u95F4\u9009\u62E9\u5668","slug":"\u65F6\u95F4\u9009\u62E9\u5668"},{"level":3,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":3,"title":"Api","slug":"api"}],"relativePath":"chooseTime/index.md","lastUpdated":1659671811432}',h={},c=a(`__VP_STATIC_START__<h2 id="\u65F6\u95F4\u9009\u62E9\u5668" tabindex="-1">\u65F6\u95F4\u9009\u62E9\u5668 <a class="header-anchor" href="#\u65F6\u95F4\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><p>\u63D0\u4F9B\u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u9009\u62E9\u8054\u52A8</p><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> chooseTime <span class="token keyword">from</span> <span class="token string">&#39;hzh-element-components/chooseTime&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;hzh-element-components/chooseTime/style.css&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>chooseTime<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><br>__VP_STATIC_END__`,6),p={style:{padding:"1em",margin:"1em",border:"1px solid #eee"}},g=a(`__VP_STATIC_START__<h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hzh-choose-time</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hzh-choose-time</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">startPlaceholder</td><td>\u5F00\u59CB\u65F6\u95F4\u5360\u4F4D\u7B26</td><td>string</td><td>-</td><td>\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4</td></tr><tr><td style="text-align:left;">endPlaceholder</td><td>\u7ED3\u675F\u65F6\u95F4\u5360\u4F4D\u7B26</td><td>string</td><td>-</td><td>\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4</td></tr><tr><td style="text-align:left;">startTimeStart</td><td>\u5F00\u59CB\u65F6\u95F4\u7684\u5F00\u59CB\u9009\u62E9</td><td>string</td><td>-</td><td>08:00</td></tr><tr><td style="text-align:left;">startStep</td><td>\u5F00\u59CB\u65F6\u95F4\u7684\u6B65\u8FDB</td><td>string</td><td>-</td><td>00:30</td></tr><tr><td style="text-align:left;">startTimeEnd</td><td>\u5F00\u59CB\u65F6\u95F4\u7684\u7ED3\u675F\u9009\u62E9</td><td>string</td><td>-</td><td>24:00</td></tr><tr><td style="text-align:left;">endTimeStart</td><td>\u7ED3\u675F\u65F6\u95F4\u7684\u5F00\u59CB\u9009\u62E9</td><td>string</td><td>-</td><td>08:00</td></tr><tr><td style="text-align:left;">endStep</td><td>\u7ED3\u675F\u65F6\u95F4\u7684\u6B65\u8FDB</td><td>string</td><td>-</td><td>00:30</td></tr><tr><td style="text-align:left;">endTimeEnd</td><td>\u7ED3\u675F\u65F6\u95F4\u7684\u7ED3\u675F\u9009\u62E9</td><td>string</td><td>-</td><td>24:00</td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">startChange</td><td>\u5F00\u59CB\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1</td><td>val: string, \u5F00\u59CB\u65F6\u95F4</td></tr><tr><td style="text-align:left;">endChange</td><td>\u7ED3\u675F\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1</td><td>val: Value</td></tr></tbody></table><h4 id="value\u6570\u636E\u683C\u5F0F" tabindex="-1">Value\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#value\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">key</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;">startTime</td><td>\u5F00\u59CB\u65F6\u95F4</td><td>string</td></tr><tr><td style="text-align:left;">endTime</td><td>\u7ED3\u675F\u65F6\u95F4</td><td>string</td></tr></tbody></table>__VP_STATIC_END__`,9);function _(m,u,f,x,y,k){const d=t("m-choose-time"),s=t("ClientOnly");return l(),r("div",null,[c,i("div",p,[e(s,null,{default:o(()=>[e(d)]),_:1})]),g])}var C=n(h,[["render",_]]);export{v as __pageData,C as default};
