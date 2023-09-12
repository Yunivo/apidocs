import Image from 'next/image';
import logoDark from '@/images/logos/dark-logo.svg';
import logoLight from '@/images/logos/light-logo.svg';

export function Logo(props) {
    return (
        <div>
            <Image src={logoLight} alt="Light Logo" className="dark:hidden" width={120}  />
            <Image src={logoDark} alt="Dark Logo" className="hidden dark:block" width={120}  />
        </div>
    );
}