---
layout: post
title: The OWASP Top 10 is a Market Index
# feature-img: "assets/img/pexels/desk-messy.jpeg"
tags: [Industry Insight, Macroeconomic Trends]
---

Web application vulnerabilities can be created, bought, and sold. There is,
therefore, a market for vulnerabilities. This market for vulnerabilities can
then be analyzed in economic terms: supply and demand, performance, sentiment
analysis, market segments, and trends.

One of the most popular ways to track a trend in the financial world is with an
index: published statistics or tradeable derivatives that move based on some
measurement of the underlying market. One such index is the CBOE Volatility
Index, which takes a statistical measurement ("volatility" of the SPY index)
and tries to map it to the value of exchange-traded VIXY shares. One example of
an index that isn't traded is the 
<a href="https://som.yale.edu/faculty-research/centers-initiatives/international-center-for-finance/data/stock-market-confidence-indices/stock-market-confidence-indices">Case-Shiller Crash Confidence index</a>,
which consists of data collected by a survey of investor sentiment in the stock market.

Since a market exists for web application vulnerabilities, and OWASP tracks a
statistic (risk per vulnerability category) of that market, OWASP's Top 10 can
be described as a risk-weighted index of the web application vulnerability
market.

The OWASP Top 10 is both constructed and used like a market index. Similar to
survey-based financial market indices, OWASP surveys organzations in order to
collect data for their Top 10. Specifically, a survey of the prevalence of each class of
vulnerabilities (a measure of vulnerability likelihood) is combined with
vulnerability impact ratings based on expert sentiment and technical realities.
The result is a risk score (risk = likelihood \* impact), and the ten
categories with the highest risk scores are published as the OWASP Top 10 each
year (or every three years, more typically). In addition to this index-like
construction and publication, the Top 10 is used as an index-like tool by the
industry. Many Application Security professionals routinely reference the OWASP
Top 10 to help prioritize risk mitigations.

Viewing the OWASP Top 10 as a market index produces many interesting research
questions which I hope to address: What would the index look like if it indexed
vulnerability prevalence alone? What would the index look like if risk
classifications were "personalized" to a specific organization's risk profile?
(OWASP actually recommends such personalization, but I doubt that organizations
take the time to do this.) How reliable, valid, and error-free is OWASP's
vulnerability prevalence survey as a measurement tool? What would a "Top 15"
look like?  How does the vulnerability and exploit development community react
to changes in the Top 10? Can movement in the Top 10 be predicted? What other
indices of Information Security can, or should, be created?

Do certain categories of vulnerabilities have an oversupply or
undersupply of research, and is the supply of vulnerability research for
certain vulnerability categories related to their visibility in the Top 10? If
security researchers participating in bug bounty programs get rewarded for
"spending" time looking for a specific category of vulnerability, what is the
return on their time investment? Does this return on investment vary
significantly between categories? Would researchers find more vulnerabilities
if they try to be "ahead of the curve" of Top 10 risks rather than following
the index?

Claiming the existence of a market for web application vulnerabilities also
suggests that other adjacent markets exist: other (non-web-application)
vulnerability markets, exploit markets, risk-mitigation ("defense solution")
markets, and more. These markets can be analyzed and compared. For example,
what makes an exploit developer decide to develop exploit code (e.g. a
Metasploit module) for a specific vulnerability? Do high-impact,
low-exploitability vulnerabilities typically get overlooked? In other words,
what is the relationship between vulnerability markets and exploit markets?
Such individual decisions of what product (exploit) to
produce with labour (work done by an exploit developer) falls firmly within the
realm of microeconomics. Broader trends may be studied with a
macroeconomic lens.


----

<!--span class="footnote">\*I am speculating on the targeted nature of the linked incident. Targeted
attack or not, prolific traders should see this incident as a cautionary tale.</span-->
