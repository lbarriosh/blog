---
title: If it's worth doing, it's worth measuring
date: "2020-09-06T11:00:00.000Z"
description: "Life is easier when we back technical choices with actual data"
---

One of my favourite aspects of Software Engineering is the vast array of options to solve a particular problem.
For instance, let's say that we need to build a very dumb playlist microservice, which exposes an API
to run simple queries on a playlist database and caches the results.

* there are many programming languages out there, but usually our employer will have a preferred stack.
* next, we should pick a microservices framework. In the Java world, we can use Spring Boot, Eclipse Vert.X, Akka,...
* we could use PostgreSQL, MySQL,... or NoSQL databases like DynamoDB or MongoDB to store the data.
* we may use Redis, Memcached,... or simply an on-heap cache to cache the results.

Obviously we need to deliver a working service after a few days, so we'll make some technical choices. After a few rounds of testing
in our dev and staging environments, our service will be ready to handle production traffic. And that's when the real fun begins.

How can we actually know that our service is working well? We can start by adding **metrics**. Off the top of my head,

* the _standard performance metrics_ (i.e. CPU, memory, network usage, heap usage, cache hits and misses) will guide us if we need to scale the service and
  will flag some performance and reliability problems.
* the _response times_, the _amount of successful and failed responses_ for each API method, the _summarized error causes_ and
  the _request and response sizes_ (grouped by their percentile buckets) can help us catch bugs, and are crucial to roll back buggy releases
  before they can do us any harm.
* some _business metrics for each request_ (i.e. number of songs per returned playlist) will help us triage edge cases.

Metrics are useless without their companion **aggregation rules**. Thinking how to _aggregate_ the metrics is critical: if we don't do it properly,
our **alerting rules** and **dashboards** will only make noise.

Next, we need to **log** a certain proportion of errors (i.e. if the traffic is high the storage requirements to log everything might be insane),
along with some request and response pairs. So, with all this, we should be good to go.

Time goes on, our service becomes gradually outdated and it's time to fix it. And in the meantime, _more_ technical choices have appeared
in the scene. Many offer you faster development cycles or better performance. But how can we check that they deliver on their promises?

In a nutshell, we can put together a small **proof of concept** and use the same request/response pairs we've been logging all along
in a **load test suite**. Remember: we are feeding the PoC service _real_ production requests, and we can compare its metrics with our
current, production ones.

Moreover, we can keep taking advantage of load tests in minor maintenance operations (i.e. update the frameworks you are using) or prior
to a major business event (i.e. the release of a new playlist product that will increase the load of the service). Regardless of how the
service needs to evolve, we'll have the **data** to **guide** and **measure the impact** of our **decisions**.
