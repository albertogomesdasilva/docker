### COMANDOS DO DOCKER
* docker run -d -p 80:80 --name nginx_app nginx -> Baixa e roda em segundo plano na porta 80 a imagem nginx e usa o nome nginx_app
* docker start <nome_ou_id_da_imagem>   -> Roda uma imagem já baixada
* docker stop <nome_da_image>   -> para a execução da imagem
* docker ps => Lista containers em execução
* docker ps -a   -> lista todos os contaniners parados e em execução
* docker ps -q => Lista apenas os IDs numériocos dos containers em vez de toda a tabela de informações
* docker images   -> Lista todas as imagens com mais detalhes
* docker images -a _> Lista todas as imagens
* docker log nginx_app  -> exibe os logs gerados pela imagem
* docker -f log <nome_ou_id_da_imagem>   -> fica exibindo os logs da imagem em execução
* docker -rm <nome_ou_id_da_imagem> -> Apaga a imagem
* docker -rm -f <nome_ou_id_da_imagem> -> Força apagar a imagem que pode está em execução
* docker rmi <nome_ou_id_da_imagem> <nome_ou_id_da_imagem> <nome_ou_id_da_imagem> => Remove todas imagens listadas
*docker images -q => lista os id's da imagens
* docker rmi $(docker images -q) 
* docker stop $(docker ps -a -q)  => para todos os containers em execução
* docker rm $(docker ps -a -q) => Exclui todos os containers parados
* 
* docker system prune => Remove todos 
* docker system prune -a => Remove tudo sem exceção
* 
* docker images purge => Limpa todas as imagens não marcadas

* docker images -f dangling=true =>  Listar imagens sem uso

* docker images purge => Remove imagens sem uso

### !-- GUIA DE COMANDOS DOCKER --
Um Guia de Consulta Rápida do Docker
Introdução
O Docker facilita o agrupamento de suas aplicações e serviços em contêineres de forma que você pode executar em qualquer lugar. Ao trabalhar com o Docker, no entanto, também é fácil acumular um número limitado de imagens, contêineres e volumes de dados não utilizados que atrapalham a saída e consomem espaço em disco.

O Docker lhe fornece todas as ferramentas que você precisa para resolver seu sistema a partir da linha de comando. Este guia no estilo cheat sheet fornece uma referência rápida para comandos que são úteis para liberar espaço em disco e seu sistema organizado, removendo imagens Docker não utilizadas, contêineres e volumes.

Como Usar Este Guia:

Este guia não tem formato de consulta rápida, com trechos de linha de comando independentes.
Vá para qualquer seção que seja relevante para a tarefa que você é relevante.
A sintaxe de substituição de comando está, usada nos comandos disponíveis em muitos shells populares, como o bash, zsh e Windows Powershell.comando $(comando)

Limpando Todas as Imagens, Contêineres, Volumes e Redes Não Utilizadas ou Pendentes
O Docker fornece um único comando que irá reservar recursos, imagens, contêineres e redes pendentes (não associados a um contêiner):

docker system prune
Para removedor adicionalmente quaisquer e todas as imagens pendentes não incluídas, a bandeira -aao comando:

docker system prune -a
Removendo Imagens Docker
Remover uma ou mais imagens específicas
Use o comando docker imagescom a flag -apara localizar o ID das imagens que você deseja remover. Isso lhe mostrará todas as imagens, incluindo as características de imagem. Quando você encontrou as imagens que deseja excluir, você pode passar o ID tag delas para o docker rmi:

Listar:

docker images -a
Removedor:

docker rmi Image Image
Remover imagens pendentes
As imagens do Docker consistem em várias camadas. As imagens pendentes são camadas que não têm relação com nenhuma imagem marcada. Elas não servem a um propósito e consomem espaço na discoteca. Elas podem ser localizadas adicionando a sinalização de filtro, -fcom um valor de dangling=truecomando docker images. Quando você tiver certeza de que deseja excluí-las, você pode usar o comando docker images purge:

Nota: se você construir uma imagem sem marca-la, ela aparecerá na lista de imagens pendentes porque ela não nenhuma associação com uma imagem marcada. Você pode evitar esta situação de alimentação, e você pode marcar retroativamente uma imagem com o comando docker tag .

Listar:

docker images -f dangling=true
Removedor:

docker images purge
Removendo imagens de acordo com um padrão
Você pode encontrar todas as imagens que correspondem a um padrão usando imagens docker imagese imagens grep. Assim que estiver satisfeito, você pode excluí-las usando o awkpara passar os IDs para o docker rmi. Observe que esses equipamentos e sistemas não são fornecidos pelo

Listar:

docker images -a |  grep "pattern"
Removedor:

docker images -a | grep "pattern" | awk '{print $3}' | xargs docker rmi
Remover todas as imagens
Todas as imagens podem ser usadas como recurso Docker -aao comando docker images. Assim que tiver certeza de que você excluirá todas elas, você poderá adicionar a sinalização -qpara passar o ID da Imagem o docker rmi:

Listar:

docker images -a
Removedor:

docker rmi $(docker images -a -q)
Removendo Contêineres
Remover um ou mais contêineres detalhes
Use o comando docker pscom a sinalização -apara localizar o nome e o ID dos contêineres que você deseja remover.

Listar:

docker ps -a
Removedor:

docker rm ID_or_Name ID_or_Name
Remover um contêiner ao sair
Se você sabe, ao contêiner, que você não deseja criar exclui-lo por perto assim que terminar você pode executar docker run --rmparaí-lo automaticamente quando ele for fechado.

Executar e Remover:

docker run --rm image_name
Remover todos os contêineres finalizados
Você pode localizar o contêiner usando o docker ps -ae trá-los pelo seu status: created, restarting, running, paused or exited. Para revisar a lista de contêineres finalizados, use um sinalizador -fpara filtrar com base no status. Quando você estiver selecionado, você deseja remover esses contêineres, usando -qpara passar os IDs para o comando docker rm.

Listar:

docker ps -a -f status=exited
Removedor:

docker rm $(docker ps -a -f status=exited -q)
Remover contêineres usando mais de um filtro.
Os filtros do Docker podem ser combinados repetindo a sinalização de filtro com um valor adicional. Isso resulta em uma lista de contêineres que corresponde a qualquer das condições. Por exemplo, se você quiser excluir todos os contêineres marcados como Created (um estado que pode resultar quando você pode resultar em um contêiner com um comando inválido) ou Exited , você pode usar dois filtros:

Listar:

docker ps -a -f status=exited -f status=created
Removedor:

docker rm $(docker ps -a -f status=exited -f status=created -q)
Remover contêineres de acordo com um padrão
Você pode encontrar todos os contêineres que correspondem a um padrão usando odocker ps grep . Quando você estiver satisfeito com a lista que deseja excluir, você poderá usar o eo para fornecer o ID para o . Observe que esses equipamentos e sistemas não são fornecidos peloawkxargsdocker rmi

Listar:

docker ps -a |  grep "pattern”
Removedor:

docker ps -a | grep "pattern" | awk '{print $3}' | xargs docker rmi
Parar e remover todos os contêineres
Você pode revisar os contêineres em seu sistema com o docker ps. Adicionando um sinalizador -apara mostrar todos os contêineres. Quando você tiver certeza de que deseja excluí-los, você pode adicionar um sinalizador -qpara fornecer os IDs para os comandos docker stope docker rm:

Listar:

docker ps -a
Removedor:

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
Removendo Volumes
Remover um ou mais volumes - Docker 1.9 e mais recentes
Use o comando docker volume lspara localizar o nome de volume que você deseja excluir. Em seguida, você pode remover um ou mais volumes com o comando docker volume rm:

Listar:

docker volume ls
Removedor:

docker volume rm volume_name volume_name
Remover volumes pendentes - Docker 1.9 e acima
Como a ideia de volumes é existente independentemente dos contêineres, quando um contêiner é removido, um volume não é removido automaticamente ao mesmo tempo. Quando um volume existe e não está mais conectado a um contêiner, ele é de volume pendente, ou volume pendente. Para localizá-los para confirmar que você deseja removê-los, você pode usar o comando docker volume lscom um filtro para limitar os resultados aos volumes pendentes. Quando você estiver satisfeito com a lista, você pode remover todos eles com docker volume prune:

Listar:

docker volume ls -f dangling=true
Removedor:

docker volume prune
Remover um contêiner e seu volume
Se você criou um volume não nomeado, ele pode ser excluído ao mesmo tempo que o contêiner com a sinalização -v. Observe que isso funciona apenas com volumes não nomeados . Quando o contêiner for removido com sucesso, seu ID é exibido. Observe que nenhuma referência é feita à remoção do volume. Se ele está sem nome, ele é removido silenciosamente do sistema. Se ele está nomeado, ele permanece silenciosamente presente.

Removedor:

docker rm -v container_name
Conclusão
Este guia cobre alguns dos comandos comuns usados ​​para remover imagens, contêineres e volumes com o Docker. Há muitas outras tantas e bandeiras que podem ser usadas com cada um deles. Para um guia abrangente sobre o que está disponível, consulte a documentação do Docker para docker system prune, docker rmi, docker rm, e docker volume rm. Se tarefas comuns de limpeza que você gostaria de ver no guia, por favor, pergunte ou faça sugestões nos comentários"# docker" 
