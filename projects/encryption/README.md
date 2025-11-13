# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 1
My Partner's Key: 9

Our initial shared key:

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message     | Decoded Message     | Key |
| ---------------     | ---------------     | --- |
|rs, ryg kbo iye      |hi, how are you      | 10  |
|tx rzzo, szh lcp jzf |im good, how are you | 11  |
|Jsfm uccr, W rwr tfwgpss Gibrom. Kvoh rwr mci rc?|Very good, I did frisbee Sunday. What did you do?| 14  |
|qexqp kfzb. F jxfkiv grpq afa eljbtloh qefp tbbhbka, xka F afa pljb JJX. F jdeq yb obdfpqbofkd clo jv cfopq cfdeq pllk!|thats nice. I mainly just did homework this weekend, and I did some MMA. I might be registering for my first fight soon!| 23  |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: UpEPYQ

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 01010101 01110000 01000101 01010000 01011001 01010001

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1: 

    Source: Waleed
    Destination: Pierre  
    Sequence: 1/3
    Data: [01010101] [01110000]
    =========
    Packet 2:  

    Source: Waleed
    Destination: Pierre
    Sequence: 2/3 
    Data: [01000101] [01010000]
    =========
    Packet 3: 

    Source: Waleed
    Destination: Pierre
    Sequence: 3/3
    Data: [01011001] [01010001]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
    Symmetric encryption uses the same key to both encrypt and decrypt data, while asymmetric encryption uses two different keys(a public key to encrypt and a private key to decrypt)and in the simulation, symmetric encryption keeps the message secret between sender and receiver, while asymmetric encryption is used to safely exchange the symmetric key.

- Why is it important that this protocol uses a new key for each message?
    Using a new key for each message is important because it prevents attackers from decrypting old messages if they ever learn a key.

- Why is it important that you never share your secret key?
    You must never share your secret key because, if someone else gets it, they could read or change your private messages.

- In the transport layer, do these messages use TCP or UDP? Why?
    The transport layer usually uses TCP for these messages because it guarantees that data gets delivered in order and without errors.

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
    In the internet layer, packets get assigned IP addresses and routed towards their destination, while in the link layer, those packets are turned into frames and sent over the physical network connection.

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
    An adversary can still see the sender's and receiver's addresses, the time messages are sent, and the size of the data, even if the content is hidden by encryption.
