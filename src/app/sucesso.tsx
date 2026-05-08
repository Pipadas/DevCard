import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Cool success icon with circles */}
      <View style={styles.iconContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Cartão Criado com Sucesso!</Text>
      <Text style={styles.subtitle}>Seu perfil profissional está pronto para brilhar!</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.replace('/cadastro')}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonIcon}>➕</Text>
            <Text style={styles.primaryButtonText}>Criar outro Cartão</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.replace('/')}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonIcon}>🏠</Text>
            <Text style={styles.secondaryButtonText}>Voltar ao Início</Text>
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
  iconContainer: {
    marginBottom: 32,
  },
  outerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(0, 217, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0, 217, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  checkmark: {
    fontSize: 56,
    color: '#0a0e27',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 8,
    color: '#00d9ff',
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
    color: '#8892b0',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    gap: 14,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonIcon: {
    fontSize: 20,
  },
  primaryButton: {
    backgroundColor: '#00d9ff',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#00d9ff',
  },
  primaryButtonText: {
    color: '#0a0e27',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff6b35',
  },
  secondaryButtonText: {
    color: '#ff6b35',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});