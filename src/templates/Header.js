const Header = () => {
  const view = `
    
    <div class="Header__main">
        <div class="Header__logo">
            <h1>
                <a href="/">
                    Rick and Morty
                </a>
            </h1>
        </div>
        <div class="Header__nav">
            <a href="#/about/">
            About
            </a>
        </div>
    </div>
    `;
  return view;
};

export default Header;
