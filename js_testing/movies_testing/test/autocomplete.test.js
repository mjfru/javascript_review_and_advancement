it('Shows an autocomplete', () => {
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Indiana Jones' },
        { Title: 'The Mummy' },
        { Title: 'Gladiator' }
      ];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });
});