export interface IChecklist {
  question: string;
  description: string;
  category: string;
}

export const ChecklistData: IChecklist[] = [
  {
    question: "Utilizou consoles?",
    description:
      "Consoles são muito úteis, não tenha receio de usar, use e não economize.",
    category: "Verificação de Erros",
  },
  {
    question: "Existe uma mensagem de erro? Você leu?",
    description:
      "Mensagens de erro exibem o problema que ocorreu e podem ajudar a identificar a causa.",
    category: "Verificação de Erros",
  },
  {
    question:
      "Existe uma implementação parecida em outra parte do código?",
    description:
      "Verificar códigos similares pode oferecer insights sobre como resolver problemas.",
    category: "Verificação de Erros",
  },
  {
    question: "Leu a documentação?",
    description:
      "A documentação oficial pode esclarecer dúvidas sobre a funcionalidade e o uso correto.",
    category: "Referências",
  },
  {
    question: "Pesquisou sobre o erro?",
    description:
      "Pesquisar online pode revelar soluções ou discussões de problemas semelhantes.",
    category: "Referências",
  },
  {
    question: "Você salvou o arquivo? Buildou o projeto?",
    description:
      "Arquivos não salvos ou builds pendentes podem causar comportamentos inesperados.",
    category: "Configuração de Ambiente",
  },
  {
    question: "A implementação deveria exibir algo em tela?",
    description:
      "Verificar a saída ajuda a entender se o código está funcionando conforme esperado.",
    category: "Verificação de Erros",
  },
  {
    question: "Está na URL correta?",
    description:
      "URLs incorretas podem levar a erros de carregamento ou dados não encontrados.",
    category: "Configuração de Ambiente",
  },
  {
    question: "A VPN está conectada?",
    description:
      "A falta de conexão VPN pode impedir o acesso a determinados serviços ou recursos.",
    category: "Configuração de Ambiente",
  },
  {
    question: "Reiniciou?",
    description:
      "Reiniciar a aplicação ou sistema pode resolver problemas temporários de execução.",
    category: "Configuração de Ambiente",
  },
  {
    question: "Você testou a API no Swagger?",
    description:
      "Swagger pode ser usado para testar rapidamente as rotas da API e verificar os parâmetros de entrada e saída.",
    category: "Requisições e APIs",
  },
  {
    question: "Você verificou a documentação da API no Swagger?",
    description:
      "Verifique se a documentação da API está atualizada no Swagger, para garantir que os endpoints estejam corretos.",
    category: "Requisições e APIs",
  },
  {
    question: "Você testou as requisições no Postman?",
    description:
      "Postman permite testar as APIs de forma visual e interativa, incluindo a verificação de status e dados de resposta.",
    category: "Requisições e APIs",
  },
  {
    question: "Você verificou as respostas das APIs no Postman?",
    description:
      "Verifique as respostas da API no Postman para garantir que o retorno esteja correto e os dados estejam sendo processados.",
    category: "Requisições e APIs",
  },
  {
    question: "A API está retornando o status HTTP correto?",
    description:
      "Verifique se os status HTTP retornados pela API estão corretos (200, 404, 500, etc.) para cada tipo de resposta.",
    category: "Requisições e APIs",
  },
  {
    question: "Testou a API com diferentes dados?",
    description:
      "Teste a API com diferentes cenários (dados válidos, inválidos e de erro) para garantir que ela trate as situações corretamente.",
    category: "Requisições e APIs",
  },
  {
    question: "A autenticação da API está funcionando corretamente?",
    description:
      "Certifique-se de que as autenticações (tokens, chaves de API, OAuth, etc.) estão sendo feitas corretamente nas requisições.",
    category: "Requisições e APIs",
  },
  {
    question: "Limpou o cache?",
    description:
      "O cache desatualizado pode causar conflitos e exibir comportamentos antigos.",
    category: "Configuração de Ambiente",
  },
  {
    question: "A extensão do arquivo está correta?",
    description:
      "Extensões incorretas podem fazer com que o arquivo não seja reconhecido pelo sistema.",
    category: "Configuração de Ambiente",
  },
  {
    question: "A branch está correta?",
    description:
      "Trabalhar na branch errada pode resultar em modificações no local errado do código.",
    category: "Configuração de Ambiente",
  },
  {
    question: "As importações estão corretas?",
    description:
      "Importações incorretas podem levar a erros de referência ou falhas de execução.",
    category: "Verificação de Erros",
  },
  {
    question: "O usuário tem as permissões adequadas?",
    description:
      "Falta de permissões pode restringir o acesso a recursos e funcionalidades.",
    category: "Acesso e Permissões",
  },
  {
    question: "Fazer uma pergunta em fóruns e redes sociais",
    description:
      "Fazer uma pergunta em um fórum ou rede social pode ajudar a resolver o problema.",
    category: "Aconselhamentos Gerais",
  },
  {
    question: "Fazer uma pausa para descançar a cabeça",
    description:
      "Fazer uma pausa ajuda a refrescar a mente e pode permitir ver soluções que passaram despercebidas.",
    category: "Aconselhamentos Gerais",
  },
];
