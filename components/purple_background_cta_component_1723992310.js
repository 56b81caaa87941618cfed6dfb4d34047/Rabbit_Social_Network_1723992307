/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1723992310", {
    template: `
    <section id="cta-section-container" class="min-h-190px bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-900" style="min-height: 190px;"><div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6"><div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg" style=""><div id="radial-gradient" aria-hidden="true" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"><div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-120px opacity-70"></div> <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40px bg-purple-400"></div></div> <div id="blurred-shape" aria-hidden="true" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10"><svg xmlns="http://www.w3.org/2000/svg" width="434" height="427"><defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#FF69B4"></stop><stop offset="100%" stop-color="#8A2BE2" stop-opacity="0"></stop></linearGradient></defs>  / contenteditable="true"&gt;
                    </svg></div> <div id="content" class="max-w-3xl mx-auto text-center"><div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-pink-300" style="" data-mf-new="true">No bunny knows...</div></div> <div id="content-title-container" class="flex"><h2 id="content-title" class="flex-1 h2 text-white" style="" data-mf-new="true"> How is it going today?</h2></div> <div id="content-body-container" class="flex" style=""><p id="content-body" class="flex-1 text-lg mb-8 text-purple-200" style="">Connect, share, and burrow into a community made just for bunnies and their humans!</p></div> <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-indigo-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 rounded-full px-6 py-3" style="">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-indigo-900">-&gt;</span></a></div></div></div></section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    