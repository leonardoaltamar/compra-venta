import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
        <h2 className='font-bold text-xl'>Iniciar sesión</h2>
        <form action="" className='flex flex-col gap-2 w-full max-w-md'>
            <Input type="text" name="email" id="email" placeholder='Correo electrónico' />
            <Input type="password" name="password" id="password" placeholder='Contraseña' />
            <Button type="submit" variant="default">Iniciar sesión</Button>
        </form>
    </div>
  )
}

export default LoginPage