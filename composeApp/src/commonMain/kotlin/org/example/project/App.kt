package org.example.project

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
@Preview
fun App() {
    MaterialTheme {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(MaterialTheme.colorScheme.background)
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = "Lütfen Seviyenizi Seçin",
                style = MaterialTheme.typography.headlineMedium,
                modifier = Modifier.padding(bottom = 32.dp)
            )
            LanguageLevelMenu()
        }
    }
}

@Composable
fun LanguageLevelMenu() {
    val levels = listOf("A1 - Beginner", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper-Intermediate")
    Column(
        verticalArrangement = Arrangement.spacedBy(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxWidth()
    ) {
        levels.forEach { level ->
            Button(
                onClick = {
                    // TODO: Bu butona tıklandığında ilgili seviyenin sayfasına yönlendirme yapılacak.
                },
                modifier = Modifier
                    .fillMaxWidth(0.8f)
                    .height(72.dp)
            ) {
                Text(text = level, style = MaterialTheme.typography.titleLarge)
            }
        }
    }
}