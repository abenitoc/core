#!/bin/sh
##	Script de Gordos
##	Alberto Benito Campo 03940826Y
##	Francisco Javier Biosca Vergara 53764843C
	
# HOME = ~/

	case $# in 
		## Sin parámetros hacemos una búsqueda por defecto
		0)
		
		du $HOME | sort -n | tail -10 
		
		exit 0 ;;


		##Con sólo un parámetro:

		1) if [ -d $1 ]; then 
		##Si es un directorio ejecutamos el comando con 10 por defecto sobre ese directorio
		du $1 | sort -n | tail -10 
		
		exit 0	
		
		else
			echo "Error no es un directorio, ni un argumento válido"
		exit 1
		fi;;
		
		## Para dos parámetros
		## Opción -n y número:
		2)if [ "-n" = $1 ] && [ $2 -gt 0 ]; then 
		  	
		du $HOME | sort -n | tail -$2 
		
		exit 0
		
		elif [ "-n" != $1 ]; then 

			echo "El primer argumento no es un argumento válido"
			exit 1
	    
	    elif [ $2 -lt 0 ]; then
		
			echo "El número de listado es un valor no permitido"
			exit 1
		fi

		;;
		
		3)if [ $1 = "-n" ] &&[ $2 -gt 0 ] && [ -d $3  ]; then 				
		
			du $3 | sort -n | tail -$2 
		exit 0
		
		elif [ "-n" != $1 ]; then 

			echo "El primer argumento no es un argumento válido"
			exit 1

	    elif [ $2 -lt 0 ]; then
		
			echo "El número de listado es un valor no permitido"
		exit 1

		elif ! [ -d $3 ]; then
		
			echo "El tercer argumento no es un directorio"
		exit 1

		fi

		;;

		*) echo "Operacion no contemplada"
		exit 1
		;;
	esac
		
		
			
			
			 

