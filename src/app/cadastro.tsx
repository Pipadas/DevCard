import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CadastroScreen() {
  const router = useRouter();

  const TEMAS = [
    { label: 'Azul', hex: '#008cff' },
    { label: 'Verde', hex: '#10b981' },
    { label: 'Roxo', hex: '#a855f7' }
  ];

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anosExperiencia, setAnosExperiencia] = useState('');
  const [favTecnologia, setFavTecnologia] = useState('');
  const [tecnologias, setTecnologias] = useState('');
  const [temaCartao, setTemaCartao] = useState('#008cff');
  const [errors, setErrors] = useState({
    nome: '',
    cargo: '',
    anosExperiencia: '',
    favTecnologia: '',
    tecnologias: ''
  });
  
  const handleGerarCartao = () => {
    const newErrors = {
      nome: '',
      cargo: '',
      anosExperiencia: '',
      favTecnologia: '',
      tecnologias: ''
    };

    let hasError = false;

    if (!nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
      hasError = true;
    } else if (nome.length < 3) {
      newErrors.nome = 'Nome deve ter no mínimo 3 caracteres';
      hasError = true;
    }

    if (!cargo.trim()) {
      newErrors.cargo = 'Cargo é obrigatório';
      hasError = true;
    }

    if (!favTecnologia.trim()) {
      newErrors.favTecnologia = 'Tecnologia é obrigatória';
      hasError = true;
    }

    const expNum = parseInt(anosExperiencia);
    if (isNaN(expNum) || expNum < 0) {
      newErrors.anosExperiencia = 'Deve ser um número válido';
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    router.push({
      pathname: '/preview',
      params: { nome, cargo, empresa, anosExperiencia, favTecnologia, tecnologias, corCartao: temaCartao }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚡ Cadastro</Text>
      <Text style={styles.subtitle}>Configure seu perfil profissional</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.nome && styles.inputError]}
          placeholder="Nome completo"
          placeholderTextColor="#888"
          value={nome}
          onChangeText={(text) => {
            setNome(text);
            if (errors.nome) {
              setErrors({...errors, nome: ''});
            }
          }}
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="done"
        />
        {errors.nome ? <Text style={styles.errorText}>{errors.nome}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.cargo && styles.inputError]}
          placeholder="Cargo"
          placeholderTextColor="#888"
          value={cargo}
          onChangeText={(text) => {
            setCargo(text);
            if (errors.cargo) {
              setErrors({...errors, cargo: ''});
            }
          }}
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="done"
        />
        {errors.cargo ? <Text style={styles.errorText}>{errors.cargo}</Text> : null}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Empresa"
        placeholderTextColor="#888"
        value={empresa}
        onChangeText={setEmpresa}
        autoCapitalize="words"
        autoCorrect={false}
        keyboardType="default"
        returnKeyType="done"
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.anosExperiencia && styles.inputError]}
          placeholder="Anos de experiência"
          placeholderTextColor="#888"
          value={anosExperiencia}
          onChangeText={(text) => {
            setAnosExperiencia(text);
            if (errors.anosExperiencia) {
              setErrors({...errors, anosExperiencia: ''});
            }
          }}
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="numeric"
          returnKeyType="done"
        />
        {errors.anosExperiencia ? <Text style={styles.errorText}>{errors.anosExperiencia}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.favTecnologia && styles.inputError]}
          placeholder="Tecnologia favorita"
          placeholderTextColor="#888"
          value={favTecnologia}
          onChangeText={(text) => {
            setFavTecnologia(text);
            if (errors.favTecnologia) {
              setErrors({...errors, favTecnologia: ''});
            }
          }}
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="done"
        />
        {errors.favTecnologia ? <Text style={styles.errorText}>{errors.favTecnologia}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.tecnologias && styles.inputError]}
          placeholder="Tecnologias (separadas por vírgula)"
          placeholderTextColor="#888"
          value={tecnologias}
          onChangeText={(text) => {
            setTecnologias(text);
            if (errors.tecnologias) {
              setErrors({...errors, tecnologias: ''});
            }
          }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="done"
          multiline
        />
        {errors.tecnologias ? <Text style={styles.errorText}>{errors.tecnologias}</Text> : null}
        <Text style={styles.helperText}>Ex: React, Node.js, TypeScript</Text>
      </View>

      <View style={styles.temaContainer}>
        <Text style={styles.temaLabel}>Tema do cartão:</Text>
        <View style={styles.temaOptions}>
          {TEMAS.map((tema) => (
            <TouchableOpacity
              key={tema.label}
              style={[
                styles.temaButton,
                temaCartao === tema.hex && styles.temaButtonSelected
              ]}
              onPress={() => setTemaCartao(tema.hex)}
            >
              <View style={[styles.temaColorCircle, { backgroundColor: tema.hex }]} />
              <Text style={[
                styles.temaButtonText,
                temaCartao === tema.hex && styles.temaButtonTextSelected
              ]}>{tema.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => handleGerarCartao()}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonIcon}>🎯</Text>
            <Text style={styles.primaryButtonText}>Finalizar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.back()}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonIcon}>⬅️</Text>
            <Text style={styles.secondaryButtonText}>Voltar</Text>
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
    padding: 16,
    backgroundColor: '#0a0e27',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00d9ff',
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#8892b0',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  input: {
    height: 50,
    borderColor: '#1e2749',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#1e2749',
    color: '#fff',
    fontSize: 16,
    width: '100%',
  },
  inputError: {
    borderColor: '#ff6b6b',
    borderWidth: 2,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  helperText: {
    color: '#8892b0',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
    fontStyle: 'italic',
  },
  temaContainer: {
    marginVertical: 20,
    width: '100%',
  },
  temaLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#00d9ff',
    textAlign: 'center',
  },
  temaOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  temaButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e2749',
    borderWidth: 2,
    borderColor: '#2a3f5f',
    minHeight: 80,
  },
  temaButtonSelected: {
    borderColor: '#00d9ff',
    borderWidth: 3,
    backgroundColor: '#2a3f5f',
  },
  temaColorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  temaButtonText: {
    color: '#8892b0',
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
  },
  temaButtonTextSelected: {
    color: '#00d9ff',
    fontWeight: '700',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
    width: '100%',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#00d9ff',
    paddingVertical: 16,
    paddingHorizontal: 20,
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonIcon: {
    fontSize: 18,
  },
  primaryButtonText: {
    color: '#0a0e27',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff6b35',
  },
  secondaryButtonText: {
    color: '#ff6b35',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});