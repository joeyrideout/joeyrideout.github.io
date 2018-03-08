---
layout: post
title: Security for Exchanges
img: "assets/img/portfolio/github.png"
date: February 26 2018
tags: [Security, Guides]
---

Securing cryptocurrency exchange is, without being hyperbolic, a monumental
task. Millions of dollars of digital assets are being managed, often with
hundreds of different wallet implementations, with a high volume of users
logged in to trade, deposit, and withdraw them at any moment. This complexity
leads to a host of security demands: ensuring the integrity and availability of
trades, ensuring consistency between user account balances and the distributed
ledger, and offering users bulletproof authentication mechanisms, to name a
few.

As noted below in <i>Ongoing Research</i>, concrete and accessible guidance for
securing a cryptocurrency exchange is currently lacking. However, since
exchanges are largely web applications and APIs, their development falls firmly
within the realm of Web Application Security. Many great resources exist within
that domain to help developers secure their web applications that I will not
attempt to replicate here. I will outline those more general guides before
diving into some exchange-specific issues that I have observed so far as well
as how to address them.

## Web Application Security

The most prominent resource for web application security is the
[OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project).
These ten types of vulnerabiliteis are the quintessential items that you need
to pay attention to when developing a secure web application. If you are in
charge of building or maintaining a cryptocurrency exchange, and you do not
know the Top 10 like the back of your hand, you should make it a priority
before something bad happens. Period. This Top 10 is seen as "basic" or
"low-hanging fruit" by application security practitioners because they are the
juiciest targets that hackers will try first when inspecting your exchange for
vulnerabilities. These ten are priorities because they are the most common and
high-impact risks. Hackers who thoroughly check your exchange for each of the
Top 10 vulnerabilities and come up dry may look to other exchanges for easier
targets. Hackers that catch issues on your exchange that are within the Top 10
will smell blood and dig deeper.

On the same vein is 
[Mozilla's web security cheat sheet](https://infosec.mozilla.org/guidelines/web_security.html).
Mozilla has put together a fantastic guide of application security controls
(many of which at least partially mitigate OWASP Top 10 risks). They even went
to the trouble of rating each one based on the security benefits and
implementation difficulty. Because exchanges are businesses and businesses need
to prioritize tasks and budget resources, these cost-benefit rankings are very
pragmatic.

## Exchange-Specific Application Security

<b>Race Conditions</b>
A number of security incidents observed on cryptocurrency exchanges could be
described as race conditions, or "time of check to time of use" (TOCTOU)
vulnerabilities. These conditions commonly arise in accounting software,
particularly when accounting is being done between disparate accounting
systems: between a distributed ledger and an exchange order book, for example.

In the wild: BitGrail Hack, ...

<b>Phishing Attacks</b>

Beyond the lazy new "send ETH" Twitter scams, phishing attacks targeting
cryptocurrency exchange users are a rising threat. This threat not only calls
for careful implementation of technical controls, but behavioural controls as
well. On the technical side, many phishing attacks exploit a lack of effective
cross-site application security controls: CSRF protections, cross-origin access
control, XSS mitigations, and similar. On the behavioural side, you need to
raise awareness for your users while also spending time covering your
weaknesses contextually: buying up typo domain names, unicode lookalike domain
names, and similar social media handles, while also diligently seaching for,
reporting and issuing takedown requests to potential imitator properties.

In the wild: Binance attack

## Ongoing Research

Because cryptocurrency exchanges are private organizations, there is currently
a lack of concrete information about how the "good" exchanges operate compared
to how the "bad" ones operate. Researching how exchanges secure themselves behind
the scenes is something that I am actively researching. Research questions include:

- Which security controls were the most cost-effective for your exchange to implement? (Technical or otherwise.)
- What level of auditing and logging do you perform, and which SIEM platform(s) do you use?
- How much of your security system is automated? What happens when an "alarm" is tripped?
- What level of security awareness do you provide to support staff?
- How do incorporate security into your software development life cycle?
- How do you conduct penetration testing? External teams, internal testers, a mix?
- Which part of an exchange's software is most critical, and what have you
  learned while maintaining those systems?

If you or someone you know works at a cryptocurrency exchange and are
interested in contributing to this community resource, please [have them get in
touch with me](/contact/).

