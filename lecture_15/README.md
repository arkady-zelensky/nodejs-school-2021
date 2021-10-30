# Lecture 15

1. Setup Redis and RabbitMQ services with docker

2. Add caching mechanism for one of GET queries with Redis. Set caching timeout to 60s for testing purposes

3. Add event user_created and an event handler for that event that will create channer for this user automatically (on background). You don't need to create separate service or instance for handling event. Use the same instance for throwing event and handling. For events system use RabbitMQ
