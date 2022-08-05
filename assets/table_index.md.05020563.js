import{a5 as n,O as i,P as k,U as u,C as t,a7 as a,aH as p,Q as e,S as o}from"./framework.9c1109af.js";const g=p(`<h2 id="\u8868\u683C" tabindex="-1">\u8868\u683C <a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a></h2><p>\u53EF\u914D\u7F6E\u578B\u8868\u683C\uFF0C\u652F\u6301\u66F4\u591A\u81EA\u5B9A\u4E49</p><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> table <span class="token keyword">from</span> <span class="token string">&#39;hzh-element-components/table&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;hzh-element-components/table/style.css&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><br>`,6),h={style:{padding:"1em",margin:"1em",border:"1px solid #eee"}},y=o("\u7F16\u8F91"),b=o("\u5220\u9664"),f=p(`<h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token operator">&lt;</span>hzh<span class="token operator">-</span>table
  <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;options&quot;</span>
  <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">&quot;tableData&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>template #action<span class="token operator">=</span><span class="token string">&quot;scope&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>\u7F16\u8F91<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;danger&quot;</span><span class="token operator">&gt;</span>\u5220\u9664<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>hzh<span class="token operator">-</span>table<span class="token operator">&gt;</span>

<span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u65E5\u671F&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u64CD\u4F5C&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">let</span> tableData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-03&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-02&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-04&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom3&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-01&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom4&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">options</td><td>\u8868\u683C\u914D\u7F6E\u9879</td><td>TableOptions[]</td><td>\u5FC5\u586B</td><td>-</td></tr><tr><td style="text-align:left;">data</td><td>\u8868\u683C\u6570\u636E</td><td>any[]</td><td>\u5FC5\u586B</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingText</td><td>\u52A0\u8F7D\u6587\u6848</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingBackground</td><td>\u52A0\u8F7D\u80CC\u666F\u989C\u8272</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingSpinner</td><td>\u52A0\u8F7D\u56FE\u6807\u540D</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingSvg</td><td>\u52A0\u8F7D\u56FE\u6807svg</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">elementLoadingSvgViewBox</td><td>\u52A0\u8F7D\u56FE\u6807svg\u7684\u914D\u7F6E</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">editIcon</td><td>\u7F16\u8F91\u663E\u793A\u7684\u56FE\u6807</td><td>string</td><td>-</td><td>Edit</td></tr><tr><td style="text-align:left;">isEditRow</td><td>\u662F\u5426\u53EF\u7528\u7F16\u8F91\u884C</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td style="text-align:left;">editRowIndex</td><td>\u7F16\u8F91\u884C\u6309\u94AE\u7684\u6807\u8BC6</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">pagination</td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td style="text-align:left;">paginationAlign</td><td>\u663E\u793A\u5206\u9875\u7684\u5BF9\u9F50\u65B9\u5F0F</td><td>left / center / right</td><td>left / center / right</td><td>left</td></tr><tr><td style="text-align:left;">currentPage</td><td>\u5F53\u524D\u662F\u7B2C\u51E0\u9875</td><td>number</td><td>-</td><td>1</td></tr><tr><td style="text-align:left;">pageSize</td><td>\u5F53\u524D\u4E00\u9875\u591A\u5C11\u6761\u6570\u636E</td><td>number</td><td>-</td><td>10</td></tr><tr><td style="text-align:left;">pageSizes</td><td>\u663E\u793A\u5206\u9875\u6570\u636E\u591A\u5C11\u6761\u7684\u9009\u9879</td><td>number[]</td><td>-</td><td>[10, 20, 30, 40]</td></tr><tr><td style="text-align:left;">total</td><td>\u6570\u636E\u603B\u6570</td><td>number</td><td>-</td><td>0</td></tr></tbody></table><h4 id="formoptions\u6570\u636E\u683C\u5F0F" tabindex="-1">FormOptions\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#formoptions\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">key</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;">prop</td><td>\u8868\u683C\u6570\u636E\u5B57\u6BB5\u540D</td><td>string</td></tr><tr><td style="text-align:left;">label</td><td>\u8868\u683C\u8868\u5934\u540D\u79F0</td><td>string</td></tr><tr><td style="text-align:left;">width</td><td>\u8868\u683C\u5355\u5143\u683C\u5BBD\u5EA6</td><td>string</td></tr><tr><td style="text-align:left;">align</td><td>\u8868\u683C\u5355\u5143\u683C\u5BF9\u5176\u65B9\u5F0F</td><td>left / center / right</td></tr><tr><td style="text-align:left;">slot</td><td>\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u7684\u63D2\u69FD\u540D</td><td>string</td></tr><tr><td style="text-align:left;">action</td><td>\u662F\u5426\u662F\u7F16\u8F91\u9009\u9879</td><td>boolean</td></tr><tr><td style="text-align:left;">editable</td><td>\u5355\u5143\u683C\u662F\u5426\u53EF\u7F16\u8F91</td><td>boolean</td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">confirm</td><td>\u53EF\u7F16\u8F91\u5355\u5143\u683C\u786E\u8BA4\u4E8B\u4EF6</td><td>scope: \u5F53\u524D\u884C\u6570\u636E</td></tr><tr><td style="text-align:left;">cancel</td><td>\u53EF\u7F16\u8F91\u5355\u5143\u683C\u53D6\u6D88\u4E8B\u4EF6</td><td>scope: \u5F53\u524D\u884C\u6570\u636E</td></tr><tr><td style="text-align:left;">size-change</td><td>\u5206\u9875\u5F53\u524D\u663E\u793A\u6761\u6570\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>val: \u5F53\u524D\u9875\u6761\u6570</td></tr><tr><td style="text-align:left;">current-change</td><td>\u5206\u9875\u5F53\u524D\u9875\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>val: \u5F53\u524D\u9875</td></tr></tbody></table><h4 id="slots\u63D2\u69FD" tabindex="-1">slots\u63D2\u69FD <a class="header-anchor" href="#slots\u63D2\u69FD" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">cellEdit</td><td>\u81EA\u5B9A\u4E49\u53EF\u7F16\u8F91\u5355\u5143\u683C\u5185\u5BB9</td></tr><tr><td style="text-align:left;">editRow</td><td>\u81EA\u5B9A\u4E49\u53EF\u7F16\u8F91\u884C\u6309\u94AE\u5185\u5BB9</td></tr><tr><td style="text-align:left;">action</td><td>\u81EA\u5B9A\u4E49\u7F16\u8F91\u533A\u57DF\u5185\u5BB9</td></tr></tbody></table>`,11),A='{"title":"\u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8868\u683C","slug":"\u8868\u683C"},{"level":3,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":3,"title":"Api","slug":"api"}],"relativePath":"table/index.md","lastUpdated":1659672053394}',m={},q=Object.assign(m,{__name:"index",setup(_){let r=[{prop:"date",label:"\u65E5\u671F",align:"center"},{prop:"name",label:"\u59D3\u540D",align:"center"},{prop:"address",label:"\u5730\u5740",align:"center"},{label:"\u64CD\u4F5C",action:!0,align:"center"}],l=[{date:"2022-05-03",name:"Tom1",address:"No. 189, Grove St, Los Angeles"},{date:"2022-05-02",name:"Tom2",address:"No. 189, Grove St, Los Angeles"},{date:"2022-05-04",name:"Tom3",address:"No. 189, Grove St, Los Angeles"},{date:"2022-05-01",name:"Tom4",address:"No. 189, Grove St, Los Angeles"}];return(x,v)=>{const s=n("el-button"),d=n("m-table"),c=n("ClientOnly");return i(),k("div",null,[g,u("div",h,[t(c,null,{default:a(()=>[t(d,{options:e(r),data:e(l)},{action:a(T=>[t(s,{size:"small",type:"primary"},{default:a(()=>[y]),_:1}),t(s,{size:"small",type:"danger"},{default:a(()=>[b]),_:1})]),_:1},8,["options","data"])]),_:1})]),f])}}});export{A as __pageData,q as default};
