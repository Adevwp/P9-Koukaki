<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'koukaki' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(m7mNQjXrYv|#5G.&uG1pCPuJn3dy0x_ls0ep}8u@sHHB0(J0DAP#$Wp#0z:Dg}#' );
define( 'SECURE_AUTH_KEY',  'KV+(`^8S}C(N5K%3wZ`^50{QGRs1?X>e>Q=R_-g/`FCeqZFpD:&y0PR(uZ[oEz&u' );
define( 'LOGGED_IN_KEY',    'Ge<7N%%_$04b#Zqp.#RsK_WIzle&eckY:zWYm-(d2K{BBV]:=?N:Oefoo$pNpOsW' );
define( 'NONCE_KEY',        'y$J#kaIBY)hsD~Y3Z|.54~|5`X5,7WVTA;}qq]l+-}l,+tmg-u&zbU+gSn<u7 ;U' );
define( 'AUTH_SALT',        '*>B*hCRbILt:(R%.GI9vAc1|fmeOiJ9Y@J1 3WVh9aaT-_.1][T 5^Yx4Oo&UJqy' );
define( 'SECURE_AUTH_SALT', '%*jD!2~+,*:(Vumm^@u!Z,%7eHE3UAA9?ph8wD<>d=nM4d}UWgQ^<f/OliegdKWv' );
define( 'LOGGED_IN_SALT',   'I_m!f_;(Jl9We(7h}P+tsB@[r@A`@pbF}Ml-T[$:yZU@8U=(aRhQTVb0jLs{lEEs' );
define( 'NONCE_SALT',       '6b!34x-[&Is^fN[(#^&EU=,;}NU!V;Ut{Z}~Tx(?q6m-%7U!W*IXv?|[0w5qWAV&' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
