export default function ColorShowcase() {
  const colorGroups = [
    {
      name: "Serbian Flag Colors",
      colors: [
        { name: "serbian-red", class: "bg-serbian-red", text: "text-white" },
        { name: "serbian-blue", class: "bg-serbian-blue", text: "text-white" },
        { name: "serbian-white", class: "bg-serbian-white", text: "text-neutral-text", border: "border border-go-grid" }
      ]
    },
    {
      name: "Neutral Colors",
      colors: [
        { name: "background", class: "bg-background", text: "text-neutral-text", border: "border border-go-grid" },
        { name: "neutral-panel", class: "bg-neutral-panel", text: "text-neutral-text", border: "border border-go-grid" },
        { name: "neutral-text", class: "bg-neutral-text", text: "text-white" }
      ]
    },
    {
      name: "Go Game Colors",
      colors: [
        { name: "go-blackStone", class: "bg-go-blackStone", text: "text-white" },
        { name: "go-whiteStone", class: "bg-go-whiteStone", text: "text-neutral-text", border: "border border-go-grid" },
        { name: "go-board", class: "bg-go-board", text: "text-neutral-text" },
        { name: "go-grid", class: "bg-go-grid", text: "text-white" }
      ]
    }
  ];

  const textColors = [
    { name: "text-accent", class: "text-accent" },
    { name: "text-serbian-red", class: "text-serbian-red" },
    { name: "text-serbian-blue", class: "text-serbian-blue" },
    { name: "text-heading", class: "text-heading" },
    { name: "text-body", class: "text-body" }
  ];

  const buttonStyles = [
    { name: "btn-primary", class: "btn btn-primary" },
    { name: "btn-secondary", class: "btn btn-secondary" },
    { name: "btn-outline", class: "btn btn-outline" }
  ];

  return (
    <div className="bg-background min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="card">
          <h1 className="text-heading text-3xl mb-8 text-center">Color System Showcase</h1>
          
          {/* Background Colors */}
          <section className="mb-12">
            <h2 className="text-heading text-2xl mb-6">Background Colors</h2>
            {colorGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-8">
                <h3 className="text-heading text-xl mb-4">{group.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.colors.map((color, colorIndex) => (
                    <div key={colorIndex} className="flex items-center space-x-4 p-4 rounded-lg border border-go-grid/20">
                      <div className={`w-16 h-16 rounded-lg ${color.class} ${color.border || ''} flex items-center justify-center`}>
                        <span className={`text-xs font-bold ${color.text}`}>Color</span>
                      </div>
                      <div>
                        <p className="text-heading font-medium">{color.name}</p>
                        <p className="text-body text-sm">Background color</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Text Colors */}
          <section className="mb-12">
            <h2 className="text-heading text-2xl mb-6">Text Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {textColors.map((color, index) => (
                <div key={index} className="p-4 rounded-lg border border-go-grid/20 bg-neutral-panel">
                  <p className={`text-lg font-medium ${color.class}`}>
                    {color.name}
                  </p>
                  <p className="text-body text-sm mt-2">Text color utility</p>
                </div>
              ))}
            </div>
          </section>

          {/* Button Styles */}
          <section className="mb-12">
            <h2 className="text-heading text-2xl mb-6">Button Styles</h2>
            <div className="flex flex-wrap gap-4">
              {buttonStyles.map((button, index) => (
                <button key={index} className={button.class}>
                  {button.name}
                </button>
              ))}
            </div>
          </section>

          {/* Component Examples */}
          <section className="mb-12">
            <h2 className="text-heading text-2xl mb-6">Component Examples</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Examples */}
              <div>
                <h3 className="text-heading text-xl mb-4">Cards</h3>
                <div className="space-y-4">
                  <div className="card">
                    <h4 className="text-heading text-lg mb-2">Standard Card</h4>
                    <p className="text-body">This is a standard card component using neutral-panel background.</p>
                  </div>
                  <div className="card-elevated">
                    <h4 className="text-heading text-lg mb-2">Elevated Card</h4>
                    <p className="text-body">This card has enhanced shadow and hover effects.</p>
                  </div>
                </div>
              </div>

              {/* Go Stone Examples */}
              <div>
                <h3 className="text-heading text-xl mb-4">Go Elements</h3>
                <div className="space-y-4">
                  <div className="go-stone-black p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-white font-bold">●</span>
                  </div>
                  <div className="go-stone-white p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-neutral-text font-bold">●</span>
                  </div>
                  <div className="go-board p-4 rounded-lg">
                    <p className="text-neutral-text font-medium">Go Board Background</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Guidelines */}
          <section>
            <h2 className="text-heading text-2xl mb-6">Usage Guidelines</h2>
            <div className="space-y-4 text-body">
              <p><strong className="text-heading">Primary Actions:</strong> Use <code className="bg-neutral-panel px-2 py-1 rounded">btn-primary</code> (Serbian Red) for main actions like registration, submit buttons.</p>
              <p><strong className="text-heading">Secondary Actions:</strong> Use <code className="bg-neutral-panel px-2 py-1 rounded">btn-secondary</code> for less important actions.</p>
              <p><strong className="text-heading">Text Hierarchy:</strong> Use <code className="bg-neutral-panel px-2 py-1 rounded">text-heading</code> for titles, <code className="bg-neutral-panel px-2 py-1 rounded">text-body</code> for content.</p>
              <p><strong className="text-heading">Accent Elements:</strong> Use <code className="bg-neutral-panel px-2 py-1 rounded">text-accent</code> or Serbian colors for highlighting important information.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 