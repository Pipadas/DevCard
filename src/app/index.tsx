import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => router.push('/sobre')}
      >
        <Text style={styles.infoButtonText}>ℹ️ Info</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.emoji}>🪪</Text>
        <Text style={styles.title}>DevCard</Text>
        <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
        <Text style={styles.description}>
          Construa sua identidade digital em minutos
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.push('/cadastro')}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonIcon}>🎯</Text>
            <Text style={styles.createButtonText}>Criar meu cartão</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0e27',
    padding: 20,
  },
  infoButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#00d9ff',
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 10,
  },
  infoButtonText: {
    color: '#00d9ff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 8,
  },
  title: {
    fontSize: 56,
    fontWeight: '900',
    color: '#00d9ff',
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 217, 255, 0.6)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 15,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#a8dadc',
    letterSpacing: 1,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8892b0',
    textAlign: 'center',
    marginTop: 8,
    maxWidth: 300,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 40,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonIcon: {
    fontSize: 22,
  },
  createButton: {
    backgroundColor: '#00d9ff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#00d9ff',
  },
  createButtonText: {
    color: '#0a0e27',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },
});