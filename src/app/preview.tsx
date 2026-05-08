import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  const params = useLocalSearchParams<{
    nome: string;
    cargo: string;
    empresa: string;
    anosExperiencia: string;
    favTecnologia: string;
    tecnologias: string;
    corCartao: string;
  }>();

  const primeiraLetra = params.nome.charAt(0).toUpperCase();

  const anos = parseInt(params.anosExperiencia);
  let nivel = '';
  let corBadge = '';

  if (anos >= 0 && anos <= 2) {
    nivel = 'Júnior';
    corBadge = '#808080';
  } else if (anos >= 3 && anos <= 5) {
    nivel = 'Pleno';
    corBadge = '#2196F3';
  } else if (anos >= 6) {
    nivel = 'Sênior';
    corBadge = '#FFD700';
  }

  const tecnologiasList = params.tecnologias
    ? params.tecnologias.split(',').map(t => t.trim()).filter(t => t.length > 0)
    : [];

  const chipColors = ['#ff6b35', '#00d9ff', '#a855f7', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#8b5cf6'];

  const handleCompartilhar = async () => {
    const textoFormatado = `
🚀 CARTÃO PROFISSIONAL DIGITAL

👨‍💻 ${params.nome}
💼 ${params.cargo}${params.empresa ? ` • ${params.empresa}` : ''}
⭐ Nível: ${nivel}
📅 ${params.anosExperiencia} ${anos === 1 ? 'ano' : 'anos'} de experiência
🎯 Especialista em ${params.favTecnologia}

💻 Stack Tecnológico:
${tecnologiasList.map(tech => `  ⚡ ${tech}`).join('\n')}

---
Criado com DevCard 🚀
    `.trim();

    try {
      await Clipboard.setStringAsync(textoFormatado);
      Alert.alert('Sucesso!', 'Dados copiados para a área de transferência');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível copiar os dados');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>👁️ Preview</Text>
          <Text style={styles.headerSubtitle}>Visualize seu cartão profissional</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardWrapper}>
            <View style={[styles.cardGlow, { backgroundColor: params.corCartao }]} />
            <View style={[styles.card, { backgroundColor: params.corCartao }]}>
              <View style={styles.cardContent}>
                <View style={styles.avatarContainer}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{primeiraLetra}</Text>
                  </View>
                </View>

                <Text style={styles.cardName}>{params.nome}</Text>

                <Text style={styles.cardCargo}>
                  {params.cargo}
                  {params.empresa && ` • ${params.empresa}`}
                </Text>

                <View style={styles.especialistaContainer}>
                  <Text style={styles.especialistaIcon}>⚡</Text>
                  <Text style={styles.cardEspecialista}>
                    Especialista em {params.favTecnologia}
                  </Text>
                </View>

                {/* Technology chips */}
                {tecnologiasList.length > 0 && (
                  <View style={styles.techContainer}>
                    {tecnologiasList.map((tech, index) => (
                      <View
                        key={index}
                        style={[
                          styles.techChip,
                          { backgroundColor: chipColors[index % chipColors.length] }
                        ]}
                      >
                        <Text style={styles.techChipText}>{tech}</Text>
                      </View>
                    ))}
                  </View>
                )}

                <View style={styles.cardDivider} />

                <View style={styles.badgeContainer}>
                  <View style={[styles.badgeWrapper]}>
                    <View style={[styles.badge, { backgroundColor: corBadge }]}>
                      <Text style={styles.badgeText}>{nivel}</Text>
                    </View>
                  </View>
                  <Text style={styles.experienciaText}>
                    {params.anosExperiencia} {anos === 1 ? 'ano' : 'anos'} de experiência
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={handleCompartilhar}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonIcon}>📤</Text>
              <Text style={styles.shareButtonText}>Compartilhar</Text>
            </View>
          </TouchableOpacity>
          
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => router.back()}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonIcon}>✏️</Text>
                <Text style={styles.editButtonText}>Editar dados</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => router.replace('/sucesso')}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonIcon}>✅</Text>
                <Text style={styles.confirmButtonText}>Finalizar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27'
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 8,
    color: '#00d9ff',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#8892b0',
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 400,
    position: 'relative',
  },
  cardGlow: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: -8,
    bottom: -8,
    borderRadius: 20,
    opacity: 0.3,
    zIndex: 0,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    padding: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    position: 'relative',
    zIndex: 1,
  },
  cardContent: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  avatarText: {
    fontSize: 42,
    fontWeight: '900',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  cardCargo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  especialistaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 6,
  },
  especialistaIcon: {
    fontSize: 16,
  },
  cardEspecialista: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 12,
    marginBottom: 8,
  },
  techChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  techChipText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  cardEmpresa: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  cardDivider: {
    height: 2,
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.3,
    marginVertical: 16,
  },
  badgeContainer: {
    alignItems: 'center',
    gap: 8,
  },
  badgeWrapper: {
    position: 'relative',
  },
  badge: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  badgeText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  experienciaText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  cardInfo: {
    gap: 8,
  },
  cardInfoText: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  buttonContainer: {
    gap: 16,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 30,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonIcon: {
    fontSize: 18,
  },
  shareButton: {
    backgroundColor: '#10b981',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#10b981',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  editButton: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff6b35',
  },
  editButtonText: {
    color: '#ff6b35',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#00d9ff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#00d9ff',
  },
  confirmButtonText: {
    color: '#0a0e27',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});