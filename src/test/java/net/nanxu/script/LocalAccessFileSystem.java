package net.nanxu.script;

import java.io.IOException;
import java.net.URI;
import java.nio.channels.FileChannel;
import java.nio.channels.SeekableByteChannel;
import java.nio.file.AccessMode;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.OpenOption;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.util.Map;
import java.util.Set;
import org.graalvm.polyglot.io.FileSystem;

/**
 * LocalAccessFileSystem.
 *
 * @author: P
 **/
public class LocalAccessFileSystem implements FileSystem {

    private final String basePath = "C:\\workspace\\demo_code\\halo-plugin-script\\src\\test\\resources\\";

    public static final Map<String, String> NODE_MODULES = Map.of(
        "axios", "commons/axios/index.js",
        "@halo-dev/api-client", "commons/@halo-dev/api-client/halo-api-client.es.js",
        "@nanxu/cloud", "commons/@nanxu/cloud-sdk/cloud-sdk.es.js"
    );


    @Override
    public Path parsePath(URI uri) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Path parsePath(String path) {
        System.out.println("parsePath: " + path);
        if (NODE_MODULES.containsKey(path)) {
            return Paths.get(basePath + NODE_MODULES.get(path));
        }
        return Paths.get(path);
    }

    @Override
    public void checkAccess(Path path, Set<? extends AccessMode> modes, LinkOption... linkOptions)
        throws IOException {
        System.out.println("checkAccess: " + path);
    }

    @Override
    public void createDirectory(Path dir, FileAttribute<?>... attrs) throws IOException {
        Files.createDirectory(dir, attrs);
    }

    @Override
    public void delete(Path path) throws IOException {
        Files.delete(path);
    }

    @Override
    public SeekableByteChannel newByteChannel(Path path, Set<? extends OpenOption> options,
        FileAttribute<?>... attrs) throws IOException {
        return FileChannel.open(path, options, attrs);
    }

    @Override
    public DirectoryStream<Path> newDirectoryStream(Path dir,
        DirectoryStream.Filter<? super Path> filter) throws IOException {
        return Files.newDirectoryStream(dir, filter);
    }

    @Override
    public Path toAbsolutePath(Path path) {
        return path;
    }

    @Override
    public Path toRealPath(Path path, LinkOption... linkOptions) throws IOException {
        return path;
    }

    @Override
    public Map<String, Object> readAttributes(Path path, String attributes, LinkOption... options)
        throws IOException {
        return Map.of();
    }
}
