const nextConfig = {
  output: 'export', // Ativa a exportação estática
  // Remova a linha abaixo se o site for o seu domínio principal (usuario.github.io)
  basePath: '/mavic', 
  images: {
    unoptimized: true, // Necessário pois o Pages não otimiza imagens automaticamente
  },
};

module.exports = nextConfig;