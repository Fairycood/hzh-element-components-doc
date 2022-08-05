import{a5 as a,O as k,P as u,U as n,C as s,a7 as p,aH as o,Q as e}from"./framework.9c1109af.js";const d=o(`__VP_STATIC_START__<h2 id="\u5BFC\u822A\u83DC\u5355" tabindex="-1">\u5BFC\u822A\u83DC\u5355 <a class="header-anchor" href="#\u5BFC\u822A\u83DC\u5355" aria-hidden="true">#</a></h2><p>\u4FA7\u8FB9\u680F\u83DC\u5355\uFF0C\u652F\u6301\u65E0\u9650\u5C42\u7EA7</p><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> menu <span class="token keyword">from</span> <span class="token string">&#39;hzh-element-components/menu&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;hzh-element-components/list/style.css&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><br>__VP_STATIC_END__`,6),y={style:{padding:"1em",margin:"1em",border:"1px solid #eee"}},m={style:{display:"flex"}},h={style:{flex:"1"},class:"menu"},g={style:{flex:"1"},class:"menu"},_=o(`__VP_STATIC_START__<h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;display: flex;&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;flex:1;&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;menu&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>hzh<span class="token operator">-</span>menu <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">&quot;data1&quot;</span> defaultActive<span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>hzh<span class="token operator">-</span>menu<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;flex:1;&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;menu&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>hzh<span class="token operator">-</span>infinite<span class="token operator">-</span>menu <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">&quot;data2&quot;</span> defaultActive<span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>hzh<span class="token operator">-</span>infinite<span class="token operator">-</span>menu<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token keyword">let</span> data1 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A3&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A3-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;3-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">let</span> data2 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A3&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A3-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;3-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A3-1-1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;3-1-1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A3-1-1-1&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;3-1-1-1&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5BFC\u822A3-1-1-1-1&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;3-1-1-1-1&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td>\u5BFC\u822A\u83DC\u5355\u7684\u6570\u636E</td><td>any[]</td><td>\u5FC5\u586B</td><td>-</td></tr><tr><td style="text-align:left;">defaultActive</td><td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u83DC\u5355\u7684index\u503C</td><td>string</td><td>-</td><td>-</td></tr><tr><td style="text-align:left;">router</td><td>\u662F\u5426\u662F\u8DEF\u7531\u6A21\u5F0F</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td style="text-align:left;">name</td><td>\u83DC\u5355\u6807\u9898\u7684\u952E\u540D</td><td>string</td><td>-</td><td>name</td></tr><tr><td style="text-align:left;">index</td><td>\u83DC\u5355\u6807\u8BC6\u7684\u952E\u540D</td><td>string</td><td>-</td><td>index</td></tr><tr><td style="text-align:left;">icon</td><td>\u83DC\u5355\u56FE\u6807\u7684\u952E\u540D</td><td>string</td><td>-</td><td>icon</td></tr><tr><td style="text-align:left;">children</td><td>\u83DC\u5355\u5B50\u83DC\u5355\u7684\u952E\u540D</td><td>string</td><td>-</td><td>children</td></tr></tbody></table><p>\u7EE7\u627F<code>element-plus</code> <code>menu</code>\u7EC4\u4EF6\u7684\u6240\u6709\u5C5E\u6027</p>__VP_STATIC_END__`,6),b='{"title":"\u5BFC\u822A\u83DC\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BFC\u822A\u83DC\u5355","slug":"\u5BFC\u822A\u83DC\u5355"},{"level":3,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":3,"title":"Api","slug":"api"}],"relativePath":"menu/index.md","lastUpdated":1659671960698}',x={},A=Object.assign(x,{__name:"index",setup(f){let r=[{name:"\u5BFC\u822A1",index:"1",icon:"Document"},{name:"\u5BFC\u822A2",index:"2",icon:"Document"},{name:"\u5BFC\u822A3",index:"3",icon:"Document",children:[{name:"\u5BFC\u822A3-1",index:"3-1",icon:"Document"}]}],l=[{name:"\u5BFC\u822A1",index:"1",icon:"Document"},{name:"\u5BFC\u822A2",index:"2",icon:"Document"},{name:"\u5BFC\u822A3",index:"3",icon:"Document",children:[{name:"\u5BFC\u822A3-1",index:"3-1",icon:"Document",children:[{name:"\u5BFC\u822A3-1-1",index:"3-1-1",icon:"Document",children:[{name:"\u5BFC\u822A3-1-1-1",index:"3-1-1-1",icon:"Document",children:[{name:"\u5BFC\u822A3-1-1-1-1",index:"3-1-1-1-1",icon:"Document"}]}]}]}]}];return(v,D)=>{const c=a("m-menu"),t=a("ClientOnly"),i=a("m-infinite-menu");return k(),u("div",null,[d,n("div",y,[n("div",m,[n("div",h,[s(t,null,{default:p(()=>[s(c,{data:e(r),defaultActive:"1"},null,8,["data"])]),_:1})]),n("div",g,[s(t,null,{default:p(()=>[s(i,{data:e(l),defaultActive:"2"},null,8,["data"])]),_:1})])])]),_])}}});export{b as __pageData,A as default};
