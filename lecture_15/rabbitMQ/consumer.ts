import { connect } from "amqplib";
const amqpUrl = process.env.AMQP_URL || "amqp://localhost:5673";

(async () => {
  const connection = await connect(amqpUrl, "heartbeat=60");
  const channel = await connection.createChannel();
  channel.prefetch(2);

  const queue = "user.sign_up_email";

  process.once("SIGINT", async () => {
    console.log("got sigint, closing connection");
    await channel.close();

    await connection.close();

    process.exit(0);
  });

  await channel.assertQueue(queue, { durable: true });

  await channel.consume(
    queue,
    async (msg) => {
      console.log("processing messages");

      console.log(msg.content.toString());

      channel.ack(msg);
    },
    {
      noAck: false,
      consumerTag: "email_consumer",
    }
  );

  console.log(" [*] Waiting for messages. To exit press CTRL+C");
})();
