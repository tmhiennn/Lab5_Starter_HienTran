# Lab 5 - Starter

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Hien Tran

---

Questions: Check Your Understanding

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   No, because the message feature requires multiple components to interact. For the message feature, writing and sending involve different parts of the system working together, which is better suited for integration testing, not unit testing
2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   Yes, unit tests allow simple and quick debugging on a small scale feature. So testing the max message length of a message on any application, (message. length <= 80). As the message length testing does not need to intereaction with other components, so it is safe to use unit test to test this message feature.
