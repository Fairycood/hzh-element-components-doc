import{a5 as s,O as r,P as l,U as c,C as t,a7 as i,aH as n}from"./framework.9c1109af.js";const k=n(`__VP_STATIC_START__<h2 id="\u901A\u77E5\u83DC\u5355" tabindex="-1">\u901A\u77E5\u83DC\u5355 <a class="header-anchor" href="#\u901A\u77E5\u83DC\u5355" aria-hidden="true">#</a></h2><p>\u63D0\u4F9Btab\u5207\u6362\u7684\u901A\u77E5\u5217\u8868</p><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> list <span class="token keyword">from</span> <span class="token string">&#39;hzh-element-components/list&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;hzh-element-components/list/style.css&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><br>__VP_STATIC_END__`,6),d={style:{padding:"1em",margin:"1em",border:"1px solid #eee"}},u=n(`__VP_STATIC_START__<h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token operator">&lt;</span>hzh<span class="token operator">-</span>list <span class="token operator">:</span>list<span class="token operator">=</span><span class="token string">&quot;list&quot;</span> <span class="token operator">:</span>actions<span class="token operator">=</span><span class="token string">&quot;actions&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>hzh<span class="token operator">-</span>list<span class="token operator">&gt;</span>

<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8482\u59C6\xB7\u5E93\u514B\u56DE\u590D\u4E86\u4F60\u7684\u90AE\u4EF6&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-08 14:33:18&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4E54\u7EB3\u68EE\xB7\u4F0A\u592B\u9080\u8BF7\u4F60\u53C2\u52A0\u4F1A\u8BAE&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-08 14:33:19&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65AF\u8482\u592B\xB7\u6C83\u5179\u5C3C\u4E9A\u514B\u5DF2\u6279\u51C6\u4E86\u4F60\u7684\u4F11\u5047\u7533\u8BF7&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-08 14:33:20&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png&#39;</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5173\u6CE8&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&#39;3\u5C0F\u65F6\u524D&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&#39;3\u5C0F\u65F6\u524D&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&#39;3\u5C0F\u65F6\u524D&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4EE3\u529E&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4EFB\u52A1\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;\u4EFB\u52A1\u9700\u8981\u5728 2022-01-12 20:00 \u524D\u542F\u52A8&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;\u672A\u5F00\u59CB&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tagType</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;\u51A0\u9716\u63D0\u4EA4\u4E8E 2022-01-06\uFF0C\u9700\u5728 2022-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;\u9A6C\u4E0A\u5230\u671F&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tagType</span><span class="token operator">:</span> <span class="token string">&#39;danger&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4FE1\u606F\u5B89\u5168\u8003\u8BD5&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;\u6307\u6D3E\u7AF9\u5C14\u4E8E 2022-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;\u5DF2\u8017\u65F68\u5929&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tagType</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6E05\u7A7A\u4EE3\u529E&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u67E5\u770B\u66F4\u591A&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;edit&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">list</td><td>\u5217\u8868\u7684\u5185\u5BB9</td><td>ListOptions[]</td><td>\u5FC5\u586B</td><td>-</td></tr><tr><td style="text-align:left;">actions</td><td>\u64CD\u4F5C\u7684\u5185\u5BB9</td><td>ActionOptions[]</td><td>-</td><td>[]</td></tr></tbody></table><h4 id="listoptions\u6570\u636E\u683C\u5F0F" tabindex="-1">ListOptions\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#listoptions\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">key</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td>tab\u7684\u6807\u9898</td><td>string</td></tr><tr><td style="text-align:left;">content</td><td>\u5217\u8868\u5185\u5BB9</td><td>ListItem[]</td></tr></tbody></table><h4 id="listitem\u6570\u636E\u683C\u5F0F" tabindex="-1">ListItem\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#listitem\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">key</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;">avatar</td><td>\u5934\u50CF</td><td>string</td></tr><tr><td style="text-align:left;">title</td><td>\u6807\u9898</td><td>string</td></tr><tr><td style="text-align:left;">desc</td><td>\u63CF\u8FF0</td><td>string</td></tr><tr><td style="text-align:left;">time</td><td>\u65F6\u95F4</td><td>string</td></tr><tr><td style="text-align:left;">tag</td><td>\u6807\u7B7E\u5185\u5BB9</td><td>string</td></tr><tr><td style="text-align:left;">tagType</td><td>\u6807\u7B7E\u7C7B\u578B</td><td>&#39; &#39; / sucess / info /warning / danger</td></tr></tbody></table><h4 id="actionoptions\u6570\u636E\u683C\u5F0F" tabindex="-1">ActionOptions\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#actionoptions\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">key</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;">text</td><td>\u64CD\u4F5C\u6807\u9898</td><td>string</td></tr><tr><td style="text-align:left;">icon</td><td>\u64CD\u4F5C\u56FE\u6807</td><td>string</td></tr></tbody></table>__VP_STATIC_END__`,11),_='{"title":"\u901A\u77E5\u83DC\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u901A\u77E5\u83DC\u5355","slug":"\u901A\u77E5\u83DC\u5355"},{"level":3,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":3,"title":"Api","slug":"api"}],"relativePath":"list/index.md","lastUpdated":1659671945617}',y={},f=Object.assign(y,{__name:"index",setup(g){const a=[{title:"\u901A\u77E5",content:[{title:"\u8482\u59C6\xB7\u5E93\u514B\u56DE\u590D\u4E86\u4F60\u7684\u90AE\u4EF6",time:"2022-05-08 14:33:18",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"},{title:"\u4E54\u7EB3\u68EE\xB7\u4F0A\u592B\u9080\u8BF7\u4F60\u53C2\u52A0\u4F1A\u8BAE",time:"2022-05-08 14:33:19",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"},{title:"\u65AF\u8482\u592B\xB7\u6C83\u5179\u5C3C\u4E9A\u514B\u5DF2\u6279\u51C6\u4E86\u4F60\u7684\u4F11\u5047\u7533\u8BF7",time:"2022-05-08 14:33:20",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"}]},{title:"\u5173\u6CE8",content:[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",desc:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",time:"3\u5C0F\u65F6\u524D"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",desc:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",time:"3\u5C0F\u65F6\u524D"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",desc:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",time:"3\u5C0F\u65F6\u524D"}]},{title:"\u4EE3\u529E",content:[{title:"\u4EFB\u52A1\u540D\u79F0",desc:"\u4EFB\u52A1\u9700\u8981\u5728 2022-01-12 20:00 \u524D\u542F\u52A8",tag:"\u672A\u5F00\u59CB",tagType:""},{title:"\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",desc:"\u51A0\u9716\u63D0\u4EA4\u4E8E 2022-01-06\uFF0C\u9700\u5728 2022-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",tag:"\u9A6C\u4E0A\u5230\u671F",tagType:"danger"},{title:"\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",desc:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2022-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",tag:"\u5DF2\u8017\u65F68\u5929",tagType:"warning"}]}],p=[{text:"\u6E05\u7A7A\u4EE3\u529E",icon:"delete"},{text:"\u67E5\u770B\u66F4\u591A",icon:"edit"}];return(h,m)=>{const e=s("m-list"),o=s("ClientOnly");return r(),l("div",null,[k,c("div",d,[t(o,null,{default:i(()=>[t(e,{list:a,actions:p})]),_:1})]),u])}}});export{_ as __pageData,f as default};
