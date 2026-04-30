package org.example.project

import kotlin.test.Test
import kotlin.test.assertTrue

class ComposeAppCommonTest {

    @Test
    fun testGreeting() {
        val greeting = Greeting().greet()
        assertTrue(greeting.contains("Hello"), "Greeting should contain 'Hello'")
    }
}