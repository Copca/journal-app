# Pasos Iniciales para crear un Proyecto con Next.js, TypeScript, Taildwind y Prisma

## Crear el proyecto https://nextjs.org/docs/getting-started

```
npx create-next-app@latest --typescript
```

---

## Configuración Tailwind https://tailwindcss.com/

1. Instalar

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

2. Agregar el content en `taildwind.config`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		container: {
			center: true,

			padding: {
				DEFAULT: '1rem',
				// sm: '2rem',
				// lg: '4rem'
				// xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			animation: {
				fadeIn: 'fadeIn 1s 1',
				fadeOut: 'fadeOut 1s 1'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 }
				}
			}
		}
	},
	plugins: [require('tw-elements/dist/plugin')]
};

```

3. Agregar las directivas de Taildwins `public/styles/globals.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
	.btn {
		@apply flex justify-center items-center text-center text-white font-bold text-xs uppercase rounded px-4 py-2 transition-colors cursor-pointer;
	}
}

```

---

## Configurar TW-Elements https://tailwind-elements.com/

1. Instalación

```
npm install tw-elements
```

2. Integración en `tailwind.config.js`

```
module.exports = {
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    plugins: [
        require('tw-elements/dist/plugin')
    ]
}
```

3. Agregar el script a next `_document.ts`

```
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang='es'>
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script
					src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'
					strategy='afterInteractive'
				/>
			</body>
		</Html>
	);
}

```

---

---

# Configuración de Base de Datos por medio de Docker Compose

1. Crear el archivo **docker-compose.yml** con la DB deseada (mariaDB)

```
services:
    db:
        container_name: database
        image: mariadb:jammy
        volumes:
            - ./DB_SQL:/var/lib/mysql
        environment:
            MARIADB_DATABASE: journal
            MARIADB_ROOT_PASSWORD: copca_root
            MARIADB_USER: copca
            MARIADB_PASSWORD: 123456
        restart: always
        ports:
            - 3306:3306

```

2. Para correr localmente. el -d, significa **detached**

```
docker compose up -d
```

---

---

# Configuración de Prisma

1. Instalamos dependencias

```
npm i -D prisma
npm i @prisma/client
```

2. Arrancamos el proyecto

```
npx prisma init
```

3. Configurar el archivo **prisma/schema.prisma** de acuerdo a la DB que usaremos

```
datasource db {
	provider = "mysql"
	url      = env("DATABASE_URL")
}
```

4. Agregar la cadena de conexion en **.env**

```
DATABASE_URL=mysql://root:copca_root@localhost:3306/journal
```

5. Hacer el Modelado en **prisma/schema.prisma**

6. Hacemos la migracion del codigo de prisma a SQL

```
npx prisma migrate dev
```

7. Reset de la DB con Prisma

```
npx prisma migrate reset
```

8. Abrir Prisma Studio

```
npx prisma studio
```

9. Cargar la base de datos con "seedData"
    1. Crear los archivos sedData en **/prisma/data/**
    2. Hacer el archivo de carga **/prisma/seed.ts**
    3. Instalar la dependencia `npm i ts-node`
    4. Modificar el archivo package.json

```
"prisma": {
		"seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
	},
```

5. Cargar seedData

```
npx prisma db seed
```

---

---

# Configuración de Redux-ToolKit

1. Instalar redux https://redux-toolkit.js.org/tutorials/typescript

```
npm install @reduxjs/toolkit react-redux
```

2. Crear store/store.ts
3. Crear el hooks/redux-hook.ts
