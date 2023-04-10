//import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Nav() {
return (
    <div>
        <div className="nav nav-logo">
        </div>
        <div className="nav nav-links">
            <a
            href="/about"
            className="nav nav-link nav-featured"
            target="_blank"
            rel="noopener noreferrer"
            >
                <h2 className="nav-header">
                    About{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className="nav-p">
                    About Me
                </p>
            </a>

            <a
            href="/featured"
            className="nav nav-link nav-featured"
            target="_blank"
            rel="noopener noreferrer"
            >
                <h2 className="nav-header">
                    Featured{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className="nav-p">
                    Featured Projects
                </p>
            </a>

            <a
            href="https://github.com/heyligerjon"
            className="nav nav-link nav-featured"
            target="_blank"
            rel="noopener noreferrer"
            >
                <h2 className="nav-header">
                    GitHub{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className="nav-p">
                    GH Profile
                </p>
            </a>

            <a
            href="/contact"
            className="nav nav-link nav-featured"
            target="_blank"
            rel="noopener noreferrer"
            >
                <h2 className="nav-header">
                    Contact{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className="nav-p">
                    Hit my line
                </p>
            </a>

            <a
            href="/experience"
            className="nav nav-link nav-featured"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className="nav-header">
                Experience{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className="nav-p">
                Jobs I done had
            </p>
            </a>
        </div>
    </div>
)}