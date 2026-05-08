import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SobreScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🪪</Text>
        <Text style={styles.title}>DevCard</Text>
        <Text style={styles.version}>Versão 1.0.0</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📱 Sobre o App</Text>
          <Text style={styles.text}>
            DevCard é um aplicativo para criar cartões de visita digitais personalizados
            para desenvolvedores. Crie seu perfil profissional de forma rápida e compartilhe
            com sua rede.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚡ Funcionalidades</Text>
          <Text style={styles.bulletPoint}>🎯 Criação de cartão personalizado</Text>
          <Text style={styles.bulletPoint}>🎨 Escolha de temas para o cartão</Text>
          <Text style={styles.bulletPoint}>🏆 Badge de nível baseado em experiência</Text>
          <Text style={styles.bulletPoint}>💻 Tags de tecnologias coloridas</Text>
          <Text style={styles.bulletPoint}>📤 Compartilhamento via área de transferência</Text>
          <Text style={styles.bulletPoint}>👁️ Preview em tempo real</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎖️ Níveis de Experiência</Text>
          <View style={styles.levelContainer}>
            <View style={[styles.levelBadge, { backgroundColor: '#808080' }]}>
              <Text style={styles.levelText}>JÚNIOR</Text>
            </View>
            <Text style={styles.levelDescription}>0 a 2 anos</Text>
          </View>
          <View style={styles.levelContainer}>
            <View style={[styles.levelBadge, { backgroundColor: '#2196F3' }]}>
              <Text style={styles.levelText}>PLENO</Text>
            </View>
            <Text style={styles.levelDescription}>3 a 5 anos</Text>
          </View>
          <View style={styles.levelContainer}>
            <View style={[styles.levelBadge, { backgroundColor: '#FFD700' }]}>
              <Text style={styles.levelText}>SÊNIOR</Text>
            </View>
            <Text style={styles.levelDescription}>6 ou mais anos</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👨‍💻 Desenvolvido por</Text>
          <Text style={styles.developerName}>Pietro de Moraes Vicinoski Fliegner</Text>
          <Text style={styles.developerCode}>RA: 8500301822</Text>
          <Text style={styles.text}>
            Projeto desenvolvido como atividade prática de desenvolvimento mobile.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🛠️ Tecnologias Utilizadas</Text>
          <Text style={styles.bulletPoint}>⚛️ React Native</Text>
          <Text style={styles.bulletPoint}>📦 Expo</Text>
          <Text style={styles.bulletPoint}>🔷 TypeScript</Text>
          <Text style={styles.bulletPoint}>🧭 Expo Router</Text>
          <Text style={styles.bulletPoint}>📋 Expo Clipboard</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <View style={styles.backButtonContent}>
              <Text style={styles.backButtonIcon}>⬅️</Text>
              <Text style={styles.backButtonText}>Voltar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  emoji: {
    fontSize: 64,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center',
    color: '#00d9ff',
    letterSpacing: 1,
    marginBottom: 4,
  },
  version: {
    fontSize: 14,
    textAlign: 'center',
    color: '#8892b0',
    marginBottom: 32,
    fontWeight: '500',
  },
  section: {
    backgroundColor: '#1e2749',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#00d9ff',
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  text: {
    fontSize: 16,
    color: '#a8dadc',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  developerName: {
    fontSize: 18,
    color: '#ff6b35',
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  developerCode: {
    fontSize: 14,
    color: '#8892b0',
    marginBottom: 12,
    fontStyle: 'italic',
  },
  bulletPoint: {
    fontSize: 15,
    color: '#a8dadc',
    lineHeight: 28,
    paddingLeft: 8,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  levelBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    minWidth: 100,
    alignItems: 'center',
  },
  levelText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  levelDescription: {
    fontSize: 15,
    color: '#8892b0',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 32,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#00d9ff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#00d9ff',
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButtonIcon: {
    fontSize: 18,
  },
  backButtonText: {
    color: '#0a0e27',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
