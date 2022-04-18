import axios from 'axios';

export const handler = async (interaction) => {
  const response = await axios.get('http://176.107.133.217:8080/project/');
  if (response.data) {
    await interaction.reply(mapResponse(response.data));
  } else {
    await interaction.reply('Error occured');
  }
};

const mapResponse = (nftProjectsList) =>
  nftProjectsList.map(p => ({
    name: p.name,
    lastUpdate: p.lastUpdate,
  }));
