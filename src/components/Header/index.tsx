import { useState } from 'react'
import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { HeaderContainer, MobileIcon, NavMenu } from './styles'

export function Header() {
  const [click, setClick] = useState(false)

  const handleOpen = () => {
    setClick(!click)
  }

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className="mobile-content">
        <a href={'/'}>
          <span>F</span>elipe
        </a>
        <MobileIcon onClick={handleOpen}>
          {click ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} click={click}>
        <ul>
          <li>
            <Link href={'/'}>
              <a>
                <span>Início</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'#about'} scroll={false}>
              <a>
                <span>Sobre</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'#skills'} scroll={false}>
              <a>
                <span>Habilidades</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'#projects'} scroll={false}>
              <a>
                <span>Projetos</span>
              </a>
            </Link>
          </li>
          
          <li>
            <Link href={'#contact'} scroll={false}>
              <a>
                <span>Contato</span>
              </a>
            </Link>
          </li>
        </ul>
      </NavMenu>
    </HeaderContainer>
  )
}
