package org.example.project

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
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
@Preview
fun App() {
    MaterialTheme {
        var selectedLevel by remember { mutableStateOf<String?>(null) }

            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                if (selectedLevel == null) {
                    Text(
                        text = "Lütfen Seviyenizi Seçin",
                        style = MaterialTheme.typography.headlineMedium,
                        modifier = Modifier.padding(bottom = 32.dp)
                    )
                    LanguageLevelMenu(onLevelSelected = { selectedLevel = it })
                } else {
                    LevelDetailScreen(
                        level = selectedLevel!!,
                        onBack = { selectedLevel = null }
                    )
                }
            }
    }
}

@Composable
fun LanguageLevelMenu(onLevelSelected: (String) -> Unit) {
    val levels = listOf("A1 - Beginner", "A2 - Elementary", "B1 - Intermediate", "B2 - Upper-Intermediate")
    Column(
        verticalArrangement = Arrangement.spacedBy(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxWidth()
    ) {
        levels.forEach { level ->
            Button(
                onClick = { onLevelSelected(level) },
                modifier = Modifier
                    .fillMaxWidth(0.8f)
                    .height(72.dp)
            ) {
                Text(text = level, style = MaterialTheme.typography.titleLarge)
            }
        }
    }
}

@Composable
fun LevelDetailScreen(level: String, onBack: () -> Unit, modifier: Modifier = Modifier) {
    Column(
        modifier = modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(text = level, style = MaterialTheme.typography.headlineLarge)
        Text(text = "Bu seviye için içerik yakında eklenecektir.", style = MaterialTheme.typography.bodyLarge)
        Button(onClick = onBack) {
            Text("Seviye Seçimine Geri Dön")
        }
    }
}
