import{a5 as a,O as c,P as i,U as k,C as s,a7 as n,aH as p,Q as u,S as e}from"./framework.9c1109af.js";const d=p(`<h2 id="\u8868\u5355" tabindex="-1">\u8868\u5355 <a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a></h2><p>\u53EF\u914D\u7F6E\u578B\u8868\u5355\uFF0C\u652F\u6301\u591A\u79CD\u81EA\u5B9A\u4E49</p><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> form <span class="token keyword">from</span> <span class="token string">&#39;hzh-element-components/form&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;hzh-element-components/form/style.css&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><br>`,6),y={style:{padding:"1em",margin:"1em",border:"1px solid #eee"}},g=e("\u63D0\u4EA4"),h=e("\u91CD\u7F6E"),b=p(`<h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token operator">&lt;</span>hzh<span class="token operator">-</span>form <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;options&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>template #action<span class="token operator">=</span><span class="token string">&quot;scope&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>\u63D0\u4EA4<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>\u91CD\u7F6E<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>hzh<span class="token operator">-</span>form<span class="token operator">&gt;</span>

<span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u540D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u540D\u57282-6\u4F4D\u4E4B\u95F4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5BC6\u7801&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u5BC6\u7801\u57286-15\u4F4D\u4E4B\u95F4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">showPassword</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u9009\u62E9\u804C\u4F4D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;role&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u804C\u4F4D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;option&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7ECF\u7406&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;option&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u4E3B\u7BA1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;option&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5458\u5DE5&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkbox-group&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;like&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7231\u597D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u8DB3\u7403&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7BEE\u7403&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6392\u7403&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;radio-group&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6027\u522B&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;female&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u4FDD\u5BC6&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;not&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;editor&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;desc&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u63CF\u8FF0&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u63CF\u8FF0&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">options</td><td>\u8868\u5355\u914D\u7F6E\u9879</td><td>FormOptions[]</td><td>\u5FC5\u586B</td><td>-</td></tr><tr><td style="text-align:left;">httpRequest</td><td>\u4E0A\u4F20\u81EA\u5B9A\u4E49\u65B9\u6CD5</td><td>function</td><td>-</td><td>-</td></tr></tbody></table><h4 id="formoptions\u6570\u636E\u683C\u5F0F" tabindex="-1">FormOptions\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#formoptions\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">key</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td>\u8868\u5355\u9879\u7684\u7C7B\u578B</td><td>string</td></tr><tr><td style="text-align:left;">value</td><td>\u8868\u5355\u9879\u7684\u521D\u59CB\u503C</td><td>any</td></tr><tr><td style="text-align:left;">label</td><td>\u8868\u5355\u9879\u7684label</td><td>string</td></tr><tr><td style="text-align:left;">prop</td><td>\u8868\u5355\u7684\u6807\u8BC6</td><td>string</td></tr><tr><td style="text-align:left;">rules</td><td>\u8868\u5355\u9879\u7684\u9A8C\u8BC1\u89C4\u5219</td><td>\u540C<code>element-plus</code>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219\u4E00\u81F4</td></tr><tr><td style="text-align:left;">placeholder</td><td>\u8868\u5355\u9879\u7684\u5360\u4F4D\u7B26</td><td>string</td></tr><tr><td style="text-align:left;">attrs</td><td>\u8868\u5355\u9879\u7684\u5C5E\u6027</td><td>\u540C<code>element-plus</code>\u8868\u5355\u7EC4\u4EF6\u5C5E\u6027\u4E00\u81F4</td></tr><tr><td style="text-align:left;">children</td><td>\u8868\u5355\u9879\u7684\u5B50\u5143\u7D20</td><td>FormOptions[]</td></tr><tr><td style="text-align:left;">uploadAttrs</td><td>\u4E0A\u4F20\u9009\u9879\u7684\u914D\u7F6E</td><td>\u540C<code>element-plus</code>\u7684<code>upload</code>\u7EC4\u4EF6\u7684\u5C5E\u6027\u4E00\u81F4</td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">on-preview</td><td>\u70B9\u51FB\u6587\u4EF6\u5217\u8868\u4E2D\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td>file: File</td></tr><tr><td style="text-align:left;">on-remove</td><td>\u6587\u4EF6\u5217\u8868\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td>file: File, fileList: FileList</td></tr><tr><td style="text-align:left;">on-sucess</td><td>\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u94A9\u5B50</td><td>response: any, file: File, fileList: FileList</td></tr><tr><td style="text-align:left;">on-error</td><td>\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u65F6\u7684\u94A9\u5B50</td><td>err: any, file: File, fileList: FileList</td></tr><tr><td style="text-align:left;">on-progress</td><td>\u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u94A9\u5B50</td><td>file: File, fileList: FileList</td></tr><tr><td style="text-align:left;">on-change</td><td>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u65F6\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\u3002\u82E5\u8FD4\u56DEfalse\u6216\u8005\u8FD4\u56DEPromise\u4E14\u88ABreject\uFF0C\u5219\u7EC8\u6B62\u4E0A\u4F20</td><td>file: File</td></tr><tr><td style="text-align:left;">on-upload</td><td>\u6587\u4EF6\u4E0A\u4F20\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\u3002\u82E5\u8FD4\u56DEfalse\u6216\u8005\u8FD4\u56DEPromise\u4E14\u88ABreject\uFF0C\u5219\u7EC8\u6B62\u5220\u9664</td><td>file: File, fileList: FileList</td></tr><tr><td style="text-align:left;">on-exceed</td><td>\u6587\u4EF6\u8D85\u51FA\u4E2A\u6570\u9650\u5236\u65F6\u7684\u94A9\u5B50</td><td>file: File, fileList: FileList</td></tr></tbody></table><h4 id="slots\u63D2\u69FD" tabindex="-1">slots\u63D2\u69FD <a class="header-anchor" href="#slots\u63D2\u69FD" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">action</td><td>\u8868\u5355\u6309\u94AE\u7684\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0Cform\uFF1A \u8868\u5355\u793A\u4F8B\uFF0Cmodel\uFF1A \u8868\u5355\u6570\u636E</td></tr><tr><td style="text-align:left;">uploadArea</td><td>\u4E0A\u4F20\u7EC4\u4EF6\u7684\u5360\u4F4D\u7B26</td></tr><tr><td style="text-align:left;">uploadTip</td><td>\u4E0A\u4F20\u7EC4\u4EF6\u7684\u63D0\u793A\u4FE1\u606F</td></tr></tbody></table>`,11),F='{"title":"\u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8868\u5355","slug":"\u8868\u5355"},{"level":3,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":3,"title":"Api","slug":"api"}],"relativePath":"form/index.md","lastUpdated":1659671936571}',m={},w=Object.assign(m,{__name:"index",setup(f){let o=[{type:"input",value:"",label:"\u7528\u6237\u540D",prop:"username",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:2,max:6,message:"\u7528\u6237\u540D\u57282-6\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"\u5BC6\u7801",prop:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:6,max:15,message:"\u5BC6\u7801\u57286-15\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"\u8BF7\u9009\u62E9\u804C\u4F4D",prop:"role",label:"\u804C\u4F4D",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"option",label:"\u7ECF\u7406",value:"1"},{type:"option",label:"\u4E3B\u7BA1",value:"2"},{type:"option",label:"\u5458\u5DE5",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"\u7231\u597D",rules:[{required:!0,message:"\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"checkbox",label:"\u8DB3\u7403",value:"1"},{type:"checkbox",label:"\u7BEE\u7403",value:"2"},{type:"checkbox",label:"\u6392\u7403",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"radio",label:"\u7537",value:"male"},{type:"radio",label:"\u5973",value:"female"},{type:"radio",label:"\u4FDD\u5BC6",value:"not"}]},{type:"editor",value:"123",prop:"desc",label:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",rules:[{required:!0,message:"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}];return(_,x)=>{const t=a("el-button"),r=a("m-form"),l=a("ClientOnly");return c(),i("div",null,[d,k("div",y,[s(l,null,{default:n(()=>[s(r,{options:u(o)},{action:n(v=>[s(t,{type:"primary"},{default:n(()=>[g]),_:1}),s(t,null,{default:n(()=>[h]),_:1})]),_:1},8,["options"])]),_:1})]),b])}}});export{F as __pageData,w as default};
