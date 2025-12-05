import { WindowControls } from "#components"
import { socials } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"

const Contact = () => {
    return (
        <>
            <div className="window-header">
                <WindowControls target='contact' />
                <h2>Contact Me</h2>
            </div>

            <div className="p-8 flex flex-col items-center text-center h-full overflow-y-auto custom-scrollbar">
                {/* Profile Image */}
                <div className="relative mb-6 group">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <img
                        src="/images/about-me.jpg"
                        alt="Abhay"
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full z-10"></div>
                </div>

                {/* Header Text */}
                <div className="space-y-2 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">Let&apos;s Connect</h3>
                    <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
                        Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
                    </p>
                    <a href="mailto:abhayagnihotri976@gmail.com" className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mt-2 hover:bg-gray-200 transition-colors cursor-pointer group">
                        <span>abhayagnihotri976@gmail.com</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-500">Send</span>
                    </a>
                </div>

                {/* Social Links Grid */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md group"
                            style={{ backgroundColor: `${bg}15` }} // 15 is roughly 10% opacity hex
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm transition-transform group-hover:rotate-6"
                                style={{ backgroundColor: bg }}
                            >
                                <img src={icon} alt={text} className="w-5 h-5 invert brightness-0" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-sm text-gray-800">{text}</p>
                                <p className="text-xs text-gray-500">Connect</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow